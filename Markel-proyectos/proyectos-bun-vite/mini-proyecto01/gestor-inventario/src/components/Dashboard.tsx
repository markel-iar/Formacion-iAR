import React from "react";
import { Link } from "react-router-dom";
import type { Producto } from "../App"; 

type DashboardProps = {
    productos: Producto[];
    toggleStock: (id: number) => void; 
};

const Dashboard: React.FC<DashboardProps> = ({ productos, toggleStock }) => {
    return (
        <div>
            <h2>Lista General</h2>
            <ul>
                {productos.map((p) => (
                    <li key={p.id} style={{ marginBottom: '10px' }}>
                        
                        <Link to={`/product/${p.id}`} style={{ fontWeight: 'bold' }}>
                            {p.name}
                        </Link>

                        <span style={{ color: p.inStock ? 'green' : 'red' }}>
                            [{p.inStock ? 'En Stock' : 'Agotado'}]
                        </span>
                        
                        
                        <button 
                            onClick={() => toggleStock(p.id)} 
                            style={{ marginLeft: '10px' }}
                        >
                            Cambiar Stock
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;