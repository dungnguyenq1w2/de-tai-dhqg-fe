import { CDatePicker, CRadio, CTextInput } from 'common/components/form'
import PropTypes from 'prop-types'
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

export const MTraningActivitiesForm = ({
	fieldArray: { fields, append, remove },
	errors,
	trigger,
	control,
	previousStep,
	nextStep,
}) => {
	//#region Data
	//#endregion

	//#region Event
	const handleNextStep = async () => {
		const isValid = await trigger(['name', 'email', 'dateOfBirth'])
		if (isValid) {
			nextStep()
		}
	}
	//#endregion
	return (
		<div>
			<h4 className='text-center mb-4'>Hoạt động đào tạo</h4>
			{fields?.map((item, index) => (
				<div key={item.id} className='position-relative'>
					<hr className='border border-1 border-primary mt-1 mb-4' />
					<Row>
						<CTextInput
							label='Tên SV, HVCH, NCS '
							name={`student_instructions.${index}.student_name`}
							type='text'
							control={control}
							errors={errors}
						/>
					</Row>
					<Row>
						<CTextInput
							label='Tên luận án'
							name={`student_instructions.${index}.graduate_thesis_name`}
							type='text'
							control={control}
							errors={errors}
						/>
					</Row>
					<Row>
						<Col sm={4} lg={3}>
							<CDatePicker
								label='Năm tốt nghiệp'
								name={`student_instructions.${index}.graduate_year`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col sm={8} lg={9}>
							<CRadio
								label='Bậc đào tạo'
								name={`student_instructions.${index}.education_level`}
								options={['Đại học', 'Thạc sỹ', 'Tiến sĩ']}
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>

					<CTextInput
						label='Sản phẩm của đề tài/dự án (chỉ ghi mã số)'
						name={`student_instructions.${index}.product_code`}
						type='product_code'
						control={control}
						errors={errors}
					/>
					<OverlayTrigger
						key='top'
						placement='top'
						overlay={<Tooltip id='tooltip-top'>Xóa dề tài/dự án</Tooltip>}
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
				<OverlayTrigger
					key='top'
					placement='top'
					overlay={<Tooltip id='tooltip-top'>Thêm dề tài/dự án</Tooltip>}
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
			<Button onClick={previousStep}>Previous</Button>
			<Button onClick={handleNextStep}>Next</Button>
		</div>
	)
}

MTraningActivitiesForm.propTypes = {
	nextStep: PropTypes.func,
}
