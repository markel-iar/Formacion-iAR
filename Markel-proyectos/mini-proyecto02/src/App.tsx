import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import type { Build, Componente, Producto } from './types';
import NavBar from './components/NavBar';
import CategoryPage from './components/CategoryPage';
import { ORDERED_STEPS as CATEGORIAS } from './data';

function App() {
  const [build, setBuild] = useState<Build>({});

  const handleSelectProduct = useCallback((category: Componente, product: Producto) => {
    setBuild((prevBuild) => ({
      ...prevBuild,         
      [category]: product   
    }));
  }, []);

  
  const totalPrice = Object.values(build).reduce((acc, item) => acc + (item?.precio || 0), 0);

  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
        
        
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
          <h1>PC Builder 3000</h1>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </header>


        <NavBar categorias={CATEGORIAS} />

        <div style={{ marginTop: '20px' }}>
          <Routes>
          
            <Route path="/" element={<Navigate to="/select/CPU" replace />} />

            
            <Route 
              path="/select/:category" 
              element={
                <CategoryPage 
                  onSelectProduct={handleSelectProduct} 
                  selectedProducts={build} 
                />
              } 
            />

            
            <Route 
              path="/summary" 
              element={
                <div style={{ padding: '20px', border: '2px dashed black' }}>
                  <h2>Resumen del Build</h2>
                  <pre>{JSON.stringify(build, null, 2)}</pre>
                  
                </div>
              } 
            />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;