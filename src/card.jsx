import { useState } from 'react'
import { FaBars } from "react-icons/fa"; 

export default function Card() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => setDarkMode(!darkMode)

  return (
  <header>
   <nav className= ' w-3/4 bg-blue-800 mx-auto m-4 p-3 '>
    <div  className='px-4 flex justify-between items-center h-12'>
      <div className='text-lg text-white'> Mi App
        
          </div>
      <div className='flex space-x-4 text-sm font-bold'>
        <a href='#' className='text-white hover:text-gray-600' > Inicio  </a>
         <a href='#' className='text-white hover:text-gray-600'> Servicios  </a>
          <a href='#' className='text-white hover:text-gray-600'> Contacto  </a>
          <FaBars className='text-white text-2xl cursor-pointer text-white hover:text-gray-600'/>
          
      </div>

    </div>

   </nav> <br/>

  <h1 className='text-center text-2xl font-bold '>Bienvenido a Mi App</h1> <br/>
  <p className='text-blue-600 text-center'>Aqui inicia tu contenido principal</p>
  </header>
             
  )
}
