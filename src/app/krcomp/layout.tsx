import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "KR ─ Componentes Eletrônicos e Instrumentos Musicais",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}
