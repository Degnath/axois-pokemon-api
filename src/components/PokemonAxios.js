import React, {useState} from 'react';
import Axios from "axios";
import axios from 'axios';


const PokemonAxios = () => {
    const[pokemonList, setPokemonList] = useState([])

    const clickHandler = () => {
        console.log("clicked!!!")

    }
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
        console.log("clicked!!!!!!!")
        console.log(res)

        setPokemonList(res.data.results)
    })
    .catch(err => {
        console.log(err)
    })

    return (
        <div>
            <button onClick={clickHandler} className="btn btn-success mt-3">Fetch Pokemon</button>
            {pokemonList.map((pokemon, idx) =>{
                return <li>{pokemon.name}</li>
                
            })}
            
        </div>
    );
};



export default PokemonAxios;