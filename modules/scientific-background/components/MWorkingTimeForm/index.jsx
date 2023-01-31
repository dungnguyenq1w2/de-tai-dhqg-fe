import 'react-datepicker/dist/react-datepicker.css'

import PropTypes from 'prop-types'
import { CDatePicker, CTextInput } from 'common/components/form'

export const MWorkingTimeForm = ({ errors, trigger, control, previousStep, nextStep }) => {
	//#region Data

	//#endregion

	//#region Event
	const handleNextStep = async () => {
		const isValid = await trigger(['address'])
		if (isValid) {
			nextStep()
		}
	}
	//#endregion
	return (
		<div>
			<h4 className='text-center w-100'>Quá trình công tác</h4>

			<label className='fw-semibold form-label' htmlFor='current_working_address'>
				Thời gian công tác
			</label>

			<CDatePicker label='Bắt đầu' name='start_time' control={control} errors={errors} />
			<CDatePicker label='Kết thúc' name='end_time' control={control} errors={errors} />
			<CTextInput label='Trường/Viện' name='institute' type='text' control={control} errors={errors} />
			<CTextInput label='Phòng/Khoa' name='faculty' type='text' control={control} errors={errors} />
			<CTextInput label='Bộ môn' name='department' type='text' control={control} errors={errors} />
			<CTextInput label='Phòng thì nghiệm' name='lab' type='text' control={control} errors={errors} />
			<CTextInput label='Chức vụ' name='position' type='text' control={control} errors={errors} />

			<button onClick={previousStep}>Previous</button>
			<button onClick={handleNextStep}>Next</button>
		</div>
	)
}

MWorkingTimeForm.propTypes = {
	onSaveData: PropTypes.func,
	nextStep: PropTypes.func,
}
