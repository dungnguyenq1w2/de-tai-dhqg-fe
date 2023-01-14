import 'react-datepicker/dist/react-datepicker.css'

import PropTypes from 'prop-types'

export const MThirdStepForm = ({ register, errors, nextStep }) => {
	//#region Data

	//#endregion

	//#region Event

	//#endregion
	return (
		<div>
			<h4 className='text-center w-100'>Address</h4>

			<div className='mb-3'>
				<label className='form-label' htmlFor='address'>
					Address
				</label>
				<input
					type='address'
					id='address'
					className='form-control'
					{...register('address', {
						required: true,
					})}
				/>
				{errors.address && <p>Address is required</p>}
			</div>

			<button onClick={nextStep}>Next</button>
		</div>
	)
}

MThirdStepForm.propTypes = {
	onSaveData: PropTypes.func,
	nextStep: PropTypes.func,
}
