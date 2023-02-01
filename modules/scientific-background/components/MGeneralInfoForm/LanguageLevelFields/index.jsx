import { useFieldArray } from 'react-hook-form'

import { CSelect, CTextInput } from 'common/components/form'

import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

export default function LanguageLevelFields({ control, errors }) {
	//#region Data
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'general.language_levels',
	})
	//#endregion Data

	return (
		<>
			<label className='fw-semibold form-label' htmlFor='language_levels'>
				8. Trình độ ngoại ngữ
			</label>

			{fields?.map((item, index) => (
				<div key={item.id} className='position-relative'>
					<hr className='border border-1 border-primary my-1' />
					<span className='fw-semibold'>TT: {index + 1}</span>
					<Row>
						<CTextInput
							label='Tên ngoại ngữ'
							name={`general.language_levels.${index}.language_name`}
							type='text'
							control={control}
							errors={errors}
						/>
					</Row>
					<Row>
						<Col xs={6} lg={3}>
							<CSelect
								label='Nghe'
								name={`general.language_levels.${index}.listening`}
								options={[
									{ value: 'Tốt', label: 'Tốt' },
									{ value: 'Khá', label: 'Khá' },
									{ value: 'TB', label: 'TB' },
								]}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col xs={6} lg={3}>
							<CSelect
								label='Nói'
								name={`general.language_levels.${index}.speaking`}
								options={[
									{ value: 'Tốt', label: 'Tốt' },
									{ value: 'Khá', label: 'Khá' },
									{ value: 'TB', label: 'TB' },
								]}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col xs={6} lg={3}>
							<CSelect
								label='Viết'
								name={`general.language_levels.${index}.writing`}
								options={[
									{ value: 'Tốt', label: 'Tốt' },
									{ value: 'Khá', label: 'Khá' },
									{ value: 'TB', label: 'TB' },
								]}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col xs={6} lg={3}>
							<CSelect
								label='Đọc hiểu tài liệu'
								name={`general.language_levels.${index}.reading`}
								options={[
									{ value: 'Tốt', label: 'Tốt' },
									{ value: 'Khá', label: 'Khá' },
									{ value: 'TB', label: 'TB' },
								]}
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<OverlayTrigger
						key='top'
						placement='top'
						overlay={<Tooltip id='tooltip-top'>Xóa thông tin</Tooltip>}
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
				<OverlayTrigger key='top' placement='top' overlay={<Tooltip id='tooltip-top'>Thêm thông tin</Tooltip>}>
					<i
						type='button'
						onClick={() => {
							append()
						}}
						className='bi bi-plus-circle text-primary fs-4'
					></i>
				</OverlayTrigger>
			</div>
		</>
	)
}
