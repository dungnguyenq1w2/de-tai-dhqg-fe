import styles from 'modules/docs/assets/styles/index.module.scss'

import Head from 'next/head'
import { useEffect, useState } from 'react'

import CHeader from 'common/components/CHeader'
import { generatePresentationVNU } from 'utils/docs/generatePresentationVNU'

import vnu_logo from 'public/images/vnu-logo.png'

export default function DocumentPage() {
	const [image, setImage] = useState()
	const loadImage = () => {
		fetch(vnu_logo.src)
			.then((r) => r.blob())
			.then((text) => {
				setImage(text)
			})
	}
	useEffect(() => {
		loadImage()
	}, [])

	const generate = () => generatePresentationVNU(image)

	return (
		<div>
			<Head>
				<title>Document</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<>
				<CHeader />
				<button onClick={generate}>Generate Docs</button>
				<div className='pt-4'>
					<div className={`${styles.docs} container-md shadow`}>
						{/* Header */}
						<div className='d-flex justify-content-between'>
							<div>
								<img src={vnu_logo.src} alt='vnu_logo' />
							</div>
							<div className='d-flex flex-column'>
								<span style={{ paddingLeft: 10 }}>Mẫu R01 - cập nhật 2022</span>
								<table className={`${styles.header__table} table-bordered`}>
									<tbody>
										<tr>
											<td>Ngày nhận hồ sơ</td>
											<td>20-01-2022</td>
										</tr>
										<tr>
											<td>Mã số đề tài</td>
											<td>DT01</td>
										</tr>

										<tr>
											<td className='text-center' colSpan={2}>
												(Do CQ quản lý ghi)
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						{/* Title */}
						<div className='my-4'>
							<h4 className='text-center fw-bold text-uppercase'>THUYẾT MINH</h4>
							<h4 className='text-center text-uppercase'>
								ĐỀ TÀI KHOA HỌC VÀ CÔNG NGHỆ
							</h4>
						</div>

						{/* Body */}
						<div>
							<h5 className='text-primary fw-bold text-uppercase py-2'>
								A. THÔNG TIN CHUNG
							</h5>
							<h5 className='text-primary fw-bold py-1'>A1. Tên đề tài</h5>
							<p className='h5 px-4'>- Tên tiếng Việt:</p>

							<p className='h5 px-4'>- Tên tiếng Anh:</p>

							<h5 className='text-primary fw-bold py-1'>
								A2. Thuộc ngành nhóm ngành (N/NN)
							</h5>
							<p className='h5 px-4'>
								N/NN ưu tiên 1: Choose an item.; Hướng nghiên cứu:
							</p>
							<p className='h5 px-4'>
								N/NN ưu tiên 3: Choose an item.; Hướng nghiên cứu:
							</p>
							<p className='h5 px-4'>
								N/NN ưu tiên 4: Choose an item.; Hướng nghiên cứu:
							</p>

							<h5 className='text-primary fw-bold py-1'>
								Giới thiệu chuyên gia/nhà khoa học am hiểu đề tài này
								<span className='fst-italic text-black fw-normal'>
									{' '}
									(không bắt buộc)
								</span>
							</h5>

							<table className={`${styles.expert__table} table-bordered`}>
								<tbody>
									<tr className={`${styles.expert__header}`}>
										<td
											className='text-center'
											style={{ minWidth: 50, borderStyle: 'dashed' }}
										>
											TT
										</td>
										<td
											className='text-center'
											style={{ minWidth: 250, borderStyle: 'dashed' }}
										>
											Họ và tên
										</td>
										<td
											className='text-center'
											style={{ minWidth: 220, borderStyle: 'dashed' }}
										>
											Hướng nghiên cứu chuyên sâu
										</td>
										<td
											className='text-center'
											style={{ minWidth: 250, borderStyle: 'dashed' }}
										>
											Cơ quan công tác, địa chỉ
										</td>
										<td
											className='text-center'
											style={{ minWidth: 150, borderStyle: 'dashed' }}
										>
											Điện thoại, Email
										</td>
									</tr>
									<tr>
										<td className='text-center'>1</td>
										<td>Nguyễn Tấn Dũng</td>
										<td>Kĩ thuật phần mềm</td>
										<td>Trường ĐH KHTN</td>
										<td>dungnguyenq1w2@gmail.com</td>
									</tr>
									<tr>
										<td className='text-center'>1</td>
										<td>Nguyễn Tấn Dũng</td>
										<td>Kĩ thuật phần mềm</td>
										<td>Trường ĐH KHTN</td>
										<td>dungnguyenq1w2@gmail.com</td>
									</tr>
									<tr>
										<td className='text-center'>1</td>
										<td>Nguyễn Tấn Dũng</td>
										<td>Kĩ thuật phần mềm</td>
										<td>Trường ĐH KHTN</td>
										<td>dungnguyenq1w2@gmail.com</td>
									</tr>
								</tbody>
							</table>

							<h5
								className='text-primary fw-bold'
								style={{ paddingTop: 10, paddingBottom: 0, marginBottom: 0 }}
							>
								A3. Loại hình nghiên cứu
							</h5>
							<p className='fst-italic text-black fw-normal'>
								(Tham khảo tiêu chuẩn đề tài đối với từng loại hình NC, chọn 01
								trong 03 loại hình)
							</p>
						</div>
					</div>
				</div>
			</>
		</div>
	)
}
