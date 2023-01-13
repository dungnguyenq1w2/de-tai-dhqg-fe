import Head from 'next/head'
import { useContext, useState } from 'react'
import CHeader from '../../common/components/CHeader'
import CFileInput from '../../common/components/CFileInput'

export default function Sheet() {
	const [file, setFile] = useState(null);

	const handleChange = (files) => {

	}

	return (
		<div>
			<Head>
				<title>Sheet</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<>
				<CHeader />
				<CFileInput
					accept=".xls, .xlsx, .csv"
					onFileChange={(files) => handleChange(files)} />
			</>
			<div>Sheet</div>
		</div>
	)
}
