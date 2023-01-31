import { useFieldArray } from 'react-hook-form'

import { CDatePicker, CTextInput } from 'common/components/form'

import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

export default function JoinedConferenceFields({ control, errors }) {
	//#region Data
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'other.joined_conferences',
	})
	//#endregion Data

	return (
		<>
			<label className='fw-semibold form-label d-block'>
				2. Tham gia các Hiệp hội Khoa học, Ban biên tập các tạp chí Khoa học, Ban tổ chức các Hội nghị về KH&CN
			</label>

			{fields?.map((item, index) => (
				<div key={item.id} className='position-relative'>
					<hr className='border border-1 border-primary my-1' />
					<span className='fw-semibold'>TT: {index + 1}</span>
					<Row>
						<Col xs={6} sm={4} md={3} lg={2}>
							<CDatePicker
								label='Bắt đầu'
								name={`other.joined_conferences.${index}.start_time`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col xs={6} sm={4} md={3} lg={2}>
							<CDatePicker
								label='Kết thúc'
								name={`other.joined_conferences.${index}.end_time`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col sm={8} lg={6}>
							<CTextInput
								label='Tên Hiệp hội/Tạp chí/ Hội nghị'
								name={`other.joined_conferences.${index}.name`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
						<Col sm={4} lg={2}>
							<CTextInput
								label='Chức danh'
								name={`other.joined_conferences.${index}.role`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<OverlayTrigger
						key='top'
						placement='top'
						overlay={<Tooltip id='tooltip-top'>Xóa thông tin</Tooltip>}
					>
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
				<OverlayTrigger key='top' placement='top' overlay={<Tooltip id='tooltip-top'>Thêm thông tin</Tooltip>}>
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
