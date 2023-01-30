import PropTypes from 'prop-types'

export const MSecondStepForm = ({ register, errors, trigger, previousStep, nextStep }) => {
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
			<h4 className='text-center w-100'>Account</h4>

			<div className='mb-3'>
				<label className='form-label' htmlFor='account'>
					Account
				</label>
				<input type='account' id='account' className='form-control' {...register('account')} />
				{errors.account && <p>Account is required</p>}
			</div>
			<div className='mb-3'>
				<label className='form-label' htmlFor='password'>
					Password
				</label>
				<input type='password' id='password' className='form-control' {...register('password')} />
				{errors.password && <p>Password is required</p>}
			</div>
			<div className='mb-3'>
				<label className='form-label' htmlFor='confirmPassword'>
					Confirm password
				</label>
				<input
					type='confirmPassword'
					id='confirmPassword'
					className='form-control'
					{...register('confirmPassword')}
				/>
				{errors.confirmPassword && <p>Confirm password is required</p>}
			</div>
			<button onClick={previousStep}>Previous</button>
			<button onClick={handleNextStep}>Next</button>
		</div>
	)
}

MSecondStepForm.propTypes = {
	nextStep: PropTypes.func,
}
