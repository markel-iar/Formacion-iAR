import { useState } from 'react';
import { PREGUNTAS } from './data';
import { QuestionCard } from './components/QuestionCard';
import { Timer } from './components/Timer';
import { Result } from './components/Result'; 

function App() {
  // ESTADOS DEL JUEGO
  const [indicePregunta, setIndicePregunta] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  
  // userAnswer: null (no respondido), numero (indice respuesta), -1 (tiempo agotado)
  const [respuestaUsuario, setRespuestaUsuario] = useState<number | null>(null);

  const preguntaActual = PREGUNTAS[indicePregunta];

  //LOGICA PARA PASAR DE PREGUNTA
  const avanzarPregunta = () => {
    const siguienteIndice = indicePregunta + 1;

    if (siguienteIndice < PREGUNTAS.length) {
      setIndicePregunta(siguienteIndice);
      setRespuestaUsuario(null);
    } else {
      setJuegoTerminado(true);
    }
  };

  //CUANDO EL USUARIO RESPONDE
  const handleAnswer = (indexSeleccionado: number) => {
    if (respuestaUsuario !== null) return;

    setRespuestaUsuario(indexSeleccionado);

    if (indexSeleccionado === preguntaActual.respuesta) {
      setPuntuacion((prev) => prev + 1);
    }

    setTimeout(() => {
      avanzarPregunta();
    }, 1500);
  };

  //CUANDO EL TIEMPO SE AGOTA
  const handleTimeUp = () => {
    handleAnswer(-1); 
  };

  //REINICIAR JUEGO
  const reiniciarJuego = () => {
    setIndicePregunta(0);
    setPuntuacion(0);
    setJuegoTerminado(false);
    setRespuestaUsuario(null);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      
      <h1>Examen Cultura General</h1>

      {juegoTerminado ? (
        // PANTALLA FINAL
        <Result 
          puntuacion={puntuacion} 
          totalPreguntas={PREGUNTAS.length} 
          onRetry={reiniciarJuego} 
        />
      ) : (
        // PANTALLA DE JUEGO
        <div>
          <p>Pregunta {indicePregunta + 1} de {PREGUNTAS.length}</p>
          
          <Timer 
            key={indicePregunta} 
            tiempo={10} 
            onTimeUp={handleTimeUp} 
          />

          <QuestionCard 
            preguntaActual={preguntaActual}
            onAnswer={handleAnswer}
            userAnswer={respuestaUsuario}
          />
        </div>
      )}
    </div>
  );
}

export default App;