import React, { useEffect, useState } from 'react';

interface TimerProps {
    tiempo: number;
    onTimeUp: () => void;
}

export const Timer: React.FC<TimerProps> = ({ tiempo, onTimeUp }) => {
    // Estado local del contador
    const [segundosRestantes, setSegundosRestantes] = useState(tiempo);


    useEffect(() => {
        setSegundosRestantes(tiempo);
    }, [tiempo]);

    //La cuenta atrás
    useEffect(() => {
        if (segundosRestantes <= 0) {
            onTimeUp();
            return;
        }

        const intervalo = setInterval(() => {
            setSegundosRestantes((prev) => prev - 1);
        }, 1000);

        // CLEANUP: Limpiar el intervalo si el componente se desmonta 
        return () => clearInterval(intervalo);

    }, [segundosRestantes, onTimeUp]); 

    return (
        <div className="timer" style={{ fontWeight: 'bold', margin: '10px 0' }}>
            Tiempo restante: {segundosRestantes}s
        </div>
    );
};