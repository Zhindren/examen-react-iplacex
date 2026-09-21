import React from "react";

const Producto = ({ producto, agregar }) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text flex-grow-1">${producto.precio}</p>
                    <button
                        className="btn btn-primary mt-auto"
                        onClick={() => agregar(producto)}
                    >
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Producto;
