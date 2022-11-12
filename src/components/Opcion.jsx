import React from 'react';

const Opcion = ({ indice }) => {
  
  return (
    <option value={ indice }>Inventario { indice + 1 }</option>
  )
}

export default Opcion;
