import JoinedConferenceFields from './JoinedConferenceFields'
import JoinedProgramFields from './JoinedProgramFields'
import JoinedUniversityFields from './JoinedUniversityFields'

export const MOtherInfoForm = ({ errors, trigger, control, nextStep }) => {
	//#region Data
	//#endregion

	//#region Event
	const handleNextStep = async () => {
		const isValid = await trigger(['name', 'email', 'dateOfBirth'])
		if (isValid) {
			nextStep()
		}
	}
	//#endregion
	return (
		<div>
			<h4 className='text-center mb-4'>Thông tin khác</h4>

			<JoinedProgramFields control={control} errors={errors} />
			<JoinedConferenceFields control={control} errors={errors} />
			<JoinedUniversityFields control={control} errors={errors} />

			{/* <button onClick={handleNextStep}>Next</button> */}
		</div>
	)
}
