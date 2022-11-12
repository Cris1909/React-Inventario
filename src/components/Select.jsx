import React from 'react';
import Opcion from './Opcion';

const Select = ({ 
  inventarios, 
  setInventarioSeleccionado 
}) => {

  const handleInventarioSeleccionado = e => {
    return e.target.value
      ? setInventarioSeleccionado( inventarios[Number(e.target.value)]) 
      : setInventarioSeleccionado([])
  }

  return (
    <div className='flex justify-center my-3'>
      <select
        onChange={ handleInventarioSeleccionado }
        className= ' rounded-lg block w-full p-2.5 lg:w-1/3 text-center font-bold text-white bg-indigo-400 hover:bg-indigo-600 border-none'
      >
        <option value=''>{ inventarios.length ? '-- Selecciona un inventario --' : '-- Crea un inventario --' }</option>
        { inventarios.map( (inventario, indice) => (
          <Opcion
            key={ indice }
            inventario={ inventario }
            indice={ indice }
          />
        ))}
        
      </select>
    </div>
  )
}

export default Select;
