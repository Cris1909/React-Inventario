import React from 'react';

const ItemCantidad = ({ 
  libro, 
  inventarios,
  indice,
  setInventarios, 
  inventarioSeleccionado
}) => {
  
  const { nombre, cantidad } = libro;

  const handleSumar = () => {
    inventarioSeleccionado[indice].cantidad++;
    const inventariosActualizados = inventarios.map( inventario => inventario[0] === inventarioSeleccionado[0] ? inventarioSeleccionado : inventario);

    setInventarios( inventariosActualizados );
  }

  const handleRestar = () => {
    inventarioSeleccionado[indice].cantidad && inventarioSeleccionado[indice].cantidad--;
    const inventariosActualizados = inventarios.map( inventario => inventario[0] === inventarioSeleccionado[0] ? inventarioSeleccionado : inventario);

    setInventarios( inventariosActualizados );
  }

  return (
    <div className='flex'>
      <div className='flex mr-2'>
        <button
          onClick={ handleRestar }
          className='bg-red-400 mt-1 w-5 h-5 justify-center font-bold  text-white flex items-center pb-1 border-none hover:bg-red-500 rounded-md'>
        - </button>
        <span className='mx-2 font-semibold'>{ cantidad }</span>
        <button
          onClick={ handleSumar }
          className='bg-green-300 mt-1 w-5 h-5 justify-center font-bold  text-white flex items-center pb-1 border-none hover:bg-green-500 rounded-md'>
        + </button>
      </div>
      <div className='flex mb-2'>
        <h4 className='mr-2'>{ nombre }</h4>
      </div>
    </div>
  )
}

export default ItemCantidad;
