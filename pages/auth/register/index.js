import Head from 'next/head'

import MRegister from 'modules/auth/components/MRegister'

export default function RegisterPage() {
	return (
		<>
			<Head>
				<title>Đăng nhập</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='bg-light' style={{ minHeight: '100vh' }}>
				<div className='pt-5 d-flex justify-content-center'>
					<MRegister />
				</div>
			</div>
		</>
	)
}
