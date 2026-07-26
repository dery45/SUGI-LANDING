import { Link } from 'react-router-dom'

export default function Button({ children, variant = 'primary', to, href, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-sm transition-all duration-300 ease-sugi cursor-pointer'
  const variants = {
    primary: 'bg-primary text-shade-600 hover:bg-tint-100 hover:scale-[1.02] shadow-lg shadow-primary/20',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-shade-600 hover:scale-[1.02]',
    ghost: 'text-white/80 hover:text-white hover:bg-white/10',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}
