import { AbilityContext } from '../common/components/Can'
import { buildAbilityFor } from '../common/config/casl'
import '../styles/globals.css'

const ability = buildAbilityFor()

function MyApp({ Component, pageProps }) {
	return (
		<AbilityContext.Provider value={ability}>
			<Component {...pageProps} />
		</AbilityContext.Provider>
	)
}

export default MyApp
