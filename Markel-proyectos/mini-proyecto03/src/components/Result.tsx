


interface ResultProps{
    puntuacion : number;
    totalPreguntas: number;
    onRetry: () => void;
}

export const Result: React.FC<ResultProps> = ({ puntuacion, totalPreguntas, onRetry }) => {
    return(
        <div className="resultados">
        <h1>¡Has terminado el cuestionario!</h1>
        <p>Puntuación: {puntuacion} / {totalPreguntas}</p>
        <button onClick={onRetry}>Reintentar</button>    
    </div>

)}
