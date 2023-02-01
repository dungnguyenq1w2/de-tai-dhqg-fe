import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'

import CHeader from 'common/components/CHeader'

import { MDocument, MForm } from 'modules/scientific-background/components'

import { SCIENTIFIC_BACKGROUND } from 'common/contanst'
import { initialValues } from 'modules/scientific-background/initialValues/form'
import { Button, Container, Modal } from 'react-bootstrap'

export default function ScientificBackgroundEditPage() {
	//#region Data
	const router = useRouter()
	const [currentStep, setCurrentStep] = useState(0)
	const [show, setShow] = useState(false)

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

	const watchAllFields = watch()
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
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	//#endregion
	return (
		<div>
			<Head>
				<title>Cập nhật lý lịch</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<>
				<CHeader />
				<Link href='/scientific-background'>
					<div className='absolute top-5 left-5 flex cursor-pointer mt-4 ms-4'>
						<i className='bi bi-chevron-left'></i> Lý lịch
					</div>
				</Link>
				<Button onClick={handleShow}>Xem trước</Button>
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

					<Modal
						show={show}
						onHide={handleClose}
						size='xl'
						aria-labelledby='contained-modal-title-vcenter'
						centered
					>
						<Modal.Header closeButton>
							<Modal.Title>Lý lịch khoa học</Modal.Title>
						</Modal.Header>
						<Modal.Body className='overflow-auto' style={{ height: '75vh', minHeight: '75vh' }}>
							<MDocument data={watchAllFields} />
						</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</Container>
			</>
		</div>
	)
}
