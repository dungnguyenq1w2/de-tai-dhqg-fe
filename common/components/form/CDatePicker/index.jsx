import { Controller } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'

import DatePicker from 'react-datepicker'
import { Form } from 'react-bootstrap'

export default function CDatePicker({ label, name, control, errors }) {
	return (
		<div>
			<Form.Group className='mb-3' controlId={name}>
				<Form.Label className='fw-semibold'>{label}</Form.Label>
				<Controller
					control={control}
					name={name}
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
				<ErrorMessage
					errors={errors}
					name={name}
					render={() => (
						<p className='text-danger p-1 mt-1' style={{ fontSize: '0.9rem' }}>
							{errors[name]?.message}
						</p>
					)}
				/>
			</Form.Group>
		</div>
	)
}
