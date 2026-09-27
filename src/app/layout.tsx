import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FoundersMatch - Find Investors',
  description: 'Connect with local and global investors for your startup.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* Navigation Placeholder */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference text-white">
          <div className="font-bold text-xl tracking-tighter">FoundersMatch</div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#network" className="hover:text-indigo-400 transition-colors">Network</a>
            <button className="px-4 py-2 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors">
              Sign In
            </button>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
