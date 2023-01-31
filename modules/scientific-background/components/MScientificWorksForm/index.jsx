import InternationalBookFields from './InternationalBookFields'
import InternationalConferencePaperFields from './InternationalConferencePaperFields'
import InternationalPaperFields from './InternationalPaperFields'
import NationalBookFields from './NationalBookFields'
import NationalConferencePaperFields from './NationalConferencePaperFields'
import NationalPaperFields from './NationalPaperFields'

export const MScientificWorksForm = ({
	internationalBookFields,
	nationalBookFields,
	internationalPaperFields,
	nationalPaperFields,
	internationalConferencePaperFields,
	nationalConferencePaperFields,
	errors,
	trigger,
	control,
	previousStep,
	nextStep,
}) => {
	//#region Data

	//#endregion

	//#region Event
	const handleNextStep = async () => {
		const isValid = await trigger(['address'])
		if (isValid) {
			nextStep()
		}
	}
	//#endregion
	return (
		<div>
			<h4 className='text-center'>Công trình khoa học</h4>
			<label className='fw-semibold form-label d-block' htmlFor='book'>
				1. Sách
			</label>

			<InternationalBookFields
				internationalBookFields={internationalBookFields}
				control={control}
				errors={errors}
			/>

			<NationalBookFields nationalBookFields={nationalBookFields} control={control} errors={errors} />

			<label className='fw-semibold form-label d-block' htmlFor='paper'>
				2. Các bài báo
			</label>
			<InternationalPaperFields
				internationalPaperFields={internationalPaperFields}
				control={control}
				errors={errors}
			/>

			<NationalPaperFields nationalPaperFields={nationalPaperFields} control={control} errors={errors} />

			<InternationalConferencePaperFields
				internationalConferencePaperFields={internationalConferencePaperFields}
				control={control}
				errors={errors}
			/>

			<NationalConferencePaperFields
				nationalConferencePaperFields={nationalConferencePaperFields}
				control={control}
				errors={errors}
			/>

			<button onClick={previousStep}>Previous</button>
			<button onClick={handleNextStep}>Next</button>
		</div>
	)
}
