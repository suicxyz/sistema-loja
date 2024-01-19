import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ponto a Ponto ─ Armarinhos e Aviamentos",
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
