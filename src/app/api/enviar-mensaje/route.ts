import { NextRequest, NextResponse } from 'next/server'


 
export async function POST(request: NextRequest) {
const nodemailer = require('nodemailer');



    // const  nombre  = await request.json();
    // const  lastName  = await request.json();
    // const  phone  = await request.json();
    // const  email  = await request.json();
    // const  message  = await request.json();
    // const  interests = await request.json();
    const data = await request.json();

    console.log(data)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'paginawebformulario@gmail.com',
        //pass: 'Paginawebformulario123',
        pass: ' utojajlbyexhcuid',
      },
    });

    const mailOptions = {
      from: 'paginawebformulario@gmail.com',
      to: 'krohesteban@gmail.com',
      subject: 'Formulario de la Página web.',
      html: 
        `<h1>Estos son los datos del formulario</h1><h2>Nombre</h2> <p>${data.firstName}</p> <h2>Apellido</h2> <p>${data.lastName}</p>  <h2>Telefono</h2> <p>${data.phone}</p> <h2>Correo</h2> <p>${data.email}</p> <h2>Mensaje</h2> <p>${data.message}</p> <h2>Intereses</h2> <p>${data.interests}</p> `
        
      

    };
    

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Correo enviado correctamente' }, { status: 200 })

    } catch (error) {
      console.log('Error al enviar el correo:', error);
      return NextResponse.json({ message: 'Error al enviar el correo'  }, { status: 500 })
     
    }
 
}


