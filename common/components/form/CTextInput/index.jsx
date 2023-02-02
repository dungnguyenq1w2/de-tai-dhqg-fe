import { Controller } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'

import { Form } from 'react-bootstrap'

export default function CTextInput({ label, name, type = 'text', placeholder, control, errors }) {
	return (
		<div>
			<Form.Group className='mb-3' controlId={name}>
				<Form.Label className='fw-semibold'>{label}</Form.Label>
				<Controller
					control={control}
					name={name}
					render={({ field: { onChange, value } }) => (
						<Form.Control
							type={type}
							name={name}
							placeholder={placeholder}
							onChange={onChange}
							value={value || ''}
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
