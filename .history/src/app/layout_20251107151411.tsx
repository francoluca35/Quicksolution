import type { Metadata } from 'next'
import '../styles/globals.css'
import '../index.css'

export const metadata: Metadata = {
  title: 'QuickSolution - Sistema de Comandas para Restaurantes',
  description: 'Sistema integral de comandas múltiples que revoluciona la gestión de tu restaurante. Controla mesas, delivery, takeaway y mucho más desde una sola plataforma.',
  keywords: ['restaurante', 'comandas', 'delivery', 'takeaway', 'gestión restaurante', 'POS'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
