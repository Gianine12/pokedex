import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({children}) =>{

    const [pokemon, setPokemon] = useState([]);

    const handleData = async() =>{
        await axios.get('https://pokeapi.co/api/v2/pokedex/1')
        .then((response) => {
            setPokemon(response.data.pokemon_entries)
            console.log(pokemon)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect( () =>{
        handleData();
    },[]);

    return(
        <PokemonContext.Provider
        value={{
            pokemon,
            setPokemon
        }}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePoke = () => useContext(PokemonContext);