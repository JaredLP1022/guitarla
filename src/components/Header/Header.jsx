import React from 'react'


function Header({ cart, removeFromCart, increaseQuantity, decrementQuantity, clearCart }) {

  const isEmpty = () => cart.length === 0;
  const cartTotal = () => cart.reduce((total, item) => total + (item.quantity * item.precioSala), 0)

  return (
    <div className="container">
      <header>
        <nav className='navbar bg-black'>
          <div className='container-fluid'>
            <a className="navbar-brand text-white" href="/">Cubre Asientos Acuario</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" color='white' width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Productos en la cesta</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body w-45">
                {isEmpty() ? (
                  <p className='text-center'> el carrito esta vacio</p>
                ) : (
                  <>
                    <table className='w-100 table'>
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th>Editar</th>
                        </tr>
                      </thead>

                      <tbody>
                        {cart.map(sala => (
                          <tr key={sala.idSala}>
                            <td>
                              <img
                                className='img-fluid'
                                src={`/Salas/${sala.imageSala}.jpg`}
                                alt=""
                              />
                            </td>
                            <td>
                              {sala.nombreSala}
                            </td>
                            <td>
                              {sala.precioSala}
                            </td>
                            <td className='felx aling-items-star gap-4'>
                              <button
                                type='button'
                                className='btn btn-dark'
                                onClick={() => decrementQuantity(sala.idSala)}
                              >
                                -
                              </button>
                              <p>{sala.quantity} </p>
                              <button
                                type='button'
                                className='btn btn-dark'
                                onClick={() => increaseQuantity(sala.idSala)}>
                                +
                              </button>
                            </td>
                            <td>
                              <button
                                type='button'
                                className='btn btn-danger'
                                onClick={() => removeFromCart(sala.idSala)}
                              >
                                X
                              </button>
                            </td>
                          </tr>

                        ))}
                      </tbody>

                    </table>

                    <div className="container">
                      total a pagar: ${cartTotal()}
                    </div>
                    <button
                      type='button'
                      onClick={clearCart}
                    >
                      Pagar
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>

  )
}

export default Header