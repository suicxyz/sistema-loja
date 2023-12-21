import type { Metadata } from "next";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Configurações de Usuário"
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
};
