import logo from './logo.svg';
import './App.css';
import Descripcion from './Descripcion.js'

const App = () => {
  const mensaje = "Hola Mundo"
  const a = 10
  const b = 5
  return (
    <div className="App">
      {mensaje + ' v2.0'}
      <br></br>
      {'El resultado de la suma es '+ (a + b)}
      <br></br>
      <Mensaje />
      <Descripcion version='14.9' />
    </div>
  );
}

/* Nombre de componentes, funciones, siempre en mayusculas */
const Mensaje = () => {
  return <h1>Hola Novato</h1>
}

export default App;
