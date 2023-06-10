'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Carrousel() {

    const [focus, setFocus] = useState(0)

    //arreglo con los datos del banner
    const banner = [
        {
            imagen: '/imagenes/Banner-Marketing-Digital.jpg',
            sobretitulo: 'MARKETING DIGITAL',
            titulo: 'AE AGENCIA',
            descripcion: 'Somos una agencia que ofrece soluciones integrales para tu empresa o negocio, posicionando tu marca y escalando tus ventas de manera sostenible.',
            link: '/contactos',
            textolink:'CONTACTAR'
        },
        {
            imagen: '/imagenes/Nuestros-Servicios-AE-Agencia-Marketing-Digital.jpg',
            sobretitulo: '',
            titulo: 'SERVICIOS',
            descripcion: 'Sabemos que la pandemia mundial de 2020 azotó a prácticamente cada rubro, empresa y negocio. Por esto decidimos ofrecer soluciones integrales en paquetes al mejor precio con resultados inmediatos.',
            link: '/servicios',
            textolink:'VER MAS'
        },
       
    ]


    return (
        <>
        {/* flecha para la izquierda */}
            <div className="absolute left-1 top-32 sm:px-5 md:px-10 lg:px-20 py-56 cursor-pointer"
                //on click para deslizar
                onClick={(()=>{(focus===0)?setFocus(banner.length- 1):setFocus(focus-1)})}
                >
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.433 15.992L22.69 5.712c.393-.39.393-1.03 0-1.42-.393-.39-1.03-.39-1.423 0l-11.98 10.94c-.21.21-.3.49-.285.76-.015.28.075.56.284.77l11.98 10.94c.393.39 1.03.39 1.424 0 .393-.4.393-1.03 0-1.42l-11.257-10.29"
                        fill="#ffffff" opacity="0.8" fillRule="evenodd" />
                </svg>
            </div>
            {/* flecha para la derecha */}
            <div className="absolute right-1 top-32 sm:px-5 md:px-10 lg:px-20 py-56 cursor-pointer"
            //on click para deslizar
            onClick={(()=>{(focus===banner.length-1)?setFocus(0):setFocus(focus+1)})}
            >
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.722 4.293c-.394-.39-1.032-.39-1.427 0-.393.39-.393 1.03 0 1.42l11.283 10.28-11.283 10.29c-.393.39-.393 1.02 0 1.42.395.39 1.033.39 1.427 0l12.007-10.94c.21-.21.3-.49.284-.77.014-.27-.076-.55-.286-.76L10.72 4.293z"
                        fill="#ffffff" opacity="0.8" fillRule="evenodd" />
                </svg>
            </div>
            
            
        {/* background image para el banner  */}
        <div className="h-[700px] lg:h-[800px] bg-center bg-cover " style={{ backgroundImage: `url(${banner[focus].imagen})` }}>
        {/* div para el background black semitransparente */}
        <div className="bg-black/75 w-full h-full">
            {/* data en el banner */}
            <div className="flex h-full items-center justify-center ">
                <div className="flex-col w-4/6 md:w-7/12 text-center space-y-3">

               <p className="text-2xl font-bold text-gray-300">{banner[focus].sobretitulo}</p> 
               <h1 className="text-5xl lg:text-6xl font-bold">{banner[focus].titulo}</h1>
               <p className="text-lg text-gray-300">{banner[focus].descripcion}</p>
               <button className="pt-10"><Link className="py-3 px-10 rounded-full hover:text-black hover:bg-white border " href={banner[focus].link}>{banner[focus].textolink}</Link></button>
                
                </div>
            </div>
            

        </div>
    </div>
    </>
    )
}