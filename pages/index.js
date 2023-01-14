import CHeader from 'common/components/CHeader'
import Head from 'next/head'
import { useRouter } from 'next/router'

// const exam = { type: 'Exam', createBy: 1 }

export default function Home() {
	// const [user, setUser] = useState()
	// const ability = useContext(AbilityContext)
	// const handleChangeUser = (user) => () => {
	// 	ability.update(defineRulesFor(user))
	// 	setUser(user)
	// }
	// const test = ability.can('create', exam)
	const router = useRouter()
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<>
				<CHeader />
				<ul className='filters'>
					<li className='help'>Switch roles:</li>
					<li>
						<button type='button' onClick={() => router.push('/sheet')}>
							Sheet
						</button>
					</li>
					<li>
						<button type='button' onClick={() => router.push('/document')}>
							Document
						</button>
					</li>
					<li>
						<button type='button' onClick={() => router.push('/form')}>
							Form
						</button>
					</li>
				</ul>
			</>
		</div>
	)
}
