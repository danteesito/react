
import React, { useState } from 'react';
import Card from './card';
import cards from "../css/cards.css"
import { useContext } from 'react';
import { Contexto } from '../context/MiProvider';


function Cards() {
  const {pokemons, setPokemons} = useContext(Contexto)
  const deleteCard = (id) => {
    const updatedPokemons = pokemons.filter((pokemon) => pokemon.id !== id);
    setPokemons(updatedPokemons);
  };

  return (
    <div className="card-title">
      <h1 className='titulo'>Once titular de boca en 2018</h1>
    <div className='cardGridStyle'>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          title={pokemon.title}
          description={pokemon.description}
          id={pokemon.id}
          img={pokemon.imageUrl}
          eliminarCarta={deleteCard}
        />
      ))}
    </div>
    </div>
  );
}

export default Cards;
