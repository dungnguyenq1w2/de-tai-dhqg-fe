import 'react-datepicker/dist/react-datepicker.css'

import PropTypes from 'prop-types'

export const MExpenseAppendixForm = ({ register, errors, trigger, previousStep, nextStep }) => {
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
			<h4 className='text-center w-100'>Phụ lục giải trình các khoản chi</h4>

			<div className='mb-3'>
				<label className='form-label' htmlFor='address'>
					Address
				</label>
				<input type='address' id='address' className='form-control' {...register('address')} />
				{errors.address && <p>Address is required</p>}
			</div>

			<button onClick={previousStep}>Previous</button>
			<button onClick={handleNextStep}>Next</button>
		</div>
	)
}

MExpenseAppendixForm.propTypes = {
	onSaveData: PropTypes.func,
	nextStep: PropTypes.func,
}
