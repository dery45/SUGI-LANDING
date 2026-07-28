export default function Section({ children, className = '', dark = false, id }) {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 ${dark ? 'bg-shade-600 text-white' : 'bg-white text-shade-600'} ${className}`}
    >
      {children}
    </section>
  )
}
