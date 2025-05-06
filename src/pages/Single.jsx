
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";  
import storeService from "../services/pokeApiService";  
import "../styles/pagina.css";
import useGlobalReducer from "../hooks/useGlobalReducer"; 

export const Pokemons = () => {

  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate ();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      storeService.getOnePokemon(id).then((data) => {

          dispatch({ type: 'get_pokemon', payload: data });
      });
    }
  }, [id])

  const pokemon = store.unPokemon;

  if (!pokemon || !pokemon.name) return <p>Loading...</p>;

  const randomType = pokemon.types?.[Math.floor(Math.random() * pokemon.types.length)]?.type?.name;
  const randomMove = pokemon.moves?.[Math.floor(Math.random() * pokemon.moves.length)]?.move?.name;


  return (

      <div className="contenerdor">
          <div className="vista-detallada m-3 row">
              <div className="divimagen col-12 col-sm-6 col-lg-6">
                  <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                      className="img-detalle-pokemon"
                      alt={'imagen Pokemon'}
                  />
              </div>

              <div className="card-body p-3 col-12 col-sm-6 col-lg-6">
                  <h1 className="card-title "> {store.unPokemon.name}</h1>
                  <p>{store.unPokemon.name} is a Pokémon that stands out for both its presence and power. With a height of {store.unPokemon.height} dm and a weight of {store.unPokemon.weight} hg, it's hard to ignore.

                      One of its signature abilities is {store.unPokemon.types?.[Math.floor(Math.random()*store.unPokemon.types.length)]?.type?.name}, allowing it to adapt to different battle scenarios. Among its most notable moves is {store.unPokemon.moves?.[Math.floor(Math.random()*store.unPokemon.moves.length)]?.move?.name}, a technique that can surprise even experienced trainers.

                      When it comes to stats, {store.unPokemon.name} shows a balanced performance, making it a reliable choice in any battle.

                      Without a doubt, {store.unPokemon.name} is a strong and versatile addition to any team.</p>
              </div>
          </div>
          <div className="estadisticas-pokemon">
              <div>
                  <div className="vista-detallada-texto"> <strong className="text-black">Type:</strong>
                  <ul className="vista-detallada-texto text-black">
                      {store.unPokemon.types?.map((ty, i) => (
                          <li key={i}>{ty.type.name}</li>
                      ))}

                  </ul></div>
                  <br/>
                  <div className="vista-detallada-texto text-black"> <strong className="text-black">Height:</strong> {store.unPokemon.height} dm</div>
                  <div className="vista-detallada-texto text-black"> <strong className="text-black">Abilities:</strong>
                  <ul className="vista-detallada-texto">
                      {store.unPokemon.abilities?.map((ab, i) => (
                          <li key={i}>{ab.ability.name}</li>
                      ))}

                  </ul></div>
                  <br/>
                  <div className="vista-detallada-texto text-black"> <strong className="text-black">Weight:</strong> {store.unPokemon.weight} hg</div>
              </div>
              {/* <div>
                  
              </div> */}
              
              <div className="vista-detallada-texto text-black"> <strong className="text-black">Moves:</strong>
                  <ul className="scroll_list_poke">
                      {store.unPokemon.moves?.map((mo, i) => (
                          <li key={i}>{mo.move.name}</li>
                      ))}

                  </ul></div>
              
              <div className="vista-detallada-texto text-black"> <strong className="text-black">Stats:</strong>
                  <ul>
                      {store.unPokemon.stats?.map((st, i) => (
                          <li key={i}>{st.stat.name}</li>
                      ))}

                  </ul></div>
          </div>

      </div>
  )
}