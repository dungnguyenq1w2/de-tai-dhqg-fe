import styles from 'modules/scientific-background/assets/styles/index.module.scss'

import { Fragment, useEffect, useState } from 'react'

import { generatePresentationVNU } from 'utils/document/generatePresentationVNU'

import { initialValues } from 'modules/scientific-background/initialValues/form'
import vnu_logo from 'public/images/vnu-logo.png'
import moment from 'moment'
// const data = initialValues

export const MDocument = ({ data }) => {
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
			<div className={`${styles.wrapper}`}>
				{/* <TransformWrapper
					centerZoomedOut={true}
					centerOnInit={true}
					maxScale={1.4}
					// initialScale={1}
					// initialPositionX={200}
					// initialPositionY={100}
					wheel={{ disabled: true }}
					panning={{ disabled: false }}
					doubleClick={{ disabled: true }}
				>
					{({ zoomIn, zoomOut, resetTransform, ..rest }) => (
						<>
							<div className='tools position-fixed' style={{ bottom: 10, right: 10, zIndex: 10 }}>
								<button onClick={() => zoomIn()}>+</button>
								<button onClick={() => zoomOut()}>-</button>
								<button onClick={() => resetTransform()}>x</button>
							</div>
							<TransformComponent> */}
				<div className='d-flex justify-content-center my-2'>
					<div className={`${styles.docs} shadow`} style={{ minWidth: '980px', width: '980px' }}>
						{/* Header */}
						<div className='d-flex justify-content-between'>
							<div>
								<img src={vnu_logo.src} alt='vnu_logo' height={70} />
							</div>
							<div className='d-flex flex-column'>
								<span style={{ paddingLeft: 10 }}>(Biểu mẫu 02)</span>
							</div>
						</div>

						{/* Title */}
						<div className='my-4'>
							<h4 className='text-center fw-bold text-uppercase'>LÝ LỊCH KHOA HỌC</h4>
							<p className='text-center fst-italic fs-6' style={{ color: 'red' }}>
								(Thông tin trong 5 năm gần nhất và có liên quan trực tiếp đến đề tài/dự án đăng ký)
							</p>
							<div className='d-flex justify-content-end'>
								<div className='border border-dark' style={{ width: 80, height: 100 }} />
							</div>
						</div>

						{/* Body */}
						<div>
							<h6 className='text-primary fw-bold text-uppercase py-2'>A. THÔNG TIN CHUNG</h6>
							<p className='h6 fw-bold'>1. Họ và tên: {data.general.name}</p>
							<p className='h6 fw-bold'>
								2. Ngày sinh: {moment(data.general.date_of_birth).format('DD/MM/yyyy')}
							</p>
							<p className='h6 fw-bold'>3. Nam/nữ: {data.general.gender}</p>

							<p className='h6 fw-bold'>4. Nơi đang công tác: </p>
							<p className='h6 fst-italic'>
								Trường/viện: {data.general.current_working_address.department}
							</p>
							<p className='h6 fst-italic'>Phòng/ Khoa: {data.general.current_working_address.faculty}</p>
							<p className='h6 fst-italic'>Bộ môn: {data.general.current_working_address.institute}</p>
							<p className='h6 fst-italic'>
								Phòng thí nghiệm: {data.general.current_working_address.lab}
							</p>
							<p className='h6 fst-italic'>Chức vụ: {data.general.current_working_address.position}</p>

							<div className='h6 fw-bold'>
								<span className='d-inline-block' style={{ width: 300 }}>
									5. Học vị: {data.general.academic_rank}{' '}
								</span>
								<span>năm đạt: {data.general.academic_rank_year}</span>
							</div>

							<div className='h6 fw-bold'>
								<span className='d-inline-block' style={{ width: 300 }}>
									6. Học hàm: {data.general.degree_level}{' '}
								</span>
								<span>năm phong: {data.general.degree_level_year}</span>
							</div>

							<p className='h6 fw-bold'>7. Liên lạc:</p>
							<table className={`${styles.table} table-bordered mb-2`}>
								<thead>
									<tr className={`${styles.header}`}>
										<th className='text-center' style={{ minWidth: 40 }}>
											TT
										</th>
										<th className='text-center' style={{ minWidth: 150 }}></th>
										<th className='text-center' style={{ minWidth: 300 }}>
											Cơ quan
										</th>
										<th className='text-center' style={{ width: '100%' }}>
											Cá nhân
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className='text-center'>1</td>
										<td className='fw-bold'>Địa chỉ</td>
										<td>{data.general.address}</td>
										<td></td>
									</tr>
									<tr>
										<td className='text-center'>2</td>
										<td className='fw-bold'>Điện thoại/fax</td>
										<td>{data.general.phone}</td>
										<td></td>
									</tr>
									<tr>
										<td className='text-center'>3</td>
										<td className='fw-bold'>Email</td>
										<td>{data.general.email}</td>
										<td></td>
									</tr>
								</tbody>
							</table>

							<p className='h6 fw-bold'>8. Trình độ ngoại ngữ:</p>
							<table className={`${styles.table} table-bordered mb-2`}>
								<thead>
									<tr className={`${styles.header}`}>
										<th className='text-center' style={{ minWidth: 40 }} rowSpan={2}>
											TT
										</th>
										<th className='text-center' style={{ minWidth: 160 }} rowSpan={2}>
											Tên ngoại ngữ
										</th>
										<th className='text-center' style={{ minWidth: 150 }} colSpan={3}>
											Nghe
										</th>
										<th className='text-center' style={{ minWidth: 150 }} colSpan={3}>
											Nói
										</th>
										<th className='text-center' style={{ minWidth: 150 }} colSpan={3}>
											Viết
										</th>
										<th className='text-center' style={{ width: '100%' }} colSpan={3}>
											Đọc hiểu tài liệu
										</th>
									</tr>
									<tr className={`${styles.header}`}>
										{Array(4)
											.fill(null)
											.map((e, index) => (
												<Fragment key={index}>
													<th className='text-center'>Tốt</th>
													<th className='text-center'>Khá</th>
													<th className='text-center'>TB</th>
												</Fragment>
											))}
									</tr>
								</thead>
								<tbody>
									{data.general.language_levels.map((language_level, index) => (
										<tr key={language_level.id || index}>
											<td className='text-center'>{index + 1}</td>
											<td className='fw-bold'>{language_level.language_name}</td>
											<td className='text-center'>{language_level.listening === 'Tốt' && 'x'}</td>
											<td className='text-center'>{language_level.listening === 'Khá' && 'x'}</td>
											<td className='text-center'>{language_level.listening === 'TB' && 'x'}</td>
											<td className='text-center'>{language_level.speaking === 'Tốt' && 'x'}</td>
											<td className='text-center'>{language_level.speaking === 'Khá' && 'x'}</td>
											<td className='text-center'>{language_level.speaking === 'TB' && 'x'}</td>
											<td className='text-center'>{language_level.writing === 'Tốt' && 'x'}</td>
											<td className='text-center'>{language_level.writing === 'Khá' && 'x'}</td>
											<td className='text-center'>{language_level.writing === 'TB' && 'x'}</td>
											<td className='text-center'>{language_level.reading === 'Tốt' && 'x'}</td>
											<td className='text-center'>{language_level.reading === 'Khá' && 'x'}</td>
											<td className='text-center'>{language_level.reading === 'TB' && 'x'}</td>
										</tr>
									))}
								</tbody>
							</table>

							<p className='h6 fw-bold'>9. Thời gian công tác:</p>
							<table className={`${styles.table} table-bordered mb-2`}>
								<thead>
									<tr className={`${styles.header}`}>
										<th className='text-center' style={{ minWidth: 150 }}>
											Thời gian
										</th>
										<th className='text-center' style={{ minWidth: 400 }}>
											Nơi công tác
										</th>
										<th className='text-center' style={{ width: '100%' }}>
											Chức vụ
										</th>
									</tr>
								</thead>
								<tbody>
									{data.working_times.map((working_time, index) => (
										<tr key={working_time.id || index}>
											<td className='text-center'>{`Từ ${working_time.start_time ?? '...'} đến ${
												working_time.end_time ?? '...'
											}`}</td>
											<td>{working_time.lab}</td>
											<td>{working_time.position}</td>
										</tr>
									))}
								</tbody>
							</table>

							<p className='h6 fw-bold'>10. Quá trình đào tạo:</p>
							<table className={`${styles.table} table-bordered mb-2`}>
								<thead>
									<tr className={`${styles.header}`}>
										<th className='text-center' style={{ minWidth: 150 }}>
											Bậc đào tạo
										</th>
										<th className='text-center' style={{ minWidth: 120 }}>
											Thời gian
										</th>
										<th className='text-center' style={{ minWidth: 150 }}>
											Nơi đào tạo
										</th>
										<th className='text-center' style={{ minWidth: 150 }}>
											Chuyên ngành
										</th>
										<th className='text-center' style={{ width: '100%' }}>
											Tên luận án tốt nghiệp
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Đại học</td>
										<td className='text-center'>{`Từ ${
											data.training_process.b.start_time ?? '...'
										} đến ${data.training_process.b.end_time ?? '...'}`}</td>
										<td>{data.training_process.b.traning_address}</td>
										<td>{data.training_process.b.speciality}</td>
										<td>{data.training_process.b.graduate_thesis_name}</td>
									</tr>
									<tr>
										<td>Thạc sỹ</td>
										<td className='text-center'>{`Từ ${
											data.training_process.m.start_time ?? '...'
										} đến ${data.training_process.m.end_time ?? '...'}`}</td>
										<td>{data.training_process.m.traning_address}</td>
										<td>{data.training_process.m.speciality}</td>
										<td>{data.training_process.m.graduate_thesis_name}</td>
									</tr>
									<tr>
										<td>Tiến sỹ</td>
										<td className='text-center'>{`Từ ${
											data.training_process.d.start_time ?? '...'
										} đến ${data.training_process.d.end_time ?? '...'}`}</td>
										<td>{data.training_process.d.traning_address}</td>
										<td>{data.training_process.d.speciality}</td>
										<td>{data.training_process.d.graduate_thesis_name}</td>
									</tr>
									<tr>
										<td>Tiến sỹ Khoa học</td>
										<td className='text-center'>{`Từ ${
											data.training_process.ds.start_time ?? '...'
										} đến ${data.training_process.ds.end_time ?? '...'}`}</td>
										<td>{data.training_process.ds.traning_address}</td>
										<td>{data.training_process.ds.speciality}</td>
										<td>{data.training_process.ds.graduate_thesis_name}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				{/* </TransformComponent>
						</>
					)}
				</TransformWrapper> */}
			</div>
		</>
	)
}
