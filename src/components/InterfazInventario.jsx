import React from 'react';
import Item from './Item';

const InterfazInventario = ({ inventarioSeleccionado }) => {

  const libros = inventarioSeleccionado.filter( e => e.cantidad !== 0);

  return (
    <div className='parent inline-flex flex-wrap w-full'>
      { libros.map( (libro, indice) => (
        <Item
          key={ indice }
          libro={ libro }
        />
      ))}
    </div>
  )
}

export default InterfazInventario;
 