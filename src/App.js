import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Producto from "./Producto";
import Formulario from "./Formulario";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carrito: [],
            productos: [
                { id: 1, nombre: "Producto React", precio: 1000 },
                { id: 2, nombre: "Producto Firebase", precio: 2000 },
            ],
        };
    }

    agregarAlCarrito = (producto) => {
        this.setState({ carrito: [...this.state.carrito, producto] });
    };

    render() {
        return (
            <Router>
                <div className="container mt-4">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 p-3 rounded">
                        <div className="navbar-nav">
                            <Link className="nav-link text-white" to="/">
                                Tienda
                            </Link>
                            <Link
                                className="nav-link text-white"
                                to="/registro"
                            >
                                Registro Firebase
                            </Link>
                        </div>
                    </nav>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div className="row">
                                    <div className="col-md-8">
                                        <h3>Catálogo</h3>
                                        <div className="row">
                                            {this.state.productos.map(
                                                (prod) => (
                                                    <Producto
                                                        key={prod.id}
                                                        producto={prod}
                                                        agregar={
                                                            this
                                                                .agregarAlCarrito
                                                        }
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card bg-light">
                                            <div className="card-body">
                                                <h4>
                                                    Carrito:{" "}
                                                    {this.state.carrito.length}
                                                </h4>
                                                <ul>
                                                    {this.state.carrito.map(
                                                        (i, idx) => (
                                                            <li key={idx}>
                                                                {i.nombre}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                        <Route path="/registro" element={<Formulario />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}
export default App;
