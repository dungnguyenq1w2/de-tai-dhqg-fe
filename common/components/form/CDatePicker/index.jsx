import 'react-datepicker/dist/react-datepicker.css'
import styles from './style.module.scss'

import { Controller } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'

import ReactDatePicker from 'react-datepicker'
import { Form } from 'react-bootstrap'

export default function CDatePicker({ label, name, control, errors }) {
	return (
		<div className={`${styles.custom_react_datepicker}`}>
			<Form.Group className='mb-3' controlId={name}>
				<Form.Label className='fw-semibold'>{label}</Form.Label>
				<Controller
					control={control}
					name={name}
					render={({ field: { onChange, value } }) => (
						<ReactDatePicker onChange={onChange} selected={value} />
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
