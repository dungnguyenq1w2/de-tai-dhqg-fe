import InternationalBookFields from './InternationalBookFields'
import InternationalConferencePaperFields from './InternationalConferencePaperFields'
import InternationalPaperFields from './InternationalPaperFields'
import NationalBookFields from './NationalBookFields'
import NationalConferencePaperFields from './NationalConferencePaperFields'
import NationalPaperFields from './NationalPaperFields'

export const MScientificWorksForm = ({ errors, trigger, control, previousStep, nextStep }) => {
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

			<InternationalBookFields control={control} errors={errors} />

			<NationalBookFields control={control} errors={errors} />

			<label className='fw-semibold form-label d-block' htmlFor='paper'>
				2. Các bài báo
			</label>
			<InternationalPaperFields control={control} errors={errors} />

			<NationalPaperFields control={control} errors={errors} />

			<InternationalConferencePaperFields control={control} errors={errors} />

			<NationalConferencePaperFields control={control} errors={errors} />

			<button onClick={previousStep}>Previous</button>
			<button onClick={handleNextStep}>Next</button>
		</div>
	)
}
