import 'react-datepicker/dist/react-datepicker.css'

import { CDatePicker, CRadio, CTextInput } from 'common/components/form'
import PropTypes from 'prop-types'

export const MTraningActivitiesForm = ({ errors, trigger, control, previousStep, nextStep }) => {
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
			<h4 className='text-center w-100'>Hoạt động đạo tạo</h4>

			<CTextInput label='Tên SV, HVCH, NCS ' name='student_name' type='text' control={control} errors={errors} />
			<CTextInput label='Tên luận án' name='graduate_thesis_name' type='text' control={control} errors={errors} />
			<CDatePicker label='Năm tốt nghiệp' name='graduate_year' control={control} errors={errors} />
			<CRadio
				label='Bậc đào tạo'
				name='education_level'
				options={['Đại học', 'Thạc sỹ', 'Tiến sĩ']}
				control={control}
				errors={errors}
			/>
			<CTextInput
				label='Sản phẩm của đề tài/dự án (chỉ ghi mã số)'
				name='graduate_thesis_name'
				type='product_code'
				control={control}
				errors={errors}
			/>
			<button onClick={previousStep}>Previous</button>
			<button onClick={handleNextStep}>Next</button>
		</div>
	)
}

MTraningActivitiesForm.propTypes = {
	nextStep: PropTypes.func,
}
