import { useFieldArray } from 'react-hook-form'

import { CDatePicker, CTextInput } from 'common/components/form'

import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

export const MResearchActivitiesForm = ({ errors, trigger, control, previousStep, nextStep }) => {
	//#region Data
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'worked_subjects',
	})
	//#endregion Data

	//#region Event
	const handleNextStep = async () => {
		const isValid = await trigger(['name', 'email', 'dateOfBirth'])
		if (isValid) {
			nextStep()
		}
	}
	//#endregion Event
	return (
		<div>
			<h4 className='text-center mb-4'>Hoạt động nghiên cứu</h4>
			{fields?.map((item, index) => (
				<div key={item.id} className='position-relative'>
					<hr className='border border-1 border-primary my-1' />
					<span className='fw-semibold'>TT: {index + 1}</span>
					<Row>
						<Col md={12} lg={6}>
							<CTextInput
								label='Tên đề tài/dự án'
								name={`worked_subjects.${index}.name`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={6} lg={3}>
							<CTextInput
								label='Mã số'
								name={`worked_subjects.${index}.subject_code`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={6} lg={3}>
							<CTextInput
								label='Cấp quản lý'
								name={`worked_subjects.${index}.supervisor_level`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={6} sm={4} md={3} lg={2}>
							<CDatePicker
								label='Bắt đầu'
								name={`worked_subjects.${index}.start_time`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col xs={6} sm={4} md={3} lg={2}>
							<CDatePicker
								label='Kết thúc'
								name={`worked_subjects.${index}.end_time`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col xs={6} sm={4} md={3} lg={2}>
							<CDatePicker
								label='Nghiệm thu'
								name={`worked_subjects.${index}.acceptance_time`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col sm={6} lg={3}>
							<CTextInput
								label='Kinh phí (triệu đồng)'
								name={`worked_subjects.${index}.total_expense`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
						<Col sm={6} lg={3}>
							<CTextInput
								label='Chủ nhiệm/Tham gia'
								name={`worked_subjects.${index}.role`}
								type='text'
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<Row>
						<CTextInput
							label='Kết quả'
							name={`worked_subjects.${index}.result`}
							type='text'
							control={control}
							errors={errors}
						/>
					</Row>
					<OverlayTrigger
						key='top'
						placement='top'
						overlay={<Tooltip id='tooltip-top'>Xóa đề tài/dự án</Tooltip>}
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
					overlay={<Tooltip id='tooltip-top'>Thêm đề tài/dự án</Tooltip>}
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
