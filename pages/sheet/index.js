import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import CHeader from '../../common/components/CHeader'
import CFileInput from '../../common/components/form/CFileInput'
import MSheet from '../../modules/sheet/MSheet'

import axios from 'axios'

export default function Sheet() {
	const [files, setFiles] = useState([]);
	const [fileIndex, setFileIndex] = useState(null);
	const [fileUrls, setFileUrls] = useState([])

	useEffect(() => {
		const fetchFileUrls = async () => {
			try {
				const response = await axios.get('http://localhost:5000/api/excel/files');
				if (response) {
					setFileUrls(response.data);
				}
			} catch (error) {
				console.log(error);
			}
		}
		fetchFileUrls();
	}, []);

	const handleChange = (files) => {
		setFiles(files)
	}

	const handleClick = (index) => {
		setFileIndex(index)
	}

	const handleClickUrl = async (fileUrl) => {
		if (!fileUrl)
			return;

		const response = await axios.get(fileUrl, { responseType: 'blob' });
		setFetchedFile(response.data)
	}

	const onChange = (urls) => {
		setFileUrls(urls)
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
			<ul>
			{ fileUrls.length > 0 && fileUrls.map((fileUrl, index) => (<li key={index} onClick={() => handleClickUrl(fileUrl.link)} style={{cursor: 'pointer'}}>{fileUrl.link}</li>)) }
			</ul>
			{ files.length > 0 && fileIndex !== null && <MSheet file={files[fileIndex]} onChange={onChange} fileUrls={fileUrls} />}
		</div>
	)
}
