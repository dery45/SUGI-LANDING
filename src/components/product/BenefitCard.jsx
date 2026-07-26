export default function BenefitCard({ icon, title, desc, index = 0 }) {
  return (
    <div
      className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm transition-all duration-300 ease-sugi hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="text-2xl mb-3">{icon}</div>
      <h4 className="font-bold text-shade-600 mb-1">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  )
}
