import { Header1 } from '../componentes-blog/Header1';
import PageContainer from '../global_components/pageContainer';
import AppPokemon from './AppPokemon.jsx';

import { PokemonProvider } from './files/context/PokemonContext';

const MainPokemon = () => {
	return (
		<>
			<PageContainer>
				<Header1></Header1>
				<PokemonProvider>
					<AppPokemon></AppPokemon>
				</PokemonProvider>
			</PageContainer>
		</>
	);
};

export default MainPokemon;
