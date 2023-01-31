import { CDatePicker, CTextInput } from 'common/components/form'
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

export default function JoinedProgramFields({ joinedProgramFields, control, errors }) {
	return (
		<>
			<label className='fw-semibold form-label d-block'>1. Tham gia các chương trình trong và ngoài nước</label>

			{joinedProgramFields.fields?.map((item, index) => (
				<div key={item.id} className='position-relative'>
					<hr className='border border-1 border-primary my-1' />
					<span className='fw-semibold'>TT: {index + 1}</span>
					<Row>
						<Col xs={6} sm={4} md={3} lg={2}>
							<CDatePicker
								label='Bắt đầu'
								name={`other.joined_program.${index}.start_time`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col xs={6} sm={4} md={3} lg={2}>
							<CDatePicker
								label='Kết thúc'
								name={`other.joined_program.${index}.end_time`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col sm={8} lg={6}>
							<CTextInput
								label='Tên chương trình'
								name={`other.joined_program.${index}.name`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
						<Col sm={4} lg={2}>
							<CTextInput
								label='Chức danh'
								name={`other.joined_program.${index}.role`}
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
							onClick={() => joinedProgramFields.remove(index)}
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
							joinedProgramFields.append()
						}}
						className='bi bi-plus-circle text-primary fs-4'
					></i>
				</OverlayTrigger>
			</div>
		</>
	)
}
