import Aside from './files/components/Aside';
import ModalPokemon from './files/components/ModalPokemon';
import Pokemons from './files/components/Pokemons';
import usePokemonContext from './files/hooks/usePokemonContext';

function AppPokemon() {
	const { showDetailPokemon, closePokemonDetail, pokemonDetail, isLoading } =
		usePokemonContext();

	return (
		<section className='bg-[#F6F8FC] h-screen font-outfit overflow-y-auto bg-[url(/pokeball-icon.png)] bg-no-repeat bg-[-10%_-20%] overflow-x-hidden'>
			<main className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]'>
				<Pokemons />
				<Aside pokemon={pokemonDetail} isLoading={isLoading} />
				<ModalPokemon
					showModal={showDetailPokemon}
					onCloseModal={closePokemonDetail}
					pokemon={pokemonDetail}
				/>
			</main>
		</section>
	);
}

export default AppPokemon;
