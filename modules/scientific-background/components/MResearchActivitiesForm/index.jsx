import 'react-datepicker/dist/react-datepicker.css'

import { CDatePicker, CTextInput } from 'common/components/form'
import PropTypes from 'prop-types'

export const MResearchActivitiesForm = ({ errors, trigger, control, previousStep, nextStep }) => {
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
			<h4 className='text-center w-100'>Hoạt động nghiên cứu</h4>

			<CTextInput label='Tên đề tài/dự án' name='name' type='text' control={control} errors={errors} />
			<CTextInput label='Mã số' name='subject_code' type='text' control={control} errors={errors} />
			<CTextInput label='Cấp quản lý' name='supervisor_level' type='text' control={control} errors={errors} />
			<CDatePicker label='Bắt đầu' name='start_time' control={control} errors={errors} />
			<CDatePicker label='Kết thúc' name='end_time' control={control} errors={errors} />
			<CTextInput
				label='Kinh phí (triệu đồng)'
				name='total_expense'
				type='text'
				control={control}
				errors={errors}
			/>
			<CTextInput label='Chủ nhiệm/Tham gia' name='role' type='text' control={control} errors={errors} />

			<CDatePicker label='Ngày nghiệm thu' name='acceptance_time' control={control} errors={errors} />
			<CTextInput label='Kết quả' name='result' type='text' control={control} errors={errors} />
			<button onClick={previousStep}>Previous</button>
			<button onClick={handleNextStep}>Next</button>
		</div>
	)
}

MResearchActivitiesForm.propTypes = {
	nextStep: PropTypes.func,
}
