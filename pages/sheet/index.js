import Head from 'next/head'
import { useContext, useState } from 'react'
import CHeader from '../../common/components/CHeader'
import CFileInput from '../../common/components/CFileInput'
import MSheet from '../../modules/sheet/MSheet';

export default function Sheet() {
	const [files, setFiles] = useState([]);
	const [fileIndex, setFileIndex] = useState(null);

	const handleChange = files => {
		setFiles(files)
	}

	const handleClick = index => {
		setFileIndex(index)
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
					onFileChange={(files) => handleChange(files)}
					onFileClick={(index) => handleClick(index)} />
			</>
			{ files.length > 0 && fileIndex !== null && <MSheet file={files[fileIndex]} />}
		</div>
	)
}
