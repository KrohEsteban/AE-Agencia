import Banner from '@/components/banner'
import Image from 'next/image'

export const metadata = {
  title: 'Nosotros',
  description: 'Agencia de Marketing Digital: Estrategias efectivas para hacer crecer tu negocio en línea',
  openGraph: {
    title: 'Nosotros - AE Agencia',
    description:'Agencia de Marketing Digital: Estrategias efectivas para hacer crecer tu negocio en línea',
    url: 'https://ae-agencia.com/nosotros',
    siteName: 'AE Agencia',
    images: '../../images/Sobre-Nosotros-AE-Agencia.jpg',
  },
 }

export default function Page() {
  return (
    <main className="w-full bg-gris pb-20" >

      {/* Baner principal, le mandamos la imagen y el titulo, gnera un titulo h1 */}
      <Banner imagen="/imagenes/Sobre-Nosotros-AE-Agencia.webp" titulo="NOSOTROS"/>


      <div className='py-20 w-11/12 m-auto'>

   
      <h2 className='text-2xl text-center py-20'>AGENCIA DE MARKETING DIGITAL: ESTRATEGIAS EFECTIVAS PARA HACER CRECER TU NEGOCIO EN LÍNEA</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
        <div className='space-y-4'>
          <p>Bienvenido a AE Agencia, una agencia de marketing digital que ofrece soluciones integrales de marketing, desarrollo web y diseño gráfico para ayudar a las empresas a crecer en línea. En AE Agencia, nos apasiona ayudar a nuestros clientes a alcanzar sus objetivos de negocio a través de estrategias de marketing digital efectivas y personalizadas.</p>
          <p>Desde nuestra fundación en 2019, hemos trabajado con empresas de todos los tamaños y en diversas industrias para crear y ejecutar estrategias de marketing digital innovadoras. Nuestro equipo de expertos en marketing digital se enfoca en ayudar a nuestros clientes a aumentar su presencia en línea, mejorar su visibilidad en los motores de búsqueda y aumentar su tráfico y conversiones.</p>
          <p>Además de nuestras soluciones de marketing digital, también ofrecemos servicios de desarrollo web y diseño gráfico para ayudar a nuestros clientes a tener una presencia en línea efectiva y atractiva. Nuestro equipo de desarrolladores web y diseñadores gráficos altamente capacitados trabajan juntos para crear sitios web personalizados y diseños impresionantes que reflejen la identidad de marca de nuestros clientes y les ayuden a destacar en línea.</p>
          <p>En AE Agencia, nos destacamos por nuestra capacidad para adaptarnos a las necesidades específicas de cada cliente y crear soluciones personalizadas que generen resultados medibles. Desde la planificación y ejecución de campañas publicitarias en redes sociales hasta el diseño y desarrollo de sitios web y gráficos, ofrecemos una amplia gama de servicios para ayudar a nuestros clientes a alcanzar el éxito en línea.</p>
          <p>
          En resumen, en AE Agencia estamos dedicados a ayudar a nuestros clientes a alcanzar sus objetivos de negocio a través de soluciones de marketing digital, desarrollo web y diseño gráfico efectivas y personalizadas. Si estás buscando una agencia de marketing digital confiable y comprometida que pueda ayudarte a crecer en línea, ¡estás en el lugar correcto!
          </p>
          <p>Contáctanos hoy para conocer cómo podemos ayudarte a alcanzar el éxito en línea.</p>
        </div>
        <div className='m-auto'>
          <Image src="/imagenes/Nuestra-Mision-1024x576.webp" alt="Imagen sobre nuestra misión"
          width={800}
          height={800}
          />
        </div>
      </div>   
      </div>
    </main>
  )
}
