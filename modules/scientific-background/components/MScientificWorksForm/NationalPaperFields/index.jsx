import { CDatePicker, CTextInput } from 'common/components/form'
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

export default function NationalPaperFields({ nationalPaperFields, control, errors }) {
	return (
		<>
			<label className='fw-semibold form-label'>2.2. Đăng trên tạp chí trong nước</label>
			{nationalPaperFields.fields?.map((item, index) => (
				<div key={item.id} className='position-relative'>
					<hr className='border border-1 border-primary my-1' />
					<span className='fw-semibold'>TT: {index + 1}</span>
					<Row>
						<Col md={4}>
							<CTextInput
								label='Tên tác giả'
								name={`scientific_work.national_papers.${index}.author`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CTextInput
								label='Tên bài viết'
								name={`scientific_work.national_papers.${index}.name`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CTextInput
								label='Trang đăng bài viết'
								name={`scientific_work.national_papers.${index}.published_site`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<CTextInput
								label='Tên tạp chí '
								name={`scientific_work.national_papers.${index}.magazine_name`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CTextInput
								label='Số của tạp chí'
								name={`scientific_work.national_papers.${index}.magazine_number`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>

						<Col md={4}>
							<CDatePicker
								label='Năm xuất bản'
								name={`scientific_work.national_papers.${index}.published_year`}
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<CTextInput
								label='Sản phẩm của đề tài/dự án (chỉ ghi mã số)'
								name={`scientific_work.national_papers.${index}.subject_code`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CTextInput
								label='Số hiệu ISSN (ghi rõ thuộc ISI hay không)'
								name={`scientific_work.national_papers.${index}.ISSN`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CTextInput
								label='Ghi chú'
								name={`scientific_work.national_papers.${index}.note`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<OverlayTrigger key='top' placement='top' overlay={<Tooltip id='tooltip-top'>Xóa bài báo</Tooltip>}>
						<i
							type='button'
							onClick={() => nationalPaperFields.remove(index)}
							className='bi bi-x-circle fs-4 text-danger position-absolute top-0 end-0'
						></i>
					</OverlayTrigger>
				</div>
			))}
			<hr className='border border-1 border-primary mt-1 mb-1' />
			<div className='d-flex justify-content-center'>
				<OverlayTrigger
					key='top'
					placement='top'
					overlay={<Tooltip id='tooltip-top'>Thêm bài báo đăng trên tạp chí trong nước</Tooltip>}
				>
					<i
						type='button'
						onClick={() => {
							nationalPaperFields.append()
						}}
						className='bi bi-plus-circle text-primary fs-4'
					></i>
				</OverlayTrigger>
			</div>
		</>
	)
}
