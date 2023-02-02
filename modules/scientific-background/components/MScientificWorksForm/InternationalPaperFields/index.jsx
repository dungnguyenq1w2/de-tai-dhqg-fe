import { useFieldArray } from 'react-hook-form'

import { CDatePicker, CTextInput } from 'common/components/form'

import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

export default function InternationalPaperFields({ control, errors }) {
	//#region Data
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'scientific_work.international_papers',
	})
	//#endregion Data

	return (
		<>
			<label className='fw-semibold form-label'>2.1. Đăng trên tạp chí Quốc tế</label>

			{fields?.map((item, index) => (
				<div key={item.id} className='position-relative'>
					<hr className='border border-1 border-primary my-1' />
					<span className='fw-semibold'>TT: {index + 1}</span>
					<Row>
						<Col md={4}>
							<CTextInput
								label='Tên tác giả'
								name={`scientific_work.international_papers.${index}.author`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CTextInput
								label='Tên bài viết'
								name={`scientific_work.international_papers.${index}.name`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CTextInput
								label='Trang đăng bài viết'
								name={`scientific_work.international_papers.${index}.published_site`}
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<CTextInput
								label='Tên tạp chí'
								name={`scientific_work.international_papers.${index}.magazine_name`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CTextInput
								label='Số của tạp chí'
								name={`scientific_work.international_papers.${index}.magazine_number`}
								control={control}
								errors={errors}
							/>
						</Col>

						<Col md={4}>
							<CDatePicker
								label='Năm xuất bản'
								name={`scientific_work.international_papers.${index}.published_year`}
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<CTextInput
								label='Sản phẩm của đề tài/dự án (chỉ ghi mã số)'
								name={`scientific_work.international_papers.${index}.subject_code`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CTextInput
								label='Số hiệu ISSN (ghi rõ thuộc ISI hay không)'
								name={`scientific_work.international_papers.${index}.ISSN`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CTextInput
								label='Điểm IF'
								name={`scientific_work.international_papers.${index}.IF`}
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<OverlayTrigger key='top' placement='top' overlay={<Tooltip id='tooltip-top'>Xóa bài báo</Tooltip>}>
						<i
							type='button'
							onClick={() => remove(index)}
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
					overlay={<Tooltip id='tooltip-top'>Thêm bài báo đăng trên tạp chí Quốc tế</Tooltip>}
				>
					<i
						type='button'
						onClick={() => {
							append()
						}}
						className='bi bi-plus-circle text-primary fs-4'
					></i>
				</OverlayTrigger>
			</div>
		</>
	)
}
