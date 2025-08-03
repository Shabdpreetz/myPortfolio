import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ReduxProvider } from "@/components/redux-provider"
import { QueryProvider } from "@/components/query-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Shabdpreet Singh - Full-Stack Developer",
  description:
    "Portfolio of Shabdpreet Singh, a passionate Full-Stack Developer and BCA student specializing in React, Next.js, and modern web technologies.",
  keywords: "Shabdpreet Singh, Full-Stack Developer, React, Next.js, Portfolio, BCA Student",
  authors: [{ name: "Shabdpreet Singh" }],
  openGraph: {
    title: "Shabdpreet Singh - Full-Stack Developer",
    description: "Portfolio of Shabdpreet Singh, a passionate Full-Stack Developer and BCA student.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ReduxProvider>
          <QueryProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
              <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/80 dark:from-slate-900 dark:via-blue-950/30 dark:to-indigo-950/50">
                <Navigation />
                <main>{children}</main>
                <Footer />
              </div>
            </ThemeProvider>
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
