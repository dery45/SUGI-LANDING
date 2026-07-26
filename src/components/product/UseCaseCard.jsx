export default function UseCaseCard({ title, actor, situation, outcome, icon = '🌾' }) {
  return (
    <div className="rounded-2xl bg-shade-600 text-white p-6 md:p-8">
      <div className="flex items-start gap-4">
        <span className="text-2xl">{icon}</span>
        <div>
          <h4 className="font-bold text-primary mb-1">{title}</h4>
          <p className="text-xs text-gray-400 mb-3">{actor}</p>
          <div className="space-y-2 text-sm text-gray-300">
            <p><span className="text-primary font-medium">Situasi:</span> {situation}</p>
            <p><span className="text-primary font-medium">Hasil:</span> {outcome}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
