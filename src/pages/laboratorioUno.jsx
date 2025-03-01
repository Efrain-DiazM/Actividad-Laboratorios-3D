import React from "react";
import { Canvas } from "@react-three/fiber";
import Escenario from "../components/Escenario";

export default function LaboratoiroUno() {

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Laboratorio 1: Creación de un Escenario 3D con Múltiples Figuras y Texturas</h1>
            <p>
                Este ejercicio 
            </p>
            <div style={{ height: "600px" }}>
                <Escenario />
            </div>
        </div>
    );
}
