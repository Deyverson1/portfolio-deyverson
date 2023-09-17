import { createContext, useContext, useState } from 'react';

const ColorContext = createContext();
export function useColor() {
  return useContext(ColorContext);
}

export function ColorProvider({ children }) {
  const [color, setColor] = useState(''); // Valor inicial en blanco

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
}
