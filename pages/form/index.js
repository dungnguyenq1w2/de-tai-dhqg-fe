import { useState } from 'react'
import Head from 'next/head'
import CHeader from 'common/components/CHeader'
import { MForm } from 'modules/form/components'

export default function FormPage() {
	//#region Data
	const [currentStep, setCurrentStep] = useState(0)

	//#endregion

	//#region Event

	// const handleStepChange = (step) => () => {
	// 	setCurrentStep(step)
	// }
	const previousStep = () => {
		setCurrentStep((cur) => cur - 1)
	}
	const nextStep = () => {
		setCurrentStep((cur) => cur + 1)
	}
	//#endregion
	return (
		<div>
			<Head>
				<title>Form</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<>
				<CHeader />
				<div className='container-md py-5 '>
					<nav
						style={{
							'--bs-breadcrumb-divider': '">"',
						}}
						aria-label='breadcrumb'
					>
						<ol className='breadcrumb'>
							<li
								className={`breadcrumb-item ${
									currentStep === 0 ? 'text-primary' : ''
								}`}
								// onClick={handleStepChange(0)}
							>
								Step 1: Infomation
							</li>
							<li
								className={`breadcrumb-item ${
									currentStep === 1 ? 'text-primary' : ''
								}`}
								// onClick={handleStepChange(1)}
							>
								Step 2: Account
							</li>
							<li
								className={`breadcrumb-item ${
									currentStep === 2 ? 'text-primary' : ''
								}`}
								// onClick={handleStepChange(2)}
							>
								Step 3: Address
							</li>
							<li
								className={`breadcrumb-item ${
									currentStep === 3 ? 'text-primary' : ''
								}`}
								// onClick={handleStepChange(2)}
							>
								Submit
							</li>
						</ol>
					</nav>
					<MForm step={currentStep} previousStep={previousStep} nextStep={nextStep} />
				</div>
			</>
		</div>
	)
}
