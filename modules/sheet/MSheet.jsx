import { useState, useEffect } from 'react'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import { read, utils, writeFile } from 'xlsx'
import axios from 'axios'
import 'react-tabs/style/react-tabs.css'

const MSheet = (props) => {
    const [workbook, setWorkbook] = useState([])

    useEffect(() => {
        if (workbook) {
            readFromFile(props.file)
        }
    }, [props.file])

    const readFromFile = file => {
		const reader = new FileReader()

        reader.onload = e => {
            try {
                const data = e.target.result
                const workbook = read(data, { type: 'binary' })
                const readWorkbook = []

                for (const [key, value] of Object.entries(workbook.Sheets)) {
                    readWorkbook.push({
                        sheetName: key,
                        sheetData: utils.sheet_to_json(value)
                    })
                }

                setWorkbook(readWorkbook)
            } catch (error) {
                console.log(error)
            }
        }
        reader.readAsBinaryString(file)
	}

	const exportToFile = () => {
		const newWorkbook = utils.book_new()

        workbook.forEach(sheet => {
            utils.book_append_sheet(
                newWorkbook,
                utils.json_to_sheet(sheet.sheetData),
                sheet.sheetName
            )
        })

		writeFile(newWorkbook, 'workbook.xlsx')
	}

    const handleExport = () => {
        exportToFile()
    }

    return (
        <div>
            <button onClick={handleExport}>Export</button>
            <Tabs>
                <TabList>
                    {workbook.map((sheet, sheetIndex) => (
                        <Tab key={sheetIndex}>{sheet.sheetName}</Tab>
                    ))}
                </TabList>
                {workbook.map((sheet, sheetIndex) => (
                    <TabPanel key={sheetIndex}>
                        <table className='table'>
                            <tbody>
                                {sheet.sheetData.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {Object.values(row).map((column, columnIndex) => (
                                            <td key={columnIndex}>
                                                {column}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    )
}

export default MSheet
