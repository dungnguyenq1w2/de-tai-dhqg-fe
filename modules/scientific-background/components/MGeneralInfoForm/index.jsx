import { CDatePicker, CSelect, CTextInput } from 'common/components/form'
import { Button, Col, Row } from 'react-bootstrap'
import LanguageLevelFields from './LanguageLevelFields'

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
				<Col md={6} lg={8}>
					<CTextInput label='1. Họ và tên' name='general.name' control={control} errors={errors} />
				</Col>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CDatePicker label='2. Ngày sinh' name='general.date_of_birth' control={control} errors={errors} />
				</Col>
				<Col xs={6} sm={4} md={3} lg={2}>
					<CSelect
						label='3. Giới tính'
						name='general.gender'
						options={[
							{ value: 'Nam', label: 'Nam' },
							{ value: 'Nữ', label: 'Nữ' },
						]}
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>

			<label className='fw-semibold form-label' htmlFor='current_working_address'>
				4. Nơi đang công tác
			</label>
			<Row>
				<Col md={6} xl={4}>
					<CTextInput
						label='Trường/Viện'
						name='general.current_working_address.institute'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={6} xl={4}>
					<CTextInput
						label='Phòng/Khoa'
						name='general.current_working_address.faculty'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={6} xl={4}>
					<CTextInput
						label='Bộ môn'
						name='general.current_working_address.department'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={6} xl={4}>
					<CTextInput
						label='Phòng thì nghiệm'
						name='general.current_working_address.lab'
						control={control}
						errors={errors}
					/>
				</Col>
				<Col md={6} xl={4}>
					<CTextInput
						label='Chức vụ'
						name='general.current_working_address.position'
						control={control}
						errors={errors}
					/>
				</Col>
			</Row>

			<Row>
				<Col>
					<CTextInput label='5. Học vị' name='general.degree_level' control={control} errors={errors} />
				</Col>
				<Col xs={4} md={2}>
					<CTextInput label='năm đạt' name='general.degree_level_year' control={control} errors={errors} />
				</Col>
				<Col sx={0} md={6}></Col>
			</Row>
			<Row>
				<Col>
					<CTextInput label='6. Học hàm' name='general.academic_rank' control={control} errors={errors} />
				</Col>
				<Col xs={4} md={2}>
					<CTextInput label='năm phong' name='general.academic_rank_year' control={control} errors={errors} />
				</Col>
				<Col sx={0} md={6}></Col>
			</Row>

			<label className='fw-semibold form-label' htmlFor='contact'>
				7. Liên lạc
			</label>
			<Row>
				<Col md={12}>
					<CTextInput label='Địa chỉ' name='general.address' control={control} errors={errors} />
				</Col>
				<Col md={6}>
					<CTextInput label='Điện thoại/ fax' name='general.phone' control={control} errors={errors} />
				</Col>
				<Col md={6}>
					<CTextInput label='Email' name='general.email' control={control} errors={errors} />
				</Col>
			</Row>

			<LanguageLevelFields control={control} errors={errors} />

			<Button onClick={handleNextStep}>Next</Button>
		</div>
	)
}
