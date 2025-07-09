import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Nunito({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Michele Schimd Blog',
  description: 'A blog about AI, programming, computer science, teaching and lots more...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}