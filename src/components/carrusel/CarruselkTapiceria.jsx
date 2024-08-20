import React from 'react'

function CarruselkTapiceria() {



  return (
    <div className='carruselJared'>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={'/Salas/Sala_01.jpg'} className="d-block w-100 imagenJared" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Sillas Ejecutivas</h5>
                <p>Comodidad y elegancia para tu empresa</p>
              </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={'/Salas/Sala_04.jpg'} className="d-block w-100 imagenJared" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Sala familiar</h5>
                <p>Una sala hecha para ti y tu famalia</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src={'/Salas/Sala_03.jpg'} className="d-block w-100 imagenJared" />
              <div className="carousel-caption d-none d-md-block">
                <h5>¿Mueble para tu departamento?</h5>
                <p>Este comodo mueble te ayudara a disfrutar de la lectura</p>
              </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default CarruselkTapiceria