
import { ItemCard } from "../components/demo_card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { TypeCard } from "../components/tipos_card.jsx";
import { PokemonCard } from "../components/PokemonCard.jsx";
import "../styles/home.css"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	

	return (
		<div className="fondoPrincipal text-center">
			<h2> Pokemons!! </h2>
			<div className="fondoListas">
				{store.pokemons?.results?.map((el, i) => (
					<PokemonCard
						key={i}
						name={el.name}
						url={el.url}
					/>
				))}
			</div>
			
			<h2> Type!! </h2>
			<div className="fondoListas">
				{store.types?.results?.map((el, i) => (
					<TypeCard
						key={i}
						name={el.name}
						url={el.url}
					/>
				))}
			</div>

			<h2> Items!! </h2>
			<div className="fondoListas">
				{store.items?.results?.map((el, i) => (
					<ItemCard
						key={i}
						name={el.name}
						url={el.url}
					/>
				))}
			</div>

			
		</div>
	);
}; 