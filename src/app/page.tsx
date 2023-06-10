import Cards from '@/components/cards'
import Carrousel from '@/components/carrousel'
import Separacion from '@/components/separacion'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'AE Agencia - Agencia de Marketing Digital',
  description: 'Somos una agencia que ofrece soluciones integrales para tu empresa o negocio, posicionando tu marca y escalando tus ventas de manera sostenible.',
  openGraph: {
    title: 'AE Agencia - Agencia de Marketing Digital',
    description: ' Somos una agencia que ofrece soluciones integrales para tu empresa o negocio, posicionando tu marca y escalando tus ventas de manera sostenible.',
    url: 'https://ae-agencia.com/',
    siteName: 'AE Agencia',
    images: '../images/Banner-Marketing-Digital.webp',
  },
}
export default function Page() {

  //arreglo sobre para las cards de la pagina de incio
  const cards = [
    {
      imagen: '/imagenes/Diseno-Web-Servicios.webp',
      titulo: 'Desarrollo Web',
      texto: 'Creamos sitios web personalizados que reflejan la identidad de marca de nuestros clientes y los ayudan a destacar en línea.',
      link: '/servicios',
      textlink: 'VER MÁS',
    },
    {
      imagen: '/imagenes/Publicidad-en-Facebook-Servicios.webp',
      titulo: 'Anuncios en Google & Facebook Ads',
      texto: 'Creamos y ejecutamos campañas publicitarias efectivas en las principales plataformas de publicidad en línea para atraer a más clientes y aumentar tus conversiones.',
      link: '/servicios',
      textlink: 'VER MÁS',
    },

  ]



  return (
    <main className="w-full bg-gris pb-20">
      {/* banner superior */}
      <header>

        <Carrousel />

        <Separacion />
        {/* texto de Bill Gates */}
        <div className='flex-col text-center w-11/12 m-auto py-10'>
          <Image src="/imagenes/quote-1.webp" alt="imagen comillas"
            width={100}
            height={100}
            className=' w-10 md:w-20 lg:w-32' />
          <p className='text-2xl font-light'>“Habrán dos tipos de negocios en el siglo XXI, los que estén en internet, y los que ya no existan”</p>
          <p className='pt-6 text xl font-bold'>Bill Gates | Cofundador de Microsoft</p>
          <Image src="/imagenes/quote-1.webp" alt="imagen comillas"
            width={100}
            height={100}
            className='ml-auto rotate-180 w-10 md:w-20 lg:w-32' />
        </div>

        <Separacion />

        {/* segundo texto */}
        <div className=' w-11/12 m-auto py-20 flex-col space-y-10'>
          <h2 className=' text-center text-2xl'>¿QUÉ ES EL MARKETING DIGITAL?</h2>
          <div className=' w-full text-justify'>
            <p>Según Wikipedia, el Marketing Digital es el componente de la mercadotecnia que utiliza internet y tecnologías digitales en línea, como computadoras de escritorio, teléfonos móviles y otras plataformas y medios digitales para promover productos y servicios.</p>
            <p>Aunque para nosotros es mucho más que eso, es la implementación de estrategias personalizadas y adaptadas a cada cliente, dando así lugar a la identidad de cada empresa dentro de la estrategia propiamente dicha. Con esto podemos entender que el Marketing Digital es una nueva forma de humanizar tu marca o empresa en internet, la mejor manera de vender HOY es no vendiendo, sino dando a conocer al público la identidad de tu negocio, creando comunidades y formando una relación con los potenciales clientes.</p>
          </div>

        </div>

        <Separacion />
        <Separacion />

        {/* cards de la pagina de inicio */}
        <h2 className='text-center text-2xl py-10'>SERVICIOS DE MARKETING DIGITAL MÁS SOLICITADOS</h2>
        <div className='grid w-11/12 md:w-10/12 m-auto grid-cols-1 md:grid-cols-2 gap-9 justify-around'>

          {
            cards.map((item: {
              imagen: string,
              titulo: string,
              texto: string,
              link: string,
              textlink: string,
            }) => {
              return (

                <Cards key={item.titulo}
                  imagen={item.imagen}
                  titulo={item.titulo}
                  texto={item.texto}
                  link={item.link}
                  textlink={item.textlink} />
              )
            })
          }




        </div>
        <Separacion />

        {/* seccion de consulta gratuita */}
        <div className='text-center py-10'>
          <p className=' text-center text-2xl py-5 '>CONSULTA GRATUITA</p>
          <p className='p-5 pb-10'>Envianos tú consulta, y obtén una consultoría gratuita, comienza con el crecimiento de tú negocio y el aumento de tús ventas online. Un asesor se contactará contigo en las próximas 24 hs hábiles.</p>
          <div className='h-w-56 w-56 p-5 border border-white m-auto text-center rounded-3xl'>
            <Link href='/contactos'>
            <p  className='text-lg'>CONTACTANOS</p>
            <svg xmlns="https://www.w3.org/2000/svg" className='w-9/12 h-9/12 m-auto stroke-cyan-600' viewBox="0 0 512 512"><path d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"></path></svg>
            <p className='text-lg'>OBTÉN UNA CONSULTA GRATUITA</p> 
          </Link>
          </div>
          
        </div>


      </header>
    </main>
  )
}
