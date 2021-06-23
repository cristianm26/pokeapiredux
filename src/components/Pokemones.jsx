import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonesAccion, siguientePokemonAccion } from '../redux/pokesDucks';

const Pokemones = () => {
    const dispatch = useDispatch();
    const pokemones = useSelector(state => state.pokemones.array);

    return (
        <div>
            <h1>Lista de Pokemones</h1>
            <button onClick={() => dispatch(obtenerPokemonesAccion())} >Obtener Pokemones</button>
            <button onClick={() => dispatch(siguientePokemonAccion())} >Siguiente</button>
            <ul>
                {
                    pokemones.map((pokemon) => (
                        <li key={pokemon.name}>
                            <h2>{pokemon.name}</h2>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones
