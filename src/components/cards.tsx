import Image from "next/image";
import Link from "next/link";

export default function Cards(

    props:{    
        imagen:string,
        titulo:string,
        texto:string,
        link:string,
        textlink:string,
     }

){


    return(
        <div className="text-center m-auto space-y-5 pb-10">
            <Image src={props.imagen} alt={props.titulo}
            width={600}
            height={600}
            className="m-auto"
            />
            <p className="text-2xl font-blod ">{props.titulo}</p>
            <div className="w-4/12 border-t border-dotted border-gray-400 m-auto"></div>
            <p className="h-20">{props.texto}</p>
            <button className="pt-10"><Link className="py-3 px-10 rounded-full border bg-gradient-to-b  from-violeta  to-yellow-600 hover:from-yellow-600 hover:to-violeta" href={props.link}>{props.textlink}</Link></button>

        
        </div>

    )
}