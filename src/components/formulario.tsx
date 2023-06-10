'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
    interests: string[];
  }

export default function Formulario (){

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        interests: [],
      });

      const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };


      const handleInterestChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
          setFormData((prevData) => ({
            ...prevData,
            interests: [...prevData.interests, value],
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            interests: prevData.interests.filter((interest) => interest !== value),
          }));
        }
      };

      const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario

        try {
          const response = await fetch('/api/enviar-mensaje', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
          alert(data.message);
        } catch (error) {
          alert('Error al enviar el correo:'+ error);
        }
      };



    return(
        <>
         <form onSubmit={handleSubmit} className='w-11/12 m-auto grid grid-cols-1 space-y-7 py-16'>
            <div className='grid grid-cols-2 gap-6'>


      <div className='grid grid-cols-1'>
        <label htmlFor="firstName"></label>
        <input
        className='text-black rounded-sm p-2'
          type="text"
          id="firstName"
          name="firstName"
          placeholder='Nombre'
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='grid grid-cols-1'>
        <label htmlFor="lastName"></label>
        <input
        className='text-black rounded-sm p-2'
          type="text"
          id="lastName"
          name="lastName"
          placeholder='Apellido'
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>
      </div>
      <div className='grid grid-cols-1'>
        <label htmlFor="phone"></label>
        <input
        className='text-black rounded-sm p-2'
          type="tel"
          id="phone"
          name="phone"
          placeholder='Teléfono'
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='grid grid-cols-1'>
        <label htmlFor="email"></label>
        <input
        className='text-black rounded-sm p-2'
          type="email"
          id="email"
          name="email"
          placeholder='Correo electrónico'
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='grid grid-cols-1'>
        <label htmlFor="message"></label>
        
        <textarea
        className='text-black rounded-sm p-2'
          id="message"
          name="message"
          rows={5}
          placeholder='Mensaje'
          value={formData.message}
          onChange={handleInputChange}
          required  
        ></textarea>
      </div>

      <div className='grid grid-cols-1 gap-4'>
        <label className='flex px-5'>
          <input
          className='self-center mx-5 bg-white checked:bg-blue-800 appearance-none w-3 h-3 border-2 border-white rounded-full'
            type="checkbox"
            name="interests"
            value="Publicidad online"
            onChange={handleInterestChange}
          />
          
            Publicidad online
         
          
        </label>
        <label className='flex px-5'>
          <input
          className='self-center mx-5 bg-white checked:bg-blue-800 appearance-none w-3 h-3 border-2 border-white rounded-full'
            type="checkbox"
            name="interests"
            value="Crear o editar mi sitio web"
            onChange={handleInterestChange}
          />
          Crear o editar mi sitio web
        </label>
        <label className='flex px-5'>
          <input
          className='self-center mx-5 bg-white checked:bg-blue-800 appearance-none w-3 h-3 border-2 border-white rounded-full'
            type="checkbox"
            name="interests"
            value="Administrar mis redes sociales"
            onChange={handleInterestChange}
          />
          Administrar mis redes sociales
        </label>
      </div>
      <button type="submit" className='w-32 h-10 m-auto rounded-md border border-white bg-white text-black hover:bg-black hover:text-white'>Enviar</button>
    </form>
        </>
    )
}