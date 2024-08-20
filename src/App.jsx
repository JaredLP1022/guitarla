import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage';
import Sala from './components/Salas/Sala';

import { bd } from './DataBase/bd';
import FooterPage from './components/Footer/FooterPage';
import CarruselkTapiceria from './components/carrusel/CarruselkTapiceria';
import GaleriaAcuario from './GaleriaAcuario';

function App() {

    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart');

        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [data, setData] = useState(bd);
    const [cart, setCart] = useState(initialCart)

    const MAX_ITEM = 5;
    const MIN_ITEM = 1;

    useEffect( () => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    function addToCart(item) {

        const itemExists = cart.findIndex(sala => sala.idSala === item.idSala)

        if (itemExists >= 0) {//existe en el carrito
            if(cart[itemExists].quantity >= MAX_ITEM) return 
            const updateCart = [...cart];
            updateCart[itemExists].quantity++
            setCart(updateCart);

        } else {
            item.quantity = 1;
            setCart([...cart, item])
        }

    }
    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(sala => sala.idSala !== id))
    }

    function increaseQuantity(id) {
        const updateCart = cart.map(item => {
            if (item.idSala === id && item.quantity < MAX_ITEM) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })

        setCart(updateCart)
    }

    function decrementQuantity(id) {
        const updateCart = cart.map(item => {
            if (item.idSala === id && item.quantity > MIN_ITEM) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })

        setCart(updateCart)
    }

    function clearCart(){
        setCart([])
    }

    return (
        <>
            <main className='container-xl mt-3'>
                <Header
                    cart={cart}
                    removeFromCart={removeFromCart}
                    increaseQuantity={increaseQuantity}
                    decrementQuantity ={decrementQuantity}
                    clearCart = {clearCart}
                    
                />

                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomePage />
                        }/>
                        <Route path='/Salas' element={
                            <div className='row'>
                                <h2 className='text-center text-white p-3'>Muebles, salas y sillas</h2>
                                {data.map((sala) => (
                                    <Sala
                                        key={sala.idSala}
                                        sala={sala}
                                        setCart={setCart}
                                        addToCart={addToCart}
                                    />
                                ))}
                            </div>
                        } />
                        <Route path='/carrusel' element={ 
                            <div >
                                {data.map((sala) => (
                                    <CarruselkTapiceria
                                        key={sala.idSala}
                                        sala={sala}
                                    />
                            ))} 
                            </div>
                        } />
                        <Route path='/Galery' element={<div> <GaleriaAcuario/> </div>}  />
                    </Routes>
                </BrowserRouter>

                <FooterPage/>

            </main>

           

        </>

    )
}

export default App