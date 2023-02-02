import { useFieldArray } from 'react-hook-form'

import { CDatePicker, CSelect, CTextInput } from 'common/components/form'

import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

export default function NationalBookFields({ control, errors }) {
	//#region Data
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'scientific_work.national_papers',
	})
	//#endregion Data

	return (
		<>
			<label className='fw-semibold form-label'>1.2. Sách xuất bản trong nước</label>

			{fields?.map((item, index) => (
				<div key={item.id} className='position-relative'>
					<hr className='border border-1 border-primary my-1' />
					<span className='fw-semibold'>TT: {index + 1}</span>
					<Row>
						<Col lg={6}>
							<CTextInput
								label='Tên sách'
								name={`scientific_work.national_books.${index}.name`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col>
							<CTextInput
								label='Sản phẩm của đề tài/dự án (chỉ ghi mã số)'
								name={`scientific_work.national_books.${index}.subject_code`}
								type='product_code'
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<Row>
						<Col sm={6} lg={3}>
							<CTextInput
								label='Nhà xuất bản'
								name={`scientific_work.national_books.${index}.publisher`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col sm={6} lg={3}>
							<CDatePicker
								label='Năm xuất bản'
								name={`scientific_work.national_books.${index}.published_year`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col sm={6} lg={3}>
							<CSelect
								label='Tác giả/đồng tác giả'
								name={`scientific_work.national_books.${index}.role`}
								options={[
									{ value: 'Tác giả', label: 'Tác giả' },
									{ value: 'Đồng tác giả', label: 'Đồng tác giả' },
								]}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col sm={6} lg={3}>
							<CTextInput
								label='Bút danh'
								name={`scientific_work.national_books.${index}.pen_name`}
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<OverlayTrigger key='top' placement='top' overlay={<Tooltip id='tooltip-top'>Xóa sách</Tooltip>}>
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
					overlay={<Tooltip id='tooltip-top'>Thêm sách xuất bản trong nước</Tooltip>}
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
