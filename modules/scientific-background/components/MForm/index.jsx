import styles from './style.module.scss'

import PropTypes from 'prop-types'
import { useFieldArray, useForm } from 'react-hook-form'
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
import { Button } from 'react-bootstrap'

export const MForm = ({ step, previousStep, nextStep }) => {
	//#region Data
	const {
		control,
		handleSubmit,
		watch,
		trigger,
		formState: { errors },
		register,
	} = useForm({
		defaultValues: {
			working_times: [
				{
					dummy: null,
				},
			],
			worked_subjects: [
				{
					dummy: null,
				},
			],
			student_instructions: [
				{
					dummy: null,
				},
			],
		},
	})

	const workingTimeFields = useFieldArray({
		control,
		name: 'working_times',
	})
	const workingSubjectFields = useFieldArray({
		control,
		name: 'worked_subjects',
	})
	const studentInstructionFields = useFieldArray({
		control,
		name: 'student_instructions',
	})

	// const watchAllFields = watch()
	// console.log('🚀 ~ watchAllFields', watchAllFields)
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
					<MGeneralInfoForm errors={errors} trigger={trigger} control={control} nextStep={nextStep} />
				)}
				{step === 1 && (
					<MTrainingProcessForm
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 2 && (
					<MWorkingTimeForm
						fieldArray={workingTimeFields}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 3 && (
					<MResearchActivitiesForm
						fieldArray={workingSubjectFields}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 4 && (
					<MTraningActivitiesForm
						fieldArray={studentInstructionFields}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 5 && (
					<MScientificWorksForm
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 6 && (
					<MOtherInfoForm
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{/* {step === 7 && <MFormResult result={watchAllFields} previousStep={previousStep} />} */}
				<Button type='submit'>Lưu</Button>
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
