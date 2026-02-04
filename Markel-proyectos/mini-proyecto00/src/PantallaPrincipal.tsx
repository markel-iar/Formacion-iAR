import { useState } from 'react';
import { useAuth } from "./context/AuthContext";
export const PantallaPrincipal = () => {

    const { usuario, logout } = useAuth();
    const [contador, setContador] = useState(0);

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        
        <nav style={{ 
            display: 'flex',             
            justifyContent: 'space-between', 
            alignItems: 'center',         
            borderBottom: '2px solid #eee',
            paddingBottom: '15px',
            marginBottom: '30px'
        }}>
            <h2>Hola, {usuario}</h2>

            <button 
            onClick={logout} 
            style={{ 
                backgroundColor: '#ff4d4d', 
                color: 'white', 
                border: 'none', 
                padding: '8px 15px', 
                borderRadius: '4px',
                cursor: 'pointer'
            }}
            >
            Cerrar Sesión
            </button>
        </nav>

        
        <div style={{ textAlign: 'center' }}>
            <h3>Prueba de interactividad</h3>
            
            <p style={{ fontSize: '20px' }}>
            Has hecho click: <strong>{contador}</strong> veces
            </p>

            
            <button 
            onClick={() => setContador(contador + 1)}
            style={{ 
                fontSize: '18px', 
                padding: '10px 30px', 
                backgroundColor: '#4CAF50', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px',
                cursor: 'pointer'
            }}
            >
            Púlsame
            </button>
        </div>

        </div>
    );
};