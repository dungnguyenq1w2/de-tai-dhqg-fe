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
					<CDatePicker
						label='Bắt đầu'
						name='training_process.b.start_time'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker
						label='Kết thúc'
						name='training_process.b.end_time'
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>
			<Row>
				<Col md={6} lg={4}>
					<CTextInput
						label='Nơi đào tạo'
						name='training_process.b.traning_address'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={6} lg={4}>
					<CTextInput
						label='Chuyên ngành'
						name='training_process.b.speciality'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={12} lg={4}>
					<CTextInput
						label='Tên luận án tốt nghiệp'
						name='training_process.b.graduate_thesis_name'
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>

			<hr className='border border-1 border-primary mt-1 mb-4' />

			<label className='fw-semibold form-label'>2. Bậc thạc sĩ</label>
			<Row>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker
						label='Bắt đầu'
						name='training_process.m.start_time'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker
						label='Kết thúc'
						name='training_process.m.end_time'
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>
			<Row>
				<Col md={6} lg={4}>
					<CTextInput
						label='Nơi đào tạo'
						name='training_process.m.traning_address'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={6} lg={4}>
					<CTextInput
						label='Chuyên ngành'
						name='training_process.m.speciality'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={12} lg={4}>
					<CTextInput
						label='Tên luận án tốt nghiệp'
						name='training_process.m.graduate_thesis_name'
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>

			<hr className='border border-1 border-primary mt-1 mb-4' />

			<label className='fw-semibold form-label'>3. Bậc tiến sĩ</label>
			<Row>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker
						label='Bắt đầu'
						name='training_process.d.start_time'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker
						label='Kết thúc'
						name='training_process.d.end_time'
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>
			<Row>
				<Col md={6} lg={4}>
					<CTextInput
						label='Nơi đào tạo'
						name='training_process.d.traning_address'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={6} lg={4}>
					<CTextInput
						label='Chuyên ngành'
						name='training_process.d.speciality'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={12} lg={4}>
					<CTextInput
						label='Tên luận án tốt nghiệp'
						name='training_process.d.graduate_thesis_name'
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>

			<hr className='border border-1 border-primary mt-1 mb-4' />

			<label className='fw-semibold form-label'>4. Bậc Tiến sỹ Khoa học</label>
			<Row>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker
						label='Bắt đầu'
						name='training_process.ds.start_time'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker
						label='Kết thúc'
						name='training_process.ds.end_time'
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>
			<Row>
				<Col md={6} lg={4}>
					<CTextInput
						label='Nơi đào tạo'
						name='training_process.ds.traning_address'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={6} lg={4}>
					<CTextInput
						label='Chuyên ngành'
						name='training_process.ds.speciality'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={12} lg={4}>
					<CTextInput
						label='Tên luận án tốt nghiệp'
						name='training_process.ds.graduate_thesis_name'
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
