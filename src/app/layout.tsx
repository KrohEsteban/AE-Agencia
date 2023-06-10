import Navigation from '@/components/navigations'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Logowhatsapp from '@/components/logowhatsapp'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'AE Agencia - Agencia de Marketing Digital',
    template: '%s | AE Agencia.'
  },
  siteName: 'AE Agencia - Agencia de Marketing Digital',
  themeColor: '#cf2e2e',  
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://ae-agencia.com/'),
  
  icons: {
    icon: '/imagenes/cropped-AE.png',
    shortcut: '/imagenes/cropped-AE.png',
    apple: '/imagenes/cropped-AE.png',
    other: {
      rel: '/imagenes/cropped-AE.png',
      url: '/imagenes/cropped-AE.png',
    },
  },

  manifest: '/manifest.json',
  
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
 }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[url(/imagenes/Fondo-Negro-Degradado-2.jpg)] bg-no-repeat bg-cover bg-fixed text-white'>
        <Navigation/>
        {children}
        <Footer/>
        <Logowhatsapp />
      </body>
    </html>
  )
}
