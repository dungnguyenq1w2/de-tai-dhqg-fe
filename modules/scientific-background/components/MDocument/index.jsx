import styles from 'modules/document/assets/styles/index.module.scss'

import { useEffect, useState } from 'react'

import { generatePresentationVNU } from 'utils/document/generatePresentationVNU'

import vnu_logo from 'public/images/vnu-logo.png'

const data = {
	receive_date: '20/01/2023',
	code: 'DT01',
	vietnamese_name: 'Hệ thống quản lí đề tài nghiên cứu khoa học cho ĐHQG',
	english_name: 'Scientific research management system for Vietnam National University',
	first_priority_major: 'Kĩ thuật phần mềm',
	second_priority_major: 'Khoa học máy tính',
	third_priority_major: 'Công nghệ thông tin',
	experts: [
		{
			id: '1',
			name: 'Nguyễn Văn A',
			research: 'Kĩ thuật phần mềm',
			agency: 'Trường ĐH KHTN',
			email: 'nva@gmail.com',
		},
		{
			id: '2',
			name: 'Nguyễn Văn A',
			research: 'Kĩ thuật phần mềm',
			agency: 'Trường ĐH KHTN',
			email: 'nva@gmail.com',
		},
		{
			id: '3',
			name: 'Nguyễn Văn A',
			research: 'Kĩ thuật phần mềm',
			agency: 'Trường ĐH KHTN',
			email: 'nva@gmail.com',
		},
	],
}

export const MDocument = () => {
	const [logo, setLogo] = useState()
	const loadLogo = () => {
		fetch(vnu_logo.src)
			.then((r) => r.blob())
			.then((text) => {
				setLogo(text)
			})
	}
	useEffect(() => {
		loadLogo()
	}, [])

	const generate = () => generatePresentationVNU(logo, data)

	return (
		<>
			<div className='py-4'>
				<div className={`${styles.docs} container-md shadow`} style={{ minWidth: '30rem' }}>
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
										<td>{data.receive_date}</td>
									</tr>
									<tr>
										<td>Mã số đề tài</td>
										<td>{data.code}</td>
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
						<h4 className='text-center text-uppercase'>ĐỀ TÀI KHOA HỌC VÀ CÔNG NGHỆ</h4>
					</div>

					{/* Body */}
					<div>
						<h5 className='text-primary fw-bold text-uppercase py-2'>A. THÔNG TIN CHUNG</h5>
						<h5 className='text-primary fw-bold py-1'>A1. Tên đề tài</h5>
						<p className='h5 px-4'>- Tên tiếng Việt: {data.vietnamese_name}</p>

						<p className='h5 px-4'>- Tên tiếng Anh: {data.english_name}</p>

						<h5 className='text-primary fw-bold py-1'>A2. Thuộc ngành nhóm ngành (N/NN)</h5>
						<p className='h5 px-4'>N/NN ưu tiên 1: {data.first_priority_major}; Hướng nghiên cứu:</p>
						<p className='h5 px-4'>N/NN ưu tiên 2: {data.second_priority_major}; Hướng nghiên cứu:</p>
						<p className='h5 px-4'>N/NN ưu tiên 3: {data.third_priority_major}; Hướng nghiên cứu:</p>

						<h5 className='text-primary fw-bold py-1'>
							Giới thiệu chuyên gia/nhà khoa học am hiểu đề tài này
							<span className='fst-italic text-black fw-normal'> (không bắt buộc)</span>
						</h5>

						<table className={`${styles.expert__table} table-bordered`}>
							<thead>
								<tr className={`${styles.expert__header}`}>
									<th className='text-center' style={{ minWidth: 50, borderStyle: 'dashed' }}>
										TT
									</th>
									<th className='text-center' style={{ minWidth: 250, borderStyle: 'dashed' }}>
										Họ và tên
									</th>
									<th className='text-center' style={{ minWidth: 220, borderStyle: 'dashed' }}>
										Hướng nghiên cứu chuyên sâu
									</th>
									<th className='text-center' style={{ minWidth: 250, borderStyle: 'dashed' }}>
										Cơ quan công tác, địa chỉ
									</th>
									<th className='text-center' style={{ minWidth: 150, borderStyle: 'dashed' }}>
										Điện thoại, Email
									</th>
								</tr>
							</thead>
							<tbody>
								{data.experts.map((expert, index) => (
									<tr key={expert.id}>
										<td className='text-center'>{index + 1}</td>
										<td>{expert.name}</td>
										<td>{expert.research}</td>
										<td>{expert.agency}</td>
										<td>{expert.email}</td>
									</tr>
								))}
							</tbody>
						</table>

						<h5
							className='text-primary fw-bold'
							style={{ paddingTop: 10, paddingBottom: 0, marginBottom: 0 }}
						>
							A3. Loại hình nghiên cứu
						</h5>
						<p className='fst-italic text-black fw-normal'>
							(Tham khảo tiêu chuẩn đề tài đối với từng loại hình NC, chọn 01 trong 03 loại hình)
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
