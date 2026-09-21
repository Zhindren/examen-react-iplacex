import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const validator = useRef(
        new SimpleReactValidator({
            className: "text-danger mt-1 small fw-bold",
        }),
    );
    const [, forceUpdate] = useState();

    const guardarDatos = async (e) => {
        e.preventDefault();
        if (validator.current.allValid()) {
            try {
                await addDoc(collection(db, "usuarios"), { nombre, email });
                alert("¡Datos guardados en Firebase Firestore!");
                setNombre("");
                setEmail("");
                validator.current.hideMessages();
            } catch (error) {
                console.error("Error al guardar: ", error);
            }
        } else {
            validator.current.showMessages();
            forceUpdate(1);
        }
    };

    return (
        <form onSubmit={guardarDatos} className="card p-4 shadow-sm">
            <h4 className="mb-4 text-center">Registro (Firebase)</h4>
            <div className="mb-3">
                <label>Nombre:</label>
                <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                {validator.current.message(
                    "nombre",
                    nombre,
                    "required|alpha_space",
                )}
            </div>
            <div className="mb-4">
                <label>Email:</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {validator.current.message("email", email, "required|email")}
            </div>
            <button type="submit" className="btn btn-success w-100">
                Guardar Datos
            </button>
        </form>
    );
};
export default Formulario;
