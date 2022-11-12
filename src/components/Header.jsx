import React from 'react';
import Select from './Select';

const Header = ({ 
  inventarios,
  setInventarioSeleccionado 
}) => {
  return (
    <div className='py-3 bg-indigo-500 '>
      <h1 className='uppercase font-extrabold text-3xl text-white flex justify-center'>Inventarios de libros</h1>
      <Select 
        inventarios={ inventarios }
        setInventarioSeleccionado={ setInventarioSeleccionado }
      />
    </div>
  )
}

export default Header;
