import Layout from '../../comps/Layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='Sign Up'>
          <h1>Sign up</h1>
    </Layout>
  )
}
