import 'bootstrap/dist/css/bootstrap.css' // Import bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'

import { AbilityContext } from '../common/components/CCan'
import { buildAbilityFor } from '../common/config/casl'

const ability = buildAbilityFor()

function MyApp({ Component, pageProps }) {
	return (
		<AbilityContext.Provider value={ability}>
			<Component {...pageProps} />
		</AbilityContext.Provider>
	)
}

export default MyApp
