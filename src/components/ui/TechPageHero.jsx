import Container from '../ui/Container'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

export default function TechPageHero({ badge, title, subtitle, ctaPrimary, ctaPrimaryHref, ctaPrimaryExternal, ctaSecondary, ctaSecondaryOnClick }) {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-shade-600">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shade-600/90 via-shade-600/70 to-shade-600" />
      </div>
      <Container className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl">
          {badge && <Badge className="mb-4">{badge}</Badge>}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">{title}</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">{subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            {ctaPrimary && ctaPrimaryExternal ? (
              <Button href={ctaPrimaryHref}>{ctaPrimary}</Button>
            ) : ctaPrimary ? (
              <Button to={ctaPrimaryHref}>{ctaPrimary}</Button>
            ) : null}
            {ctaSecondary && (
              <Button variant="secondary" onClick={ctaSecondaryOnClick}>{ctaSecondary}</Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}