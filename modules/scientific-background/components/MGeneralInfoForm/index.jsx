import { CDatePicker, CRadio, CTextInput } from 'common/components/form'
import PropTypes from 'prop-types'
import { Button, Col, Row } from 'react-bootstrap'

export const MGeneralInfoForm = ({ errors, trigger, control, nextStep }) => {
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
			<h4 className='text-center mb-4'>Thông tin chung</h4>
			<Row>
				<Col xs={12} lg={6}>
					<CTextInput label='1. Họ và tên' name='name' type='text' control={control} errors={errors} />
				</Col>
				<Col xs={12} sm={4} lg={2}>
					<CDatePicker label='2. Ngày sinh' name='date_of_birth' control={control} errors={errors} />
				</Col>
				<Col xs={12} sm={8} lg={4}>
					<CRadio
						label='3. Giới tính'
						name='gender'
						options={['Nam', 'Nữ']}
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>

			<label className='fw-semibold form-label' htmlFor='current_working_address'>
				4. Nơi đang công tác
			</label>
			<Row>
				<Col xs={12} md={6} xl={4}>
					<CTextInput
						label='Trường/Viện'
						name='current_working_address.institute'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col xs={12} md={6} xl={4}>
					<CTextInput
						label='Phòng/Khoa'
						name='current_working_address.faculty'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col xs={12} md={6} xl={4}>
					<CTextInput
						label='Bộ môn'
						name='current_working_address.department'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col xs={12} md={6} xl={4}>
					<CTextInput
						label='Phòng thì nghiệm'
						name='current_working_address.lab'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col xs={12} md={6} xl={4}>
					<CTextInput
						label='Chức vụ'
						name='current_working_address.position'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>

			<Row>
				<Col>
					<CTextInput label='5. Học vị' name='degree_level' type='text' control={control} errors={errors} />
				</Col>
				<Col xs={4} md={2}>
					<CTextInput
						label='năm đạt'
						name='degree_level_year'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col sx={0} md={6}></Col>
			</Row>
			<Row>
				<Col>
					<CTextInput label='6. Học hàm' name='academic_rank' type='text' control={control} errors={errors} />
				</Col>
				<Col xs={4} md={2}>
					<CTextInput
						label='năm phong'
						name='academic_rank_year'
						type='text'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col sx={0} md={6}></Col>
			</Row>

			<label className='fw-semibold form-label' htmlFor='contact'>
				7. Liên lạc
			</label>
			<Row>
				<Col xs={12} md={12}>
					<CTextInput label='Địa chỉ' name='address' type='text' control={control} errors={errors} />
				</Col>
				<Col xs={12} md={6}>
					<CTextInput label='Điện thoại/ fax' name='phone' type='text' control={control} errors={errors} />
				</Col>
				<Col xs={12} md={6}>
					<CTextInput label='Email' name='email' type='email' control={control} errors={errors} />
				</Col>
			</Row>

			<label className='fw-semibold form-label' htmlFor='language_level'>
				8. Trình độ ngoại ngữ
			</label>
			<Row>
				<CTextInput label='Tên ngoại ngữ' name='language_name' type='text' control={control} errors={errors} />
			</Row>
			<Row>
				<Col xs={12} md={6}>
					<CRadio
						label='Nghe'
						name='listening'
						options={['Tốt', 'Khá', 'TB']}
						control={control}
						errors={errors}
					/>
				</Col>
				<Col xs={12} md={6}>
					<CRadio
						label='Nói'
						name='speaking'
						options={['Tốt', 'Khá', 'TB']}
						control={control}
						errors={errors}
					/>
				</Col>
				<Col xs={12} md={6}>
					<CRadio
						label='Viết'
						name='writing'
						options={['Tốt', 'Khá', 'TB']}
						control={control}
						errors={errors}
					/>
				</Col>
				<Col xs={12} md={6}>
					<CRadio
						label='Đọc hiểu tài liệu'
						name='reading'
						options={['Tốt', 'Khá', 'TB']}
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>
			<Row></Row>
			<Row></Row>

			<Button onClick={handleNextStep}>Next</Button>
		</div>
	)
}

MGeneralInfoForm.propTypes = {
	nextStep: PropTypes.func,
}
