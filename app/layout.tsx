import type React from "react"
import type { Metadata } from "next"
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"

export const metadata: Metadata = {
  title: "STRUMFI TECH SRL - Soluții Web Personalizate",
  description:
    "STRUMFI TECH SRL oferă servicii complete de dezvoltare web: site-uri de prezentare, magazine online și soluții personalizate pentru afacerea ta.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
      </body>
    </html>
  )
}
