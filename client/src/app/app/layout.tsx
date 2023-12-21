import type { Metadata } from "next";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard"
};

export default function DashboardLayout({
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
