import React from 'react'

const Item = ({ libro }) => {
  const { nombre, img, cantidad } = libro

  return (
    <div className='child m-3 w-1/6'>
      <h4 className='font-bold lg:text-sm text-center bg-indigo-600 text-white rounded-t-md'>Cantidad: { cantidad }</h4>
      <img
        src={img}
      />
      <h4 className='font-bold lg:text-sm text-center bg-indigo-600 text-white rounded-b-md'>{ nombre }</h4>
    </div>
  )
}

export default Item
