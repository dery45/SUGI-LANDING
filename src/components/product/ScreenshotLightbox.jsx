import { useState, useEffect, useCallback } from 'react'

export default function ScreenshotLightbox({ images, className = '' }) {
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') setIdx(i => Math.min(i + 1, images.length - 1))
      if (e.key === 'ArrowLeft') setIdx(i => Math.max(i - 1, 0))
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, close, images.length])

  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => { setIdx(i); setOpen(true) }}
            className="group relative overflow-hidden rounded-xl border border-gray-100 bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            {img.label && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <span className="text-xs text-white font-medium">{img.label}</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-lg"
              aria-label="Close"
            >
              ✕
            </button>

            <img
              src={images[idx].src}
              alt={images[idx].alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />

            <div className="absolute inset-y-0 left-0 w-1/4 flex items-center justify-start">
              {idx > 0 && (
                <button
                  onClick={() => setIdx(i => i - 1)}
                  className="ml-2 w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Previous"
                >
                  ‹
                </button>
              )}
            </div>
            <div className="absolute inset-y-0 right-0 w-1/4 flex items-center justify-end">
              {idx < images.length - 1 && (
                <button
                  onClick={() => setIdx(i => i + 1)}
                  className="mr-2 w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Next"
                >
                  ›
                </button>
              )}
            </div>

            <p className="mt-3 text-center text-sm text-white/70">
              {images[idx].alt}
            </p>
            <p className="text-center text-xs text-white/40">
              {idx + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
