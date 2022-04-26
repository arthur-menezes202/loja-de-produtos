//este componete ira renderizar as categorias dos produtos

import { useState, useEffect } from 'react';

function Categores() {
  const [datacategores, setDataCategores] = useState([]);

  async function fetchAPIMercadoLivreCategoresJSON() {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categores = await response.json();
    setDataCategores(categores);
    console.log(datacategores)
  }

  useEffect(() => {
    fetchAPIMercadoLivreCategoresJSON();
  }, []);

  return (
    <div>
        Categores
        {/* <ul>
        {
            datacategores.map((el, k) => (
                <li key={k}>{el.name}</li>
            ))
        }
        </ul> */}
    </div>
  );
}

export default Categores;