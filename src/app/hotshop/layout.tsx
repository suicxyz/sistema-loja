import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hot Shop ─ Acessórios e Assistência Técnica de Celulares e Computadores",
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
