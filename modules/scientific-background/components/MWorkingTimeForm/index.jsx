import { useFieldArray } from 'react-hook-form'

import { CDatePicker, CTextInput } from 'common/components/form'

import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

export const MWorkingTimeForm = ({ errors, trigger, control, previousStep, nextStep }) => {
	//#region Data
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'working_times',
	})
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
			<h4 className='text-center mb-4'>Quá trình công tác</h4>
			{fields?.map((item, index) => (
				<div key={item.id} className='position-relative'>
					<hr className='border border-1 border-primary my-1' />
					<span className='fw-semibold'>TT: {index + 1}</span>
					<Row>
						<Col xs={6} sm={4} md={3} lg={2}>
							<CDatePicker
								label='Bắt đầu'
								name={`working_times.${index}.start_time`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col xs={6} sm={4} md={3} lg={2}>
							<CDatePicker
								label='Kết thúc'
								name={`working_times.${index}.end_time`}
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>

					<Row>
						<Col xs={12} md={6} xl={4}>
							<CTextInput
								label='Trường/Viện'
								name={`working_times.${index}.institute`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col xs={12} md={6} xl={4}>
							<CTextInput
								label='Phòng/Khoa'
								name={`working_times.${index}.faculty`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col xs={12} md={6} xl={4}>
							<CTextInput
								label='Bộ môn'
								name={`working_times.${index}.department`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col xs={12} md={6} xl={4}>
							<CTextInput
								label='Phòng thì nghiệm'
								name={`working_times.${index}.lab`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col xs={12} md={6} xl={4}>
							<CTextInput
								label='Chức vụ'
								name={`working_times.${index}.position`}
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<OverlayTrigger
						key='top'
						placement='top'
						overlay={<Tooltip id='tooltip-top'>Xóa thời gian công tác</Tooltip>}
					>
						<i
							type='button'
							onClick={() => remove(index)}
							className='bi bi-x-circle fs-4 text-danger position-absolute top-0 end-0'
						></i>
					</OverlayTrigger>
				</div>
			))}
			<hr className='border border-1 border-primary mt-1 mb-1' />
			<div className='d-flex justify-content-center'>
				<OverlayTrigger
					key='top'
					placement='top'
					overlay={<Tooltip id='tooltip-top'>Thêm thời gian công tác</Tooltip>}
				>
					<i
						type='button'
						onClick={() => {
							append()
						}}
						className='bi bi-plus-circle text-primary fs-4'
					></i>
				</OverlayTrigger>
			</div>

			<Button onClick={previousStep}>Previous</Button>
			<Button onClick={handleNextStep}>Next</Button>
		</div>
	)
}
