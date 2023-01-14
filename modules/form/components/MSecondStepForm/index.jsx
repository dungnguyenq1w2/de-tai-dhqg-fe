import 'react-datepicker/dist/react-datepicker.css'

import PropTypes from 'prop-types'

export const MSecondStepForm = ({ register, errors, nextStep }) => {
	//#region Data

	//#endregion

	//#region Event

	//#endregion
	return (
		<div>
			<h4 className='text-center w-100'>Account</h4>

			<div className='mb-3'>
				<label className='form-label' htmlFor='account'>
					Account
				</label>
				<input
					type='account'
					id='account'
					className='form-control'
					{...register('account', {
						required: true,
					})}
				/>
				{errors.account && <p>Account is required</p>}
			</div>
			<div className='mb-3'>
				<label className='form-label' htmlFor='password'>
					Password
				</label>
				<input
					type='password'
					id='password'
					className='form-control'
					{...register('password', {
						required: true,
					})}
				/>
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
					{...register('confirmPassword', {
						required: true,
					})}
				/>
				{errors.confirmPassword && <p>Confirm password is required</p>}
			</div>
			<button onClick={nextStep}>sNext</button>
		</div>
	)
}

MSecondStepForm.propTypes = {
	nextStep: PropTypes.func,
}
