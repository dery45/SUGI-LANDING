export default function InsightExampleCard({ source, recommendation, index = 0 }) {
  return (
    <div
      className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 ease-sugi hover:shadow-md"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-3">
        <span className="shrink-0 w-8 h-8 rounded-full bg-tint-100/40 flex items-center justify-center text-tint-200 text-sm font-bold">
          {index + 1}
        </span>
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{source}</p>
          <p className="text-sm text-shade-600 leading-relaxed">
            &ldquo;{recommendation}&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}