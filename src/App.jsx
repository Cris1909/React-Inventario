import { useState } from 'react';

import './index.css';

import AgregarInventario from './components/AgregarInventario';
import CambiarCantidad from './components/CambiarCantidad';
import Header from './components/Header';
import InterfazInventario from './components/InterfazInventario';

import { generarId } from './helpers';

function App() {

  const [ inventarios, setInventarios ] = useState([]);
  const [ inventarioSeleccionado, setInventarioSeleccionado ] = useState([]);

  const libros = [
    {
      id: generarId(),
      nombre: 'El Camino de los Reyes',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2021/08/385-x-600-camino-1.jpg'
    },
    {
      id: generarId(),
      nombre: 'Palabras Radiantes',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2021/08/385-x-600-palabras.jpg'
    },
    {
      id: generarId(),
      nombre: 'Juramentada',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2021/08/385-x-600-Juramentada-1.png'
    },
    {
      id: generarId(),
      nombre: 'El Ritmo de la Guerra',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2021/08/ritmo.jpg'
    },
    {
      id: generarId(),
      nombre: 'El Imperio Final',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2021/08/385-x-600-el-imperio-final-1.jpg'
    },
    {
      id: generarId(),
      nombre: 'El Pozo de la Ascensión',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2021/08/385-x-600-el-pozo-de-la-ascension-1.jpg'
    },
    {
      id: generarId(),
      nombre: 'El Heroe de las Eras',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2021/08/385-x-600-el-heroe-de-las-heras-1.jpg'
    },
    {
      id: generarId(),
      nombre: 'Aleación de Ley',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2021/08/385-x-600-MISTBORN-4_TD-1.png'
    },
    {
      id: generarId(),
      nombre: 'Sombras de Identidad',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2021/08/385-x-600-MISTBORN-5_TD-1.png'
    },
    {
      id: generarId(),
      nombre: 'Brazales de Duelo',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2021/08/385-x-600-MISTBORN-6_Brazales837B03D-1.png'
    },
    {
      id: generarId(),
      nombre: 'El Metal Perdido',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2022/09/PORTADA-Libros-para-fichas-Mitborn-07-El-Metal-Perdido_con-fecha-600x385-1.jpg'
    },
    {
      id: generarId(),
      nombre: 'El Aliento de los Dioses',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2021/08/385-x-600-aliento.jpg'
    },
    {
      id: generarId(),
      nombre: 'Elantris',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2018/07/385-x-600-elantris-2-1.jpg'
    },
    {
      id: generarId(),
      nombre: 'Arena Blanca',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2022/03/PORTADA-Libros-para-fichas-Arena-Blanca-Omnibus-600x385-1.jpg'
    },
    {
      id: generarId(),
      nombre: 'Arcanum Ilimitado',
      cantidad: 0,
      img: 'https://cosmere.es/wp-content/uploads/2021/08/385-x-600-arcanum.jpg'
    }   
]

  return (
    <div>
      <Header 
        inventarios={ inventarios }
        inventarioSeleccionado={ inventarioSeleccionado }
        setInventarioSeleccionado={ setInventarioSeleccionado }
      />
      <div className='flex justify-center mt-3'>
        <AgregarInventario 
          inventarios={ inventarios }
          setInventarios={ setInventarios }
          libros={ libros }
        />
      </div>
      <div className='flex'>
        <div className='w-1/4'>
          <CambiarCantidad 
            inventarioSeleccionado={ inventarioSeleccionado }
            inventarios={ inventarios }
            setInventarios={ setInventarios }
          />
        </div>
        <div className='parent w-3/4 mr-3'>
          <div className='justify-center'>
            <InterfazInventario 
              inventarioSeleccionado={ inventarioSeleccionado }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App