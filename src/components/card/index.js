import { usePoke } from "../../Providers/pokemons"
import '../../index.css';
import { Link } from "react-router-dom";
import { Pokedex } from "../../Providers/sytle";

const Card = () =>{

    const {
        pokemon
    } = usePoke()
    
    const capitalize = (res) => {
        return res.charAt(0).toUpperCase() + res.slice(1);
    }

    return(
        <Pokedex>
            <div id='teste'></div>
            <h1>Pokedex</h1>
            <div id="container">
                {
                    pokemon.map((poke, index) => (
                        <div key={index}>                            
                            <h2><span>#{poke.entry_number}</span> {capitalize(poke.pokemon_species.name)}</h2>
                            <Link to={{ pathname: 'pokemon', query: { number: poke.entry_number } }} >Detalhes</Link>
                        </div>
                    ))
                }
            </div>
        </Pokedex>
    )
}

export default Card