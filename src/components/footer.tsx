import Link from "next/link";
import Separacion from "./separacion";

export default function Footer() {
    return (
        <>
          <div className="border-t border-white  bg-gris">
          <Separacion/></div>
            <div className=" space-y-7 text-center py-2 bg-gris">
                <p>Quintana 135 1º Piso Oficina 4, CP 6300 Santa Rosa, La Pampa, Argentina | Celular: <Link href="https://wa.me/542954298314" className="font-bold hover:text-cyan-700">+54 2954 298314</Link> | Email: <Link href='mailto:contacto@ae-agencia.com' className="font-bold hover:text-cyan-700">contacto@ae-agencia.com</Link></p>

                <p>Copyright © 2023 AE Agencia - <strong className="font-bold">Ugarte Lionel Demian</strong> - <Link href="/aviso-de-privacidad" className="font-bold hover:text-cyan-700">Aviso de Privacidad</Link></p>

                <p><a href="http://qr.afip.gob.ar/?qr=in7Azfo4xyMnPQKL6_YayA,," aria-label="Link a los datos de afip" target="_F960AFIPInfo"><img className="m-auto" alt="Imagen de los datos de afip" src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg"></img></a></p>
            </div>
        </>
    )
}