import { useColor } from './ColorContext'; // Importa el hook
import styled from 'styled-components';
import Back from './Salir';

const Tema = ({toggleTemaVar}) => {
  const { color, setColor } = useColor(); // Obten el color y la función para establecerlo desde el contexto

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    setColor(selectedColor); // Establece el color en el contexto
  };

  return (
    <Content>
      <Back onClick={toggleTemaVar}/>
      <Tittle>Elige un color:</Tittle>
      <input
        titulo="Color"
        placeholder="Ingresar el color en HEX"
        required
        type="color"
        color={color}
        onChange={handleColorChange}
      />
    </Content>
  );
};

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const Tittle = styled.h2`
    padding-top: 5rem;
`
export default Tema;
