import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>{children}</main>
  )
}