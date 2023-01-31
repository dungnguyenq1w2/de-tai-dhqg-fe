import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'

import CHeader from 'common/components/CHeader'

import { MForm } from 'modules/scientific-background/components'

import { SCIENTIFIC_BACKGROUND } from 'common/contanst'
import { initialValues } from 'modules/scientific-background/initialValues/form'
import { Container } from 'react-bootstrap'

export default function ScientificBackgroundEditPage() {
	//#region Data
	const router = useRouter()
	const [currentStep, setCurrentStep] = useState(0)
	const {
		control,
		handleSubmit,
		watch,
		trigger,
		formState: { errors, isDirty },
	} = useForm({ defaultValues: initialValues })
	// 	{
	//
	// }

	// const watchAllFields = watch()
	// console.log('🚀 ~ watchAllFields', watchAllFields)
	//#endregion

	//#region Event
	useEffect(() => {
		const exitingFunction = () => {
			if (isDirty) {
				const myConfirm = confirm('Dữ liệu chưa được lưu! Bạn muốn lưu không?')
				if (myConfirm) {
					// Call api
				} else {
					return
				}
			}
		}

		router.events.on('routeChangeStart', exitingFunction)

		return () => {
			router.events.off('routeChangeStart', exitingFunction)
		}
	}, [isDirty])

	const onSubmit = (data) => {
		console.log('🚀 ~ data', data)
	}

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
				<title>Cập nhật lý lịch</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<>
				<CHeader />
				<Container fluid='lg' className='py-5'>
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
					<MForm
						errors={errors}
						trigger={trigger}
						control={control}
						handleSubmit={handleSubmit(onSubmit)}
						step={currentStep}
						previousStep={previousStep}
						nextStep={nextStep}
					/>
				</Container>
			</>
		</div>
	)
}
