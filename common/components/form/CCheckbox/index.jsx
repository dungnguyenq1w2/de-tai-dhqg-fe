import { Controller } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'

import { Form } from 'react-bootstrap'

export default function CCheckbox({ label, name, options, control, errors }) {
	return (
		<div>
			<Form.Group className='mb-3' controlId={name}>
				<Form.Label className='fw-semibold me-3'>{label}</Form.Label>
				{options.map((option, index) => (
					<Controller
						key={index}
						control={control}
						name={name}
						render={({ field: { onChange } }) => (
							<Form.Check
								inline
								label={option}
								name={name}
								type='checkbox'
								id={`inline-checkbox-${index}`}
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
