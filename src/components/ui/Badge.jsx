export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-tint-100/30 px-3 py-1 text-xs font-semibold text-tint-200 ${className}`}>
      {children}
    </span>
  )
}
