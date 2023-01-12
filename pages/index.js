import Head from 'next/head'
import { useContext, useState } from 'react'
import { AbilityContext, Can } from '../common/components/Can'
import { defineRulesFor } from '../common/config/casl'
import styles from '../styles/Home.module.css'

const exam = { type: 'Exam', createBy: 1 }

export default function Home() {
	const [user, setUser] = useState()
	const ability = useContext(AbilityContext)
	console.log('🚀 ~ ability', ability)
	console.log('🚀 ~ user', user)
	const handleChangeUser = (user) => () => {
		ability.update(defineRulesFor(user))
		setUser(user)
	}
	const test = ability.can('create', exam)
	console.log('🚀 ~ test', test)
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Can I='create' this={exam}>
				I can create this exam
			</Can>
			<Can not I='create' this={exam}>
				I can not create this exam
			</Can>
			<ul className='filters'>
				<li className='help'>Switch roles:</li>
				<li>
					<button
						type='button'
						onClick={handleChangeUser({ id: 2, name: 'asdasd', role: 'admin' })}
					>
						Admin
					</button>
				</li>
				<li>
					<button
						type='button'
						onClick={handleChangeUser({ id: 3, name: 'fgjj', role: 'teacher' })}
					>
						Teacher
					</button>
				</li>{' '}
				<li>
					<button
						type='button'
						onClick={handleChangeUser({ id: 4, name: 'xcv', role: 'student' })}
					>
						Student
					</button>
				</li>
			</ul>
		</div>
	)
}
