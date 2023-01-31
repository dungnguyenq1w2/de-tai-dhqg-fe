import styles from './style.module.scss'

import { Button } from 'react-bootstrap'

import {
	MGeneralInfoForm,
	MOtherInfoForm,
	MResearchActivitiesForm,
	MScientificWorksForm,
	MTrainingProcessForm,
	MTraningActivitiesForm,
	MWorkingTimeForm,
} from '..'

export const MForm = ({ errors, trigger, control, handleSubmit, step, previousStep, nextStep }) => {
	//#region Data

	//#endregion
	return (
		<div className={`${styles.form} shadow p-5`}>
			<form onSubmit={handleSubmit}>
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
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 3 && (
					<MResearchActivitiesForm
						errors={errors}
						trigger={trigger}
						control={control}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				)}
				{step === 4 && (
					<MTraningActivitiesForm
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
