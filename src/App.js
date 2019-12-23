import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [frase, obtenerFrase] = useState({});

  const consultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // Agregar el resultado de la api al state
    obtenerFrase(resultado.data[0]);
  }

  // Consulta a una rest api
  useEffect(
    () =>  { 
      consultarAPI()
    }, []
  );

  console.log(frase)
  
  return <p>Hola</p>
}

export default App;