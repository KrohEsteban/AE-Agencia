import Image from "next/image";
import Link from 'next/link'

export default function Logowhatsapp(){

    return(
        <div className="fixed w-20 bottom-6 right-6 z-10 bg-gris bg-opacity-50 rounded-full">
            <Link href="https://wa.me/542954298314">
            <Image src='/imagenes/Icono-Whatsapp-AE-Agencia.png' alt="Contacto por Whatsapp"
            width={200}
            height={200}
            />
            </Link>
        </div>
    )
}