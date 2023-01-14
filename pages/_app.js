import 'bootstrap/dist/css/bootstrap.css' // Import bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import { useEffect } from 'react'
import { AbilityContext } from '../common/components/CCan'
import { buildAbilityFor } from '../common/config/casl'

const ability = buildAbilityFor()

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap.js')
	}, [])
	return (
		<AbilityContext.Provider value={ability}>
			<Component {...pageProps} />
		</AbilityContext.Provider>
	)
}

export default MyApp
