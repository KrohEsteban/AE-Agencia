'use client'

import Separacion from "./separacion"


export default function Banner(props: {
    imagen: string,
    titulo: string,
}) {


    return (
        <>

            {/* background image para el banner  */}
            <div className="h-[500px] bg-center bg-cover " style={{ backgroundImage: `url(${props.imagen})` }}>
                {/* div para el background black semitransparente */}

                <div className="flex bg-black/50 w-full h-[450px] m-auto">
                    <div className="m-auto ">
                        {/* data en el banner */}



                        <h1 className="text-4xl font-bold text-center">{props.titulo}</h1>




                    </div>


                </div>

                <div className="bg-black/50 h-14">
                    <svg xmlns="https://www.w3.org/2000/svg" className="fill-[rgba(255,255,255,0.19)] rotate-180" viewBox="0 0 2600 131.1" preserveAspectRatio="none"><path className="uagb-container__shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path><path className="uagb-container__shape-fill" opacity="0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"></path><path className="uagb-container__shape-fill" opacity="0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"></path></svg>



                    <svg xmlns="https://www.w3.org/2000/svg" className="fill-[rgba(255,255,255,0.19)]" viewBox="0 0 2600 131.1" preserveAspectRatio="none"><path className="uagb-container__shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path><path className="uagb-container__shape-fill" opacity="0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"></path><path className="uagb-container__shape-fill" opacity="0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"></path></svg>
                </div>

            </div></>
    )
}