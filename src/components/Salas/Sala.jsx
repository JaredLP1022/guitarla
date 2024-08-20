
function Sala({ sala, addToCart }) {

    const { idSala, imageSala } = sala;

    return (
        <>
            <div className="card border-primary mb-1">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`/Salas/${imageSala}.jpg`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-header">
                        <h5 className="card-title">{sala.nombreSala}</h5>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{sala.nombreSala}</h5>
                            <p className="card-text">{sala.descripcionSala}</p>
                            <p className="card-text"><small className="text-body-secondary">$ {sala.precioSala}</small></p>
                        </div>
                        <div className="card-footer">
                        <button
                                className="btn btn-dark w-100"
                                type="button"
                                onClick={() => addToCart(sala)}

                            >
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sala