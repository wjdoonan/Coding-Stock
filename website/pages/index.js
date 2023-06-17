import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <body className='bg-gradient-to-br from-slate-900 to-slate-700 flex w-screen h-screen text-slate-200'>
      <div className='w-full'>
        <div className='mx-auto my-12'>
          <h1 className='text-5xl underline decoration-violet-900 text-center'>Coding Stock</h1>
        </div>        
      </div>
    </body>
  )
}
