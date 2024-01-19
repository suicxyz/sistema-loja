import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

import StyledComponentsRegistry from "../registry";
import GlobalStyle from "@/styles/globalStyle";

export const metadata: Metadata = {
  title: "Grupo Hot Shop"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyle />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
    </html>
  )
}
