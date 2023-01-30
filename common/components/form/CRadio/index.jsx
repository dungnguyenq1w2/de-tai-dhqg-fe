import { Controller } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'

import { Form } from 'react-bootstrap'

export default function CRadio({ label, name, options, control, errors }) {
	return (
		<div>
			<Form.Group className='mb-3' controlId={name}>
				<Form.Label className='fw-semibold me-3'>{label}</Form.Label>
				{options.map((option, index) => (
					<Controller
						key={index}
						control={control}
						name={name}
						render={({ field: { onChange, value } }) => (
							<Form.Check
								inline
								value={option}
								label={option}
								name={name}
								type='radio'
								onChange={onChange}
								checked={value === option}
								id={`inline-radio-${name}-${option}`}
							/>
						)}
					/>
				))}
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
