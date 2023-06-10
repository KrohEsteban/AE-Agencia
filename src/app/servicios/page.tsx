import Banner from '@/components/banner'
import Cards from '@/components/cards'


export const metadata = {
  title: 'Servicios',
  description: 'Sabemos que la pandemia mundial de 2020 azotó a prácticamente cada rubro, empresa y negocio. Por esto decidimos ofrecer soluciones integrales en paquetes al mejor precio con resultados inmediatos.',
  openGraph: {
    title: 'Servicios - AE Agencia',
    description:'Sabemos que la pandemia mundial de 2020 azotó a prácticamente cada rubro, empresa y negocio. Por esto decidimos ofrecer soluciones integrales en paquetes al mejor precio con resultados inmediatos.',
    url: 'https://ae-agencia.com/servicios',
    siteName: 'AE Agencia',
    images: '../../images/Servicios-AE-Agencia-2.jpg',
  },
 }

export default function Page() {


    //arreglo sobre para las cards de la pagina de incio
    const cards = [
      {
        imagen: '/imagenes/Diseno-Web-Servicios.webp',
        titulo: 'Desarrollo Web',
        texto: 'Creamos sitios web personalizados que reflejan la identidad de marca de nuestros clientes y los ayudan a destacar en línea.',
        link: '/contactos',
        textlink: 'MÁS INFO',
      },
      {
        imagen: '/imagenes/Publicidad-en-Facebook-Servicios.webp',
        titulo: 'Anuncios en Google & Facebook Ads',
        texto: 'Creamos y ejecutamos campañas publicitarias efectivas en las principales plataformas de publicidad en línea para atraer a más clientes y aumentar tus conversiones.',
        link: '/contactos',
        textlink: 'MÁS INFO',
      },
      {
        imagen: '/imagenes/Bots-de-Mensajeria-Seervicios.webp',
        titulo: 'Programación de Bots de Mensajería',
        texto: 'Creamos chatbots de respuesta personalizados que automatizan el proceso de atención al cliente y mejoran la experiencia del usuario en tu sitio web.',
        link: '/contactos',
        textlink: 'MÁS INFO',
      },
      {
        imagen: '/imagenes/Estrategia-de-Creacion-de-Contenidos-Servicios.webp',
        titulo: 'Creación de Estrategia de Contenido',
        texto: 'Creamos estrategias de contenido efectivas que aumentan tu presencia en línea y te ayudan a establecerte como líder en tu industria.',
        link: '/contactos',
        textlink: 'MÁS INFO',
      },
  
    ]


  return (
    <main className="w-full bg-gris pb-20">
      {/* Baner principal, le mandamos la imagen y el titulo, gnera un titulo h1 */}
      <Banner imagen="/imagenes/Servicios-AE-Agencia-2.webp" titulo="SERVICIOS"/>
      
      <div className='w-11/12 py-40 space-y-10 m-auto'>
        <h2 className='text-2xl text-center'>SOLUCIONES EN MARKETING DIGITAL: CREAMOS Y OPTIMIZAMOS TU EMBUDO DE VENTAS</h2>
        <p className='m-auto text-justify' >En AE Agencia, ofrecemos una amplia gama de servicios de marketing digital personalizados para ayudar a tu empresa a crecer en línea. Algunos de nuestros servicios incluyen:</p>
      </div>
      

       {/* cards, las mismas que en la pagina de inicio */}

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
    </main>
  )
}
