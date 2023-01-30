import styles from './style.module.scss'

import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import {
	MGeneralInfoForm,
	MFormResult,
	MTrainingProcessForm,
	MWorkingTimeForm,
	MResearchActivitiesForm,
	MTraningActivitiesForm,
	MScientificWorksForm,
	MOtherInfoForm,
} from '..'

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
					<MGeneralInfoForm
						register={register}
						errors={errors}
						trigger={trigger}
						control={control}
						nextStep={nextStep}
					/>
				)}
				{step === 1 && (
					<MTrainingProcessForm
						register={register}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 2 && (
					<MWorkingTimeForm
						register={register}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 3 && (
					<MResearchActivitiesForm
						register={register}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 4 && (
					<MTraningActivitiesForm
						register={register}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 5 && (
					<MScientificWorksForm
						register={register}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 6 && (
					<MOtherInfoForm
						register={register}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{/* {step === 7 && <MFormResult result={watchAllFields} previousStep={previousStep} />} */}
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
