import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';

import CarruselkTapiceria from '../carrusel/CarruselkTapiceria';

function HomePage({ sala }) {
  const navigate = useNavigate();

  const goSalas = () => {
    navigate("/Salas")
  }

  const goGalery = () =>{
    navigate("/Galery")
  }
  

  return (

    <>
    

      <header className='mt-4'>
        <h1 className='text-center text-white'>Bienvenido a tu tapicería en línea</h1>
      </header>

    
     {<CarruselkTapiceria/>}
        

      <div className=" mt-2 row row-cols-1 row-cols-md-2 g-4">

        <div className="col">
          <div className="card bg-black text-white">
            <div className="card-header">
              <h5 className="card-title fw-bold">Catálogo de nuestros trabajos</h5>
            </div>
            <div className="card-body">
              <p className="card-text text-aling-justify">
                Puede visualizar nuestra galería de imágenes acerca de nuestros recientes trabajos donde podrá hacerse una idea de lo que realizamos día con día, además de que nos adaptamos a su necesidad y presupuesto, su opinión es importante en el proceso.
              </p>
            </div>
            <div className="card-footer">
              <button className='submit btn btn-primary w-100 h-100'  onClick={() => goGalery()} >visitar galeria</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card bg-black text-white">
            <div className="card-header">
              <h5 className="card-title fw-bold">Ventas</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                Se muestra a continuación una pequeña tienda donde vendemos productos como almohadas, fundas para autos, tapetes, tapas para cajuela y funda para llanta de refacción. Todos los productos se pueden comprar aquí o puede hacer un formulario para uno diferente.
              </p>
            </div>
            <div className="card-footer">
              <button className='submit btn btn-primary w-100 h-100 ' onClick={() => goSalas()}>comprar</button>
            </div>
          </div>
        </div>




      </div>

    </>
  )
}

export default HomePage