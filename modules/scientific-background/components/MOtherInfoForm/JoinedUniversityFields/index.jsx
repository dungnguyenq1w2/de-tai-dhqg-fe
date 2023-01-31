import { useFieldArray } from 'react-hook-form'

import { CDatePicker, CTextInput } from 'common/components/form'

import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

export default function JoinedUniversityFields({ control, errors }) {
	//#region Data
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'other.joined_universities',
	})
	//#endregion Data

	return (
		<>
			<label className='fw-semibold form-label d-block'>
				3. Tham gia làm việc tại Trường Đại học/Viện/Trung tâm nghiên cứu theo lời mời
			</label>

			{fields?.map((item, index) => (
				<div key={item.id} className='position-relative'>
					<hr className='border border-1 border-primary my-1' />
					<span className='fw-semibold'>TT: {index + 1}</span>
					<Row>
						<Col xs={6} sm={4} md={3} lg={2}>
							<CDatePicker
								label='Bắt đầu'
								name={`other.joined_universities.${index}.start_time`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col xs={6} sm={4} md={3} lg={4} xxl={2}>
							<CDatePicker
								label='Kết thúc'
								name={`other.joined_universities.${index}.end_time`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={8} xxl={6}>
							<CTextInput
								label='Tên Trường Đại học/Viện/Trung tâm nghiên cứu'
								name={`other.joined_universities.${index}.name`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4} xxl={2}>
							<CTextInput
								label='Nội dung tham gia'
								name={`other.joined_universities.${index}.activity_detail`}
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
