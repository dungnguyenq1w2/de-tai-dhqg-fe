import { CDatePicker, CTextInput } from 'common/components/form'
import PropTypes from 'prop-types'

export const MOtherInfoForm = ({ register, errors, trigger, control, nextStep }) => {
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
			<h4 className='text-center w-100'>Thông tin khác</h4>
			<label className='fw-semibold form-label d-block'>1. Tham gia các chương trình trong và ngoài nước</label>
			<CDatePicker label='Bắt đầu' name='start_time' control={control} errors={errors} />
			<CDatePicker label='Kết thúc' name='end_time' control={control} errors={errors} />
			<CTextInput label='Tên chương trình' name='name' type='text' control={control} errors={errors} />
			<CTextInput label='Chức danh' name='role' type='text' control={control} errors={errors} />
			<label className='fw-semibold form-label d-block'>
				2. Tham gia các Hiệp hội Khoa học, Ban biên tập các tạp chí Khoa học, Ban tổ chức các Hội nghị về KH&CN
			</label>
			<CDatePicker label='Bắt đầu' name='start_time' control={control} errors={errors} />
			<CDatePicker label='Kết thúc' name='end_time' control={control} errors={errors} />
			<CTextInput
				label='Tên Hiệp hội/Tạp chí/ Hội nghị'
				name='name'
				type='text'
				control={control}
				errors={errors}
			/>
			<CTextInput label='Chức danh' name='role' type='text' control={control} errors={errors} />
			<label className='fw-semibold form-label d-block'>
				3. Tham gia làm việc tại Trường Đại học/Viện/Trung tâm nghiên cứu theo lời mời
			</label>
			<CDatePicker label='Bắt đầu' name='start_time' control={control} errors={errors} />
			<CDatePicker label='Kết thúc' name='end_time' control={control} errors={errors} />
			<CTextInput
				label='Tên Trường Đại học/Viện/Trung tâm nghiên cứu'
				name='name'
				type='text'
				control={control}
				errors={errors}
			/>
			<CTextInput
				label='Nội dung tham gia'
				name='activity_detail'
				type='text'
				control={control}
				errors={errors}
			/>
			{/* <button onClick={handleNextStep}>Next</button> */}
		</div>
	)
}

MOtherInfoForm.propTypes = {
	nextStep: PropTypes.func,
}
