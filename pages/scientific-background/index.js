import CHeader from 'common/components/CHeader'
import { MDocument } from 'modules/scientific-background/components'
import { initialValues } from 'modules/scientific-background/initialValues/form'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
export default function ScientificBackgroundPage() {
	//#region Data
	const router = useRouter()

	//#endregion

	//#region Event
	//#endregion
	return (
		<div>
			<Head>
				<title>Lý lịch khoa học</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div style={{ height: '100vh' }}>
				<CHeader />

				<h1>Lý lịch khoa học</h1>
				<Link href='scientific-background/edit'>Chỉnh sửa lý lịch</Link>

				<MDocument data={initialValues} />
			</div>
		</div>
	)
}
