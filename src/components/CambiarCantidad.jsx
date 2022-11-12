import React from 'react';
import ItemCantidad from './ItemCantidad';

const CambiarCantidad = ({ 
  inventarioSeleccionado, 
  inventarios, 
  setInventarios 
}) => {
  return (
    <div className='m-3 overflow-y-auto'>
      {inventarioSeleccionado.map( (libro, indice) => (
        <ItemCantidad
            key={ libro.id }
            inventarios={ inventarios }
            setInventarios={ setInventarios }
            inventarioSeleccionado={ inventarioSeleccionado }
            libro={ libro }
            indice={ indice }
        />
      ))}
    </div>
  )
}

export default CambiarCantidad;
