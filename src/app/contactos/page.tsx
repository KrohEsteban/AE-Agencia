import Formulario from '@/components/formulario'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Contactos',
  description: 'Somos una agencia que ofrece soluciones integrales para tu empresa o negocio, posicionando tu marca y escalando tus ventas de manera sostenible.',
  openGraph: {
    title: 'Contactos - AE Agencia',
    description: 'Somos una agencia que ofrece soluciones integrales para tu empresa o negocio, posicionando tu marca y escalando tus ventas de manera sostenible.',
    url: 'https://ae-agencia.com/contactos',
    siteName: 'AE Agencia',
    images: '/images/Nuestros-Servicios-AE-Agencia-Marketing-Digital.webp',
  },
}

export default function Page() {
  return (
    <main className='w-full pb-20'>
      <div className='py-10 pt-32'>
        <h1 className='text-center md:text-start md:pl-36 text-3xl font-bold py-10'>CONTACTANOS</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5' >

          {/* formulario */}
          <div>
            <Formulario />
            </div>


              <div className='grid grid-cols-2 '>
              <Link href="https://www.facebook.com/ae.agencia">
                <Image src="/imagenes/Icono-Facebook-AE-Agencia.webp" alt="Icono de Facebook"
                  width={400}
                  height={400}
                  className='mt-auto ml-auto'
                />
                </Link>
                <Link href="https://www.instagram.com/agencia_ae/">
                <Image src="/imagenes/Icono-Instagram-AE-Agencia-1.webp" alt="Icono de Instagram"
                  width={400}
                  height={400}
                  className='mt-auto mr-auto'
                />
                </Link>
                <Link href="https://wa.me/542954298314"> 
                <Image src="/imagenes/Icono-Whatsapp-AE-Agencia.webp" alt="Icono de Whatsapp"
                  width={400}
                  height={400}
                  className='mb-auto ml-auto'
                />
                </Link>
                
                <Link href="https://www.linkedin.com/company/ae-agencia/"> 
                <Image src="/imagenes/—Pngtree—linkedin-icon-logo_3560498.webp" alt="Icono de Linkedin"
                  width={400}
                  height={400}
                  className='mb-auto mr-auto'
                />
                </Link>
               
              </div>

            </div>
          </div>

        </main>
        )
}
