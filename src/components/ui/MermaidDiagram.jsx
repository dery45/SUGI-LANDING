function splitLines(chart) {
  return chart.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('%%'))
}

function parseNodeLabel(raw) {
  const m = raw.match(/\[([^\]]*)\]/) || raw.match(/\("([^"]*)"\)/) || raw.match(/{([^}]*)}/) || raw.match(/>([^>]*)]/)
  return m ? m[1].replace(/\\n/g, '<br/>') : raw
}

function parseNodeId(raw) {
  return raw.replace(/\s*\[.*/, '').replace(/\s*\(.*/, '').replace(/\s*\{.*/, '').replace(/\s*>.*/, '').trim()
}

function isShape(s) {
  return s.endsWith(']') || s.endsWith(')') || s.endsWith('}') || s.endsWith('>]')
}

export default function MermaidDiagram({ chart, className = '' }) {
  const lines = splitLines(chart)
  const subgraphs = []
  const standalone = { id: '__main__', title: '', nodes: [], edges: [] }
  let current = standalone
  let stack = [standalone]

  lines.forEach(line => {
    if (line.startsWith('subgraph ')) {
      const title = line.replace('subgraph ', '').replace(/["]/g, '').trim()
      const sg = { id: `sg-${Math.random().toString(36).slice(2, 6)}`, title, nodes: [], edges: [], children: [] }
      current.children ? current.children.push(sg) : (current.children = [current.children || [], sg])
      stack.push(sg)
      current = sg
      subgraphs.push(sg)
      return
    }
    if (line === 'end') { stack.pop(); current = stack[stack.length - 1] || standalone; return }

    const direction = line.match(/^direction\s+(TB|LR|BT|RL)/)
    if (direction) { current.direction = direction[1]; return }

    if (line.includes('-->')) {
      const parts = line.split('-->')
      let from = parts[0].trim()
      let to = parts[1].trim()
      let label = ''
      const labelM = from.match(/\|([^|]+)\|$/)
      if (labelM) { label = labelM[1]; from = from.slice(0, from.lastIndexOf('|') - 1).trim() }

      const fromId = isShape(from) ? parseNodeId(from) : from
      const toId = isShape(to) ? parseNodeId(to) : to

      const fromLabel = isShape(from) ? parseNodeLabel(from) : from
      const toLabel = isShape(to) ? parseNodeLabel(to) : to

      if (fromId && toId) {
        current.edges.push({ from: fromId, to: toId, label: label.replace(/"/g, '') })
        if (!current.nodes.find(n => n.id === fromId)) current.nodes.push({ id: fromId, label: fromLabel })
        if (!current.nodes.find(n => n.id === toId)) current.nodes.push({ id: toId, label: toLabel })
      }
      return
    }

    if (line.includes('&') && line.includes('-->')) {
      const parts = line.split('-->')
      const sources = parts[0].split('&').map(s => s.trim())
      const target = isShape(parts[1].trim()) ? parseNodeId(parts[1].trim()) : parts[1].trim()
      sources.forEach(s => {
        const sid = isShape(s) ? parseNodeId(s) : s
        const sl = isShape(s) ? parseNodeLabel(s) : s
        current.edges.push({ from: sid, to: target, label: '' })
        if (!current.nodes.find(n => n.id === sid)) current.nodes.push({ id: sid, label: sl })
      })
      const tl = isShape(parts[1].trim()) ? parseNodeLabel(parts[1].trim()) : target
      if (!current.nodes.find(n => n.id === target)) current.nodes.push({ id: target, label: tl })
      return
    }

    if (line.includes('-->|')) {
      const m = line.match(/(\S+)\s*-->\|([^|]+)\|\s*(\S+)/)
      if (m) {
        const fid = isShape(m[1]) ? parseNodeId(m[1]) : m[1]
        const fl = isShape(m[1]) ? parseNodeLabel(m[1]) : m[1]
        const tid = isShape(m[3]) ? parseNodeId(m[3]) : m[3]
        const tl = isShape(m[3]) ? parseNodeLabel(m[3]) : m[3]
        current.edges.push({ from: fid, to: tid, label: m[2].replace(/"/g, '') })
        if (!current.nodes.find(n => n.id === fid)) current.nodes.push({ id: fid, label: fl })
        if (!current.nodes.find(n => n.id === tid)) current.nodes.push({ id: tid, label: tl })
      }
      return
    }

    const nodeM = line.match(/^([A-Za-z0-9_]+)\s*\[([^\]]*)\]/) || line.match(/^([A-Za-z0-9_]+)\s*\("([^"]*)"\)/) || line.match(/^([A-Za-z0-9_]+)\s*\{([^}]*)\}/)
    if (nodeM && !current.nodes.find(n => n.id === nodeM[1])) {
      current.nodes.push({ id: nodeM[1], label: nodeM[2].replace(/\\n/g, '<br/>') })
      return
    }
  })

  const colorMap = {}
  subgraphs.forEach((sg, i) => {
    const hue = (i * 60 + 200) % 360
    const color = `hsl(${hue}, 35%, 45%)`
    sg.nodes.forEach(n => { colorMap[n.id] = color })
  })

  function renderGraph(graph, depth = 0) {
    const items = graph.nodes || []
    const edgeList = graph.edges || []
    const children = graph.children || []

    const isHorizontal = graph.direction === 'LR'

    return (
      <div className={`flex ${isHorizontal ? 'flex-row items-center' : 'flex-col items-center'} gap-2 flex-wrap justify-center`} style={{ padding: depth > 0 ? '8px' : '0' }}>
        {items.map((node, i) => {
          const edge = edgeList.find(e => e.from === node.id)
          const color = colorMap[node.id] || '#2d6a4f'
          return (
            <div key={node.id} className="flex items-center gap-2">
              <div
                className="rounded-lg px-3 py-2 text-xs font-medium text-center shadow-sm min-w-[60px] max-w-[200px]"
                style={{
                  border: `2px solid ${color}`,
                  background: `${color}12`,
                  color: color,
                }}
                dangerouslySetInnerHTML={{ __html: node.label }}
              />
              {edge && (
                <div className="flex items-center gap-1">
                  {edge.label && <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded whitespace-nowrap">{edge.label}</span>}
                  <span className="text-gray-400" style={{ fontSize: '18px' }}>&#8594;</span>
                </div>
              )}
              {!edge && i < items.length - 1 && <span className="text-gray-300">&nbsp;</span>}
            </div>
          )
        })}
        {children.length > 0 && (
          <div className="flex flex-col gap-4 w-full mt-2">
            {children.map(child => (
              <div key={child.id} className="border-2 border-dashed border-gray-300 rounded-xl p-3">
                {child.title && <div className="text-[10px] font-semibold text-gray-500 mb-2 text-center uppercase tracking-wider">{child.title}</div>}
                {renderGraph(child, depth + 1)}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`w-full overflow-x-auto py-4 ${className}`}>
      <div className="min-w-max px-4">
        {renderGraph(standalone)}
      </div>
    </div>
  )
}