import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'

export const Route = createFileRoute('/')({
  component: PetIdCardPage,
})

function GeometricSeal({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="24"
        r="21"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="3 3"
      />
      <circle
        cx="24"
        cy="24"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <polygon
        points="24,13 32,29 16,29"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="24"
        cy="24"
        r="2.5"
        fill="currentColor"
      />
    </svg>
  )
}

function PetIdCardPage() {
  const handleContactOwner = () => {
    window.open('https://wa.me/573134796160', '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="min-h-[100dvh] w-full flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[var(--color-bg)]">
      {/* Tarjeta Cédula Digital de Mascota */}
      <article
        className="relative w-full max-w-[430px] bg-[var(--color-surface)] border-[2.5px] border-[var(--color-stroke)] card-whiplash p-5 sm:p-6 flex flex-col justify-between"
        style={{ boxShadow: 'var(--shadow-card)' }}
      >
        {/* Sello Geométrico: Esquina Superior Izquierda */}
        <div className="absolute top-2.5 left-2.5 text-[var(--color-stroke)] opacity-75 pointer-events-none">
          <GeometricSeal className="w-8 h-8 sm:w-9 sm:h-9" />
        </div>

        {/* Sello Geométrico: Esquina Inferior Derecha (Rotado 180°) */}
        <div className="absolute bottom-2.5 right-2.5 text-[var(--color-stroke)] opacity-75 pointer-events-none rotate-180">
          <GeometricSeal className="w-8 h-8 sm:w-9 sm:h-9" />
        </div>

        {/* Cabecera / Tag superior */}
        <header className="flex flex-col items-center pt-2">
          <div
            className="tag-whiplash px-4 py-1 bg-[var(--color-accent-soft)] border-[2px] border-[var(--color-stroke)] text-[var(--color-text)] font-semibold tracking-wider text-[clamp(0.75rem,2.8vw,0.875rem)] uppercase"
            style={{ boxShadow: 'var(--shadow-element)' }}
          >
            ANIMACIÓN CAT
          </div>

          <h1 className="mt-3 font-serif font-black text-[clamp(2.5rem,10vw,3.25rem)] leading-none text-[var(--color-text)] tracking-tight text-center">
            Floro
          </h1>
          <p className="text-[clamp(0.7rem,2.5vw,0.8rem)] uppercase tracking-widest font-medium text-[var(--color-muted)] mt-0.5">
            Registro Oficial de Identidad Felina
          </p>
        </header>

        {/* Marco del gato: Único panel con clip-path: polygon (torn edge) */}
        <section className="my-4 w-full">
          <div
            className="frame-whiplash border-[2.5px] border-[var(--color-stroke)] bg-[var(--color-surface-2)] overflow-hidden"
            style={{ boxShadow: 'var(--shadow-element)' }}
          >
            {/* Panel de acento superior rasgado (torn-panel) */}
            <div className="torn-panel bg-[var(--color-accent)] w-full py-1.5 px-3 flex justify-between items-center text-[var(--color-on-accent)]">
              <span className="text-[10px] font-bold tracking-widest uppercase">
                ESTADO: VIVO & RONRONEANDO
              </span>
              <span className="text-[10px] font-mono font-bold">
                REF #061226
              </span>
            </div>

            {/* Contenedor del loop animado */}
            <div className="relative w-full aspect-4/3 flex items-center justify-center p-2 bg-[var(--color-surface-2)]">
              <img
                src="/cat_walk_loop.webp"
                alt="Animación nativa de Floro caminando en bucle continuo"
                className="w-full h-full object-contain pointer-events-none select-none"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Datos de la Cédula */}
        <section className="w-full space-y-2.5 my-1">
          <div
            className="p-3 bg-[var(--color-surface)] border-[2px] border-[var(--color-stroke)] rounded-lg flex items-center justify-between"
            style={{ boxShadow: 'var(--shadow-element)' }}
          >
            <span className="text-[clamp(0.75rem,2.6vw,0.85rem)] font-semibold text-[var(--color-muted)] uppercase tracking-wider">
              Nacimiento
            </span>
            <span className="text-[clamp(0.85rem,3.2vw,1rem)] font-bold text-[var(--color-text)]">
              6 de diciembre 2026
            </span>
          </div>

          <div
            className="p-3 bg-[var(--color-surface)] border-[2px] border-[var(--color-stroke)] rounded-lg flex items-center justify-between"
            style={{ boxShadow: 'var(--shadow-element)' }}
          >
            <span className="text-[clamp(0.75rem,2.6vw,0.85rem)] font-semibold text-[var(--color-muted)] uppercase tracking-wider">
              Edad
            </span>
            <span className="text-[clamp(0.85rem,3.2vw,1rem)] font-bold text-[var(--color-text)]">
              6 años y 9 meses
            </span>
          </div>

          <div
            className="p-2.5 bg-[var(--color-danger-soft)] border-[1.5px] border-[var(--color-stroke)] rounded flex items-center justify-between text-[clamp(0.7rem,2.4vw,0.75rem)] font-medium text-[var(--color-text)]"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--color-danger)] inline-block animate-pulse" />
              Si lo ves perdido o en apuros:
            </span>
            <span className="font-bold underline cursor-pointer" onClick={handleContactOwner}>
              Avisar de inmediato
            </span>
          </div>
        </section>

        {/* Botón CTA: Contactar al dueño */}
        <footer className="mt-3 w-full pt-1 pb-1">
          <button
            type="button"
            onClick={handleContactOwner}
            className="btn-primary w-full py-3.5 px-6 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-on-accent)] font-bold text-[clamp(1rem,3.8vw,1.15rem)] tracking-wide border-[2.5px] border-[var(--color-stroke)] active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer flex items-center justify-center gap-2"
            style={{ boxShadow: 'var(--shadow-element)' }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.15.1-3.34-.81-2.8-1.16-4.61-4.01-4.75-4.2-.14-.19-1.13-1.5-1.13-2.87s.72-2.04.98-2.32c.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.31.4-.44.54-.15.15-.3.31-.13.61.17.29.77 1.27 1.65 2.05 1.13 1 2.08 1.31 2.38 1.46.3.15.47.13.64-.07.18-.2.76-.89.96-1.19.2-.3.41-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.23.57.35.08.13.08.76-.16 1.44z" />
            </svg>
            <span>Contactar al dueño</span>
          </button>
        </footer>
      </article>
    </main>
  )
}
