import Head from 'next/head'

import { MLogin } from 'modules/auth/components'

export default function LoginPage() {
	return (
		<>
			<Head>
				<title>Đăng nhập</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='bg-light' style={{ minHeight: '100vh' }}>
				<div className='pt-5 d-flex justify-content-center'>
					<MLogin />
				</div>
			</div>
		</>
	)
}
