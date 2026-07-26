export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-100 ${
        hover ? 'transition-all duration-300 ease-sugi hover:shadow-lg hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
