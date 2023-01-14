import styles from './style.module.scss'
import React from 'react'

import PropTypes from 'prop-types'
import { MFirstStepForm, MFormResult, MSecondStepForm, MThirdStepForm } from '..'
import { useForm } from 'react-hook-form'

export const MForm = ({ step, nextStep }) => {
	//#region Data
	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
		register,
	} = useForm({ mode: 'all' })
	const watchAllFields = watch()
	//#endregion

	//#region Event
	const onSubmit = (data) => {
		console.log(data)
	}
	//#endregion
	return (
		<div className={`${styles.form} shadow p-5`}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{step === 0 && (
					<MFirstStepForm
						register={register}
						errors={errors}
						control={control}
						nextStep={nextStep}
					/>
				)}
				{step === 1 && (
					<MSecondStepForm
						register={register}
						errors={errors}
						control={control}
						nextStep={nextStep}
					/>
				)}
				{step === 2 && (
					<MThirdStepForm
						register={register}
						errors={errors}
						control={control}
						nextStep={nextStep}
					/>
				)}
				{step === 3 && <MFormResult result={watchAllFields} />}
			</form>
		</div>
	)
}

MForm.propTypes = {
	step: PropTypes.number,
	onSaveData: PropTypes.func,
	nextStep: PropTypes.func,
}

MForm.defaultProps = {
	step: 0,
}
