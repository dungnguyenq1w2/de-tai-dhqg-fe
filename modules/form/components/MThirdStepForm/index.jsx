

import PropTypes from 'prop-types'

export const MThirdStepForm = ({ register, errors, trigger, previousStep, nextStep }) => {
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
			<h4 className='text-center w-100'>Address</h4>

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

MThirdStepForm.propTypes = {
	onSaveData: PropTypes.func,
	nextStep: PropTypes.func,
}
