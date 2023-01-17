import Head from 'next/head'
import { useContext, useState } from 'react'
import { read, utils, writeFile } from 'xlsx';
import CHeader from '../../common/components/CHeader'
import CFileInput from '../../common/components/CFileInput'

export default function Sheet() {
	const [files, setFiles] = useState([]);
	const [items, setItems] = useState([]);
	const [header, setHeader] = useState([]);

	const handleChange = files => {
		setFiles(files);
	}

	const handleReadSheetClick = () => {
		readSheet(files[0]);
	}

	const handleExportSheetClick = () => {
		exportSheet();
	}
	
	const readSheet = async file => {
		const reader = new FileReader();

		reader.onload = async event => {
			const data = event.target.result;
			const workbook = read(data, { type: 'binary' });
			const sheetName = workbook.SheetNames[0];
			const sheet = workbook.Sheets[sheetName];
			const json = utils.sheet_to_json(sheet);

			setItems(json);
			setHeader(Object.keys(json[0]));
		};

		reader.readAsBinaryString(file);
	}

	const exportSheet = () => {
		const sheet = utils.json_to_sheet(items);
		const workbook = utils.book_new();
		utils.book_append_sheet(workbook, sheet, 'Sheet1');
		writeFile(workbook, 'sheet.xlsx');
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
				<button onClick={handleReadSheetClick}>Read sheet</button>
				<button onClick={handleExportSheetClick}>Export sheet</button>
			</>
			<table className='table'>
				<thead>
					<tr>
						{header.map((item, index) => (
							<th key={index}>{item}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{items.map((item, index) => (
						<tr key={index}>
							{Object.values(item).map((value, index) => (
								<td key={index}>{value}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
