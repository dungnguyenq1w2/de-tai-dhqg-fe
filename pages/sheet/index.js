import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import CHeader from '../../common/components/CHeader'
import CFileInput from '../../common/components/CFileInput'
import MSheet from '../../modules/sheet/MSheet'

import axios from 'axios'

export default function Sheet() {
	const [files, setFiles] = useState([]);
	const [fileIndex, setFileIndex] = useState(null);
	const [fetchedFile, setFetchedFile] = useState(null);
	const [fetchedFileUrl, setFetchedFileUrl] = useState('')

	const handleChange = (files) => {
		setFiles(files)
	}

	const handleClick = (index) => {
		setFileIndex(index)
	}

	const handleFileUrlChange = e => {
		setFetchedFileUrl(e.target.value)
	}

	const handleFetch = async () => {
		if (!fetchedFileUrl)
			return;

        const response = await axios.get(fetchedFileUrl, { responseType: 'blob' });
		setFetchedFile(response.data)
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
				<div>
					<button onClick={handleFetch}>Fetch</button>
					<input type='text' value={fetchedFileUrl} onChange={handleFileUrlChange} />
				</div>
			</>
			{ files.length > 0 && fileIndex !== null && <MSheet file={files[fileIndex]} />}
			{ fetchedFile && <MSheet file={fetchedFile} />}
		</div>
	)
}
