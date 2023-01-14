import CHeader from 'common/components/CHeader'
import { MFirstStepForm, MForm, MSecondStepForm, MThirdStepForm } from 'modules/form/components'
import Head from 'next/head'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function FormPage() {
	//#region Data
	const [currentStep, setCurrentStep] = useState(0)

	//#endregion

	//#region Event

	const handleStepChange = (step) => () => {
		setCurrentStep(step)
	}
	const nextStep = () => {
		setCurrentStep((cur) => cur + 1)
	}
	//#endregion
	return (
		<div>
			<Head>
				<title>Create Next App</title>
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
								role='button'
								className={`breadcrumb-item ${
									currentStep === 0 ? 'text-primary' : ''
								}`}
								onClick={handleStepChange(0)}
							>
								Step 1: Infomation
							</li>
							<li
								role='button'
								className={`breadcrumb-item ${
									currentStep === 1 ? 'text-primary' : ''
								}`}
								onClick={handleStepChange(1)}
							>
								Step 2: Account
							</li>
							<li
								role='button'
								className={`breadcrumb-item ${
									currentStep === 2 ? 'text-primary' : ''
								}`}
								onClick={handleStepChange(2)}
							>
								Step 3: Address
							</li>
						</ol>
					</nav>
					<MForm step={currentStep} nextStep={nextStep} />
				</div>
			</>
		</div>
	)
}
