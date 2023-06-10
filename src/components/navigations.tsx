'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Navigation (){

const [expand, setExpand]= useState(false)

    return(
        <>      
          <div className="absolute px-5 top-0 bg-transparent w-full flex justify-between md:justify-around items-center">
            {/* Logo de la empresa */}
            <Link href='/' aria-label="inicio"><Image src='/imagenes/cropped-AE.webp' alt='Logo de AE Agencia' 
            width={150}
            height={150}/>
            </Link>
            {/* Menu */}
        <div className="h-full md:w-2/6">
            {/* boton expandible para mobile */}
        <button onClick={()=>{expand?setExpand(false):setExpand(true)}} className="text-violeta rotate-90 text-3xl font-bold md:hidden">...</button>

        {/* navegacion formato desktop */}
        <nav className="hidden md:grid">
            <ul className="flex justify-around ">
                <Link className="w-20 h-10 flex justify-center items-center " href='/'><li className="hover:text-cyan-600 focus:text-cyan-600 hover:text-xl transition-all text-center">Inicio</li></Link>
                <Link className="w-20 h-10 flex justify-center items-center " href='/nosotros'><li className="hover:text-cyan-600 focus:text-cyan-600 hover:text-xl transition-all text-center">Nosotros</li></Link>
                <Link className="w-20 h-10 flex justify-center items-center " href='/servicios'><li className="hover:text-cyan-600 focus:text-cyan-600 hover:text-xl transition-all text-center">Servicios</li></Link>
                <Link className="w-20 h-10 flex justify-center items-center " href='/contactos'><li className="hover:text-cyan-600 focus:text-cyan-600 hover:text-xl transition-all text-center">Contactos</li></Link>
            </ul>
        </nav>
        
        </div>
        </div>
        {/* navegacion formato mobile */}
        <nav className={expand?"flex w-full md:hidden":"hidden"}>
            <ul className="flex-col w-full m-auto fixed top-28 right-0 bg-black/75">
                <Link className="w-full m-auto p-0" href='/'><li className="p-6 border-y border-white  hover:text-cyan-600 focus:text-cyan-600  text-center">Inicio</li></Link>
                <Link className="w-full m-auto" href='/nosotros'><li className="p-6  border-b border-white hover:text-cyan-600 focus:text-cyan-600 text-center">Nosotros</li></Link>
                <Link className="w-full m-auto" href='/servicios'><li className="p-6  hover:text-cyan-600 focus:text-cyan-600 text-center">Servicios</li></Link>
                <Link className="w-full m-auto" href='/contactos'><li className="p-6  border-y border-white hover:text-cyan-600 focus:text-cyan-600 text-center">Contactos</li></Link>
            </ul>
        </nav>
        </>

    )
}