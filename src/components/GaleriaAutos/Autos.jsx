import React from 'react'

function Autos({autos}) {

    const { idautos, imageautos } = autos;

    return (
        <>
            <div className="row  row-cols-md-3 g-4 mt-1 ">
                <div className="col">
                    <div className="card card-Jared">
                        <img src={`/Salas/${imageautos}.jpg`} className="card-img-top imagenGalery" />
                        <div className="card-body">
                            <h5 className="card-title">{autos.nobreautos}</h5>
                            <p className="card-text">{autos.descriptionautos}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Autos