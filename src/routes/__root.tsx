import { createRootRoute, Outlet, ScrollRestoration, Meta, Links } from '@tanstack/react-router'
import * as React from 'react'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Cédula Digital de Floro | Brutal Nouveau',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,600&family=Poppins:wght@400;500;600;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: '/src/styles.css',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang=es>
      <head>
        <Meta />
        <Links />
      </head>
      <body className=min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-sans antialiased>
        <Outlet />
        <ScrollRestoration />
      </body>
    </html>
  )
}
