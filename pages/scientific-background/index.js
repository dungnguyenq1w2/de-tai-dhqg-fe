import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

import CHeader from 'common/components/CHeader'
import { MForm } from 'modules/scientific-background/components'
import { SCIENTIFIC_BACKGROUND } from 'common/contanst'

export default function ScientificBackgroundPage() {
	//#region Data
	const router = useRouter()
	const [currentStep, setCurrentStep] = useState(0)

	//#endregion

	//#region Event

	const handleStepChange = (step) => () => {
		setCurrentStep(step)
	}
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
				<title>Quản lí đề tài</title>
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
							{SCIENTIFIC_BACKGROUND.map((tab) => (
								<li
									key={tab.index}
									className={`breadcrumb-item ${currentStep === tab.index ? 'text-primary' : ''}`}
									type='button'
									onClick={handleStepChange(tab.index)}
								>
									{tab.index + 1}. {tab.label}
								</li>
							))}
						</ol>
					</nav>
					<MForm step={currentStep} previousStep={previousStep} nextStep={nextStep} />
				</div>
			</>
		</div>
	)
}
