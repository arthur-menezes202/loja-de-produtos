//este componete ira renderizar as categorias dos produtos

import { useState, useEffect } from 'react';

function Categores() {
  const [datacategores, setDataCategores] = useState();

  async function fetchMoviesJSON() {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categores = await response.json();
    setDataCategores(categores);
    console.log(datacategores)
  }

  const renderCategores = () => {
    if (!datacategores) {
        return <p>carregando</p>
    } else {
      return datacategores.map((el, k) => {
        if(!el) return console.log("entro no if")
        else {
        <li key={k}>{el.name}</li>
        console.log(el.name)
        }
      })
    }
  }

  useEffect(() => {
    fetchMoviesJSON();
  }, []);

  return (
    <div>
        ala
        <ul>
        {
            renderCategores()
        }
        </ul>
    </div>
  );
}

export default Categores;