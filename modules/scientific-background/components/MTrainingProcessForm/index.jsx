import 'react-datepicker/dist/react-datepicker.css'

import PropTypes from 'prop-types'
import { CDatePicker, CTextInput } from 'common/components/form'

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
			<h4 className='text-center'>Quá trình đạo tạo</h4>

			<label className='fw-semibold form-label'>1. Bậc đại học</label>
			<CDatePicker label='Bắt đầu' name='start_time' control={control} errors={errors} />
			<CDatePicker label='Kết thúc' name='end_time' control={control} errors={errors} />
			<CTextInput label='Nơi đào tạo' name='traning_address' type='text' control={control} errors={errors} />
			<CTextInput label='Chuyên ngành' name='speciality' type='text' control={control} errors={errors} />
			<CTextInput
				label='Tên luận án tốt nghiệp'
				name='graduate_thesis_name'
				type='text'
				control={control}
				errors={errors}
			/>

			<label className='fw-semibold form-label'>2. Bậc thạc sĩ</label>
			<CDatePicker label='Bắt đầu' name='start_time' control={control} errors={errors} />
			<CDatePicker label='Kết thúc' name='end_time' control={control} errors={errors} />
			<CTextInput label='Nơi đào tạo' name='traning_address' type='text' control={control} errors={errors} />
			<CTextInput label='Chuyên ngành' name='speciality' type='text' control={control} errors={errors} />
			<CTextInput
				label='Tên luận án tốt nghiệp'
				name='graduate_thesis_name'
				type='text'
				control={control}
				errors={errors}
			/>

			<label className='fw-semibold form-label'>3. Bậc tiến sĩ</label>
			<CDatePicker label='Bắt đầu' name='start_time' control={control} errors={errors} />
			<CDatePicker label='Kết thúc' name='end_time' control={control} errors={errors} />
			<CTextInput label='Nơi đào tạo' name='traning_address' type='text' control={control} errors={errors} />
			<CTextInput label='Chuyên ngành' name='speciality' type='text' control={control} errors={errors} />
			<CTextInput
				label='Tên luận án tốt nghiệp'
				name='graduate_thesis_name'
				type='text'
				control={control}
				errors={errors}
			/>

			<label className='fw-semibold form-label'>4. Bậc Tiến sỹ Khoa học</label>
			<CDatePicker label='Bắt đầu' name='start_time' control={control} errors={errors} />
			<CDatePicker label='Kết thúc' name='end_time' control={control} errors={errors} />
			<CTextInput label='Nơi đào tạo' name='traning_address' type='text' control={control} errors={errors} />
			<CTextInput label='Chuyên ngành' name='speciality' type='text' control={control} errors={errors} />
			<CTextInput
				label='Tên luận án tốt nghiệp'
				name='graduate_thesis_name'
				type='text'
				control={control}
				errors={errors}
			/>

			<button onClick={previousStep}>Previous</button>
			<button onClick={handleNextStep}>Next</button>
		</div>
	)
}

MTrainingProcessForm.propTypes = {
	nextStep: PropTypes.func,
}
