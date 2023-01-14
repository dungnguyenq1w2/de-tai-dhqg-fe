import 'react-datepicker/dist/react-datepicker.css'

import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import { Controller } from 'react-hook-form'

export const MFirstStepForm = ({ register, errors, control, nextStep }) => {
	//#region Data
	//#endregion

	//#region Event

	//#endregion
	return (
		<div>
			<h4 className='text-center w-100'>Information</h4>

			<div className='mb-3'>
				<label className='form-label' htmlFor='name'>
					Name
				</label>
				<input
					type='name'
					id='name'
					className='form-control'
					{...register('name', {
						required: true,
					})}
				/>
				{errors.name && <p>Name is required</p>}
			</div>
			<div className='mb-3'>
				<label className='form-label' htmlFor='email'>
					Email
				</label>
				<input
					type='email'
					id='email'
					className='form-control'
					{...register('email', {
						required: true,
					})}
				/>
				{errors.email && <p>Email is required</p>}
			</div>
			<div className='mb-3'>
				<label className='form-label' htmlFor='date-input'>
					Date of birth
				</label>
				<Controller
					control={control}
					name='date-input'
					required={true}
					render={({ field }) => (
						<DatePicker
							dateFormat='dd/MM/yyyy'
							placeholderText='Select date'
							onChange={(date) => field.onChange(date)}
							selected={field.value}
						/>
					)}
				/>
				{errors['date-input'] && <p>date-input is required</p>}
			</div>
			<button onClick={nextStep}>Next</button>
		</div>
	)
}

MFirstStepForm.propTypes = {
	nextStep: PropTypes.func,
}
