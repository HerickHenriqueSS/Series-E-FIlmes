import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function ViewFilme() {
    const { id } = useParams();
    const [filme, setFilme] = useState(null);

    useEffect(() => {
        console.log("Alterou filme: ", filme)
    }, [filme]);

    //Vai ser chamado apenas uma vez, depois da primeira renderização
    useEffect(() => {
        const url = `https://api.tvmaze.com/shows/${id}`;
        setTimeout(() => {
        fetch(url)
            .then(dados => dados.json())
            .then(dados => setFilme(dados))
            .catch(err => console.log(err));
        }, 1000);
    }, []);


    // Caso o filme n tenha sido carregado
    if (filme == null){
        return (
            <div>
                Carregando dados...
            </div>
        )
    }


    //Caso o filme ja tenha sido carregado
    return (
        <div>
            <h1>{filme.name}</h1>
            <img src={filme.image.medium} alt="" />
        </div>
  )
}
