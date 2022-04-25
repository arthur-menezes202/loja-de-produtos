//este componete ira renderizar as categorias dos produtos

import { useState, useEffect } from 'react';

function Categores() {
  const [datacategores, setDataCategores] = useState([]);

  async function fetchMoviesJSON() {
    const response = await fetch('https://api.mercadolibre.com/sites/MLA/categories');
    const categores = await response.json();
    setDataCategores(categores);
    console.log(datacategores)
  }

  useEffect(() => {
    fetchMoviesJSON();
  }, []);

  return (
    <div>
        alo
        <ul>
        {
            datacategores.forEach((el) => {
                <li>{el.name}</li>
            })
        }
        </ul>
    </div>
  );
}

export default Categores;