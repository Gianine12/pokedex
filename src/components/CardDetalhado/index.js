import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { Link } from "react-router-dom";
import '../../index.css';
import { Detalhes } from "../../Providers/sytle";

const CardDetalhado = () =>{

    const props = useLocation()

    const [poke, setPoke] = useState([])

    const handleData = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.query.number}`)
        .then((response) =>{
            setPoke(response.data)
        })
        .catch( (erro) =>{
            console.log(erro)
        })
    }

    useEffect(() =>{
        handleData()
    },[])

    const capitalize = (res) => {
        return res.charAt(0).toUpperCase() + res.slice(1);
    }

    return (
        <Detalhes>
            

            <Link to='/' >Voltar</Link>

            <div id='img'>
                <h1>{poke.length === 0 ? '' : capitalize(poke.name)}</h1>
                
                <div>
                    <img src={poke.length === 0 ? '' : poke.sprites.front_default} alt='pokemon frente'/>
                    <img src={poke.length === 0 ? '' : poke.sprites.back_default} alt='pokemon tras'/>
                </div>
            </div>
            
            <div>
                <div>
                    <h3>Tipo(s)</h3>
                    {poke.length === 0 ? '' :  poke.types.map((info,index) =>(
                        <li key={index}> {capitalize(info.type.name)}</li>
                    ))}
                </div>
                <div>
                    <h3>Status</h3>
                    {poke.length === 0 ? '' :  poke.stats.map((sta,index) =>(
                        <li key={index}> 
                            <b>{capitalize(sta.stat.name)}</b> : {sta.base_stat}</li>
                    ))}
                </div>
                <div>
                    <h3>Habilidades</h3>
                    {poke.length === 0 ? '' :  poke.abilities.map((info,index) =>(
                        <li key={index}>{capitalize(info.ability.name)}</li>
                    ))}
                </div>
            </div>

        </Detalhes>
    )
}

export default CardDetalhado