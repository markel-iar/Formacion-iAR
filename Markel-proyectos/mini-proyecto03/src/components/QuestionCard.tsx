import React from 'react';
import type { Pregunta } from "../types";

interface QuestionCardProps {
    preguntaActual: Pregunta;
    onAnswer: (index: number) => void;
    userAnswer: number | null;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ preguntaActual, onAnswer, userAnswer }) => {
    const hasAnswered = userAnswer !== null;

    return (
        <div className="question-card">
            <h3>{preguntaActual.pregunta}</h3>

            <div className="opciones" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {preguntaActual.options.map((option, index) => {
                    
                    let backgroundColor = 'white'; 

                    if (hasAnswered) {
                        if (index === preguntaActual.respuesta) {
                            backgroundColor = '#94d82d'; 
                        } else if (index === userAnswer) {
                            backgroundColor = '#ff6b6b'; 
                        }
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => onAnswer(index)}
                            disabled={hasAnswered} 
                            style={{ 
                                backgroundColor: backgroundColor,
                                padding: '10px',
                                border: '1px solid #ccc',
                                cursor: hasAnswered ? 'default' : 'pointer'
                            }}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};