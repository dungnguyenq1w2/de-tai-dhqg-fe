import styles from './style.module.scss'

import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { MFirstStepForm, MFormResult, MSecondStepForm, MThirdStepForm } from '..'

export const MForm = ({ step, previousStep, nextStep }) => {
	//#region Data
	const {
		control,
		handleSubmit,
		watch,
		trigger,
		formState: { errors },
		register,
	} = useForm({ mode: 'all' })
	const watchAllFields = watch()
	//#endregion

	//#region Event
	const onSubmit = (data) => {
		console.log('🚀 ~ data', data)
	}

	//#endregion
	return (
		<div className={`${styles.form} shadow p-5`}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{step === 0 && (
					<MFirstStepForm
						register={register}
						errors={errors}
						trigger={trigger}
						control={control}
						nextStep={nextStep}
					/>
				)}
				{step === 1 && (
					<MSecondStepForm
						register={register}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 2 && (
					<MThirdStepForm
						register={register}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 3 && <MFormResult result={watchAllFields} previousStep={previousStep} />}
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
