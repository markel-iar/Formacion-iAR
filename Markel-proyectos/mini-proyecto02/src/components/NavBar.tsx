import React from 'react';
import { NavLink } from "react-router-dom";
import type { Componente } from "../types";

interface NavBarProps {
    categorias: Componente[];
}

const NavBar: React.FC<NavBarProps> = ({ categorias }) => {
    return (
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', padding: 0 }}>
                {categorias.map((categoria) => (
                    <li key={categoria}>
                        <NavLink 
                            to={`/select/${categoria}`}
                            style={({ isActive }) => ({
                                fontWeight: isActive ? 'bold' : 'normal',
                                color: isActive ? 'blue' : 'black',
                                textDecoration: 'none'
                            })}
                        >
                            {categoria}
                        </NavLink>
                    </li>
                ))}
                
                <li>
                    <NavLink 
                        to="/summary" 
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : 'normal',
                            color: isActive ? 'green' : 'black',
                            textDecoration: 'none'
                        })}
                    >
                        Resumen
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;