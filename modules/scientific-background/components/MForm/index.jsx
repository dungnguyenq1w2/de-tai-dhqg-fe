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
import { initialValues } from 'modules/scientific-background/initialValues/form'

export const MForm = ({ step, previousStep, nextStep }) => {
	//#region Data
	const {
		control,
		handleSubmit,
		watch,
		trigger,
		formState: { errors },
	} = useForm()
	// 	{
	// 	defaultValues: initialValues,
	// }

	//#region subcribe field array
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

	const internationalBookFields = useFieldArray({
		control,
		name: 'scientific_work.international_books',
	})
	const nationalBookFields = useFieldArray({
		control,
		name: 'scientific_work.national_books',
	})

	const internationalPaperFields = useFieldArray({
		control,
		name: 'scientific_work.international_papers',
	})
	const nationalPaperFields = useFieldArray({
		control,
		name: 'scientific_work.national_papers',
	})
	const internationalConferencePaperFields = useFieldArray({
		control,
		name: 'scientific_work.international_conference_papers',
	})

	const nationalConferencePaperFields = useFieldArray({
		control,
		name: 'scientific_work.national_conference_papers',
	})

	const joinedProgramFields = useFieldArray({
		control,
		name: 'other.joined_programs',
	})
	const joinedConferenceFields = useFieldArray({
		control,
		name: 'other.joined_conferences',
	})
	const joinedUniversityFields = useFieldArray({
		control,
		name: 'other.joined_universities',
	})

	//#endregion subcribe field array

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
						fields={workingTimeFields}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 3 && (
					<MResearchActivitiesForm
						fields={workingSubjectFields}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 4 && (
					<MTraningActivitiesForm
						fields={studentInstructionFields}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 5 && (
					<MScientificWorksForm
						internationalBookFields={internationalBookFields}
						nationalBookFields={nationalBookFields}
						internationalPaperFields={internationalPaperFields}
						nationalPaperFields={nationalPaperFields}
						internationalConferencePaperFields={internationalConferencePaperFields}
						nationalConferencePaperFields={nationalConferencePaperFields}
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 6 && (
					<MOtherInfoForm
						joinedProgramFields={joinedProgramFields}
						joinedConferenceFields={joinedConferenceFields}
						joinedUniversityFields={joinedUniversityFields}
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
