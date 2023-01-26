//rfc carrega as funcoes - usando a extenção do react

import React from 'react'
import {Link} from 'react-router-dom'

export default function FilmeItem({ filme, onRemove }) {

  
  return (
    <div className="filme" >
        <Link to={`/filme/${filme.show.id}`}>
            <img src={filme.show.image.medium} alt="" />
        </Link>
        <div>
            <h3>{filme.show.name}</h3>
            <p>{filme.show.summary.substring(0, 144)}...</p>

            {/* <button className='remove' 
                onClick={(ev) => onRemove(filme.show.id)}>Apagar
            </button> */}
        </div>
    </div>
  )
}
