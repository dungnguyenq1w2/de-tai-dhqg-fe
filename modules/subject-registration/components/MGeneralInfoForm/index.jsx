import 'react-datepicker/dist/react-datepicker.css'

import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import { Controller } from 'react-hook-form'

export const MGeneralInfoForm = ({ register, errors, trigger, control, nextStep }) => {
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
			<h4 className='text-center w-100'>Thông tin chung</h4>

			<div className='mb-3'>
				<label className='form-label' htmlFor='name'>
					Name
				</label>
				<input type='name' id='name' className='form-control' {...register('name')} />
				{errors.name && <p>Name is required</p>}
			</div>
			<div className='mb-3'>
				<label className='form-label' htmlFor='email'>
					Email
				</label>
				<input type='email' id='email' className='form-control' {...register('email')} />
				{errors.email && <p>Email is required</p>}
			</div>
			<div className='mb-3'>
				<label className='form-label' htmlFor='date-input'>
					Date of birth
				</label>
				<Controller
					control={control}
					name='dateOfBirth'
					rules={{ required: true }}
					defaultValue={new Date()}
					render={({ field }) => (
						<DatePicker
							dateFormat='dd/MM/yyyy'
							placeholderText='Select date'
							onChange={(date) => field.onChange(date)}
							selected={field.value}
						/>
					)}
				/>
				{errors.dateOfBirth && <p>Date of birth is required</p>}
			</div>
			<button onClick={handleNextStep}>Next</button>
		</div>
	)
}

MGeneralInfoForm.propTypes = {
	nextStep: PropTypes.func,
}
