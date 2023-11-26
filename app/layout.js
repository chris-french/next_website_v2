import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from './lib/registry'
import Layout from './components/layout'
import { ResponsiveProvider } from './providers/ResponsiveProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'chrisfrench.io',
  description: 'Chris French\'s Personal Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ResponsiveProvider>
            <Layout>
              {children}
            </Layout>
          </ResponsiveProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
