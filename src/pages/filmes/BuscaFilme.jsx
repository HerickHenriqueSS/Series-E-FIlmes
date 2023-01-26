import React, { useState } from 'react'
import { useEffect } from 'react';
import FilmeItem from '../../components/FilmeItem2';

export default function BuscaFilme() {
  // [estado, função que altera o estado] = useState(valor inicial do estado)
  const [busca, setBusca] = useState('');
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    console.log(busca)
  }, [busca])

  function onchangeBusca (ev) {
    const texto = ev.target.value
    setBusca(texto)
    
  }

  function buscaFilme() {
    const url = 'https://api.tvmaze.com/search/shows?q=' + busca;
    setTimeout(() => {
      fetch(url)
          .then(resp => resp.json())
          .then( resp => setFilmes(resp))
          .catch(err => console.log(err));
    })

    console.log(filmes)
  }  

  function removeFilme(id) {
    const novosFilmes = filmes.filter(item => item.show.id != id);
    setFilmes(novosFilmes);
  }

  return (
    <>
      <h1></h1>
      <input type="text" placeholder='Buscar Serie...' value={busca} onChange={onchangeBusca}/>
      <button onClick={buscaFilme}>Buscar</button>

      {/* <div>Texto: {busca}</div> */}

      <div className='filmes'>
        {filmes.map((filme) =>(
          
          <FilmeItem filme={filme} onRemove={removeFilme} key={filme.show.id}/>

        ))}

      </div>
    </>
  )
}
