import React, { useEffect, useState } from 'react'
import '../styles/clock.scss'

const ClockHook = () => {

    //Definir estado inicial:
    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: "Camila",
        apellidos: "Pinzón"
    }
    //Definir el useState
    const [state, setState] = useState(initialState);

    //Definir funcion que modifica el estado con cada llamada de setInterval
    function tick() {
        setState((state) => {
            let edad = state.edad + 1;
            return {
                ...state,
                fecha: new Date(),
                edad
            }
        });
    }

    useEffect(() => {
        const timerID = setInterval(
            () => tick(), 1000
        );
        return () => {
            clearInterval(timerID);
        }
    }, []);

    return (
        <div>
            <h2>Hora Actual: {state.fecha.toLocaleTimeString()}</h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h3>Edad: {state.edad}</h3>
        </div>
    )
}

export default ClockHook;