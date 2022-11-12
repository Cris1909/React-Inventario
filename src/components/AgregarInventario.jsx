import React, { useState } from 'react';

const AgregarInventario = ({ inventarios, setInventarios, libros }) => {

  const handleNuevoInventario = () => {
    setInventarioCreado(true);
    setInventarios([...inventarios, libros]);
    setTimeout(() => {
      setInventarioCreado(false);
    }, 1500);
  }

  const [ inventarioCreado, setInventarioCreado ] = useState(false)

  return (
    <div>
      <button
            onClick={ !inventarioCreado ? handleNuevoInventario : undefined}
            className='uppercase font-black text-white bg-indigo-400 p-2 hover:bg-indigo-600 rounded-md flex justify-end transition-colors'
      >{ inventarioCreado ? ' Inventario Creado ' : 'Agregar Inventario' }</button>
    </div>
  )
}

export default AgregarInventario;
