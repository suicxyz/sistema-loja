import { AuthProvider } from "@/contexts/AuthContext"
import type { Metadata } from "next"
import { Heebo } from "next/font/google"

import "@/lib/consts/global.css"

const heebo = Heebo({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Acessar painel"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={heebo.className}>
            {children}
        </body>
      </html>
    </AuthProvider>  
  )
}
