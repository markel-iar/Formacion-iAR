import { createContext, useContext, useState, type ReactNode } from 'react';

interface AuthContextType {
    usuario: string | null;      
    estaAutenticado: boolean;    
    login: (nombre: string) => void; 
    logout: () => void;              
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    
        
    const [usuario, setUsuario] = useState<string | null>(() => {
        const guardado = localStorage.getItem("usuario");
        return guardado; 
    });
    
    const login = (nombre: string) => {
        setUsuario(nombre);
        localStorage.setItem('usuario', nombre);
    };

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem('usuario');
    };

    return (
        <AuthContext.Provider value={{ 
        usuario, 
        estaAutenticado: !!usuario, 
        login, 
        logout 
        }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
    return context;
};