import PropTypes from 'prop-types'
import { CDatePicker, CTextInput } from 'common/components/form'
import { Button, Col, Row } from 'react-bootstrap'

export const MTrainingProcessForm = ({ errors, trigger, control, previousStep, nextStep }) => {
	//#region Data

	//#endregion

	//#region Event
	const handleNextStep = async () => {
		const isValid = await trigger(['account', 'password', 'confirmPassword'])
		if (isValid) {
			nextStep()
		}
	}
	//#endregion
	return (
		<div>
			<h4 className='text-center mb-4'>Quá trình đào tạo</h4>

			<hr className='border border-1 border-primary mt-1 mb-4' />
			<label className='fw-semibold form-label'>1. Bậc đại học</label>
			<Row>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker label='Bắt đầu' name='B-start_time' control={control} errors={errors} />
				</Col>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker label='Kết thúc' name='B-end_time' control={control} errors={errors} />
				</Col>
			</Row>
			<Row>
				<Col md={6} lg={4}>
					<CTextInput
						label='Nơi đào tạo'
						name='B-traning_address'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={6} lg={4}>
					<CTextInput
						label='Chuyên ngành'
						name='B-speciality'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={12} lg={4}>
					<CTextInput
						label='Tên luận án tốt nghiệp'
						name='B-graduate_thesis_name'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>

			<hr className='border border-1 border-primary mt-1 mb-4' />

			<label className='fw-semibold form-label'>2. Bậc thạc sĩ</label>
			<Row>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker label='Bắt đầu' name='M-start_time' control={control} errors={errors} />
				</Col>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker label='Kết thúc' name='M-end_time' control={control} errors={errors} />
				</Col>
			</Row>
			<Row>
				<Col md={6} lg={4}>
					<CTextInput
						label='Nơi đào tạo'
						name='M-traning_address'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={6} lg={4}>
					<CTextInput
						label='Chuyên ngành'
						name='M-speciality'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={12} lg={4}>
					<CTextInput
						label='Tên luận án tốt nghiệp'
						name='M-graduate_thesis_name'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>

			<hr className='border border-1 border-primary mt-1 mb-4' />

			<label className='fw-semibold form-label'>3. Bậc tiến sĩ</label>
			<Row>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker label='Bắt đầu' name='D-start_time' control={control} errors={errors} />
				</Col>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker label='Kết thúc' name='D-end_time' control={control} errors={errors} />
				</Col>
			</Row>
			<Row>
				<Col md={6} lg={4}>
					<CTextInput
						label='Nơi đào tạo'
						name='D-traning_address'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={6} lg={4}>
					<CTextInput
						label='Chuyên ngành'
						name='D-speciality'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={12} lg={4}>
					<CTextInput
						label='Tên luận án tốt nghiệp'
						name='D-graduate_thesis_name'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>

			<hr className='border border-1 border-primary mt-1 mb-4' />

			<label className='fw-semibold form-label'>4. Bậc Tiến sỹ Khoa học</label>
			<Row>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker label='Bắt đầu' name='D.S-start_time' control={control} errors={errors} />
				</Col>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker label='Kết thúc' name='D.S-end_time' control={control} errors={errors} />
				</Col>
			</Row>
			<Row>
				<Col md={6} lg={4}>
					<CTextInput
						label='Nơi đào tạo'
						name='D.S-traning_address'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={6} lg={4}>
					<CTextInput
						label='Chuyên ngành'
						name='D.S-speciality'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={12} lg={4}>
					<CTextInput
						label='Tên luận án tốt nghiệp'
						name='D.S-graduate_thesis_name'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>

			<hr className='border border-1 border-primary mt-1 mb-4' />

			<Button onClick={previousStep}>Previous</Button>
			<Button onClick={handleNextStep}>Next</Button>
		</div>
	)
}

MTrainingProcessForm.propTypes = {
	nextStep: PropTypes.func,
}
