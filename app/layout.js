import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Coding Stock',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-br from-slate-900 to-slate-700 w-screen h-screen text-slate-200'>
        {children}
      </body>
    </html>
  )
}
