import { Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

import Select from 'react-select'

import { Form } from 'react-bootstrap'

export default function CSelect({ label, name, options, control, errors }) {
	return (
		<div>
			<Form.Group className='mb-3' controlId={name}>
				<Form.Label className='fw-semibold me-3'>{label}</Form.Label>
				<Controller
					control={control}
					defaultValue={undefined}
					name={name}
					render={({ field: { onChange, value } }) => (
						<Select
							instanceId={name}
							options={options}
							value={options.find((c) => c.value === value)}
							onChange={(val) => onChange(val.value)}
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
