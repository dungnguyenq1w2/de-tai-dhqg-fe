import 'react-datepicker/dist/react-datepicker.css'

import { CDatePicker, CRadio, CTextInput } from 'common/components/form'
import PropTypes from 'prop-types'

export const MGeneralInfoForm = ({ errors, trigger, control, nextStep }) => {
	//#region Data
	//#endregion

	//#region Event
	const handleNextStep = async () => {
		const isValid = await trigger(['name', 'email', 'dateOfBirth'])
		if (isValid) {
			nextStep()
		}
	}
	//#endregion
	return (
		<div>
			<h4 className='text-center'>Thông tin chung</h4>

			<CTextInput label='1. Họ và tên' name='name' type='text' control={control} errors={errors} />

			<CDatePicker label='2. Ngày sinh' name='date_of_birth' control={control} errors={errors} />

			<CRadio label='3. Giới tính' name='gender' options={['Nam', 'Nữ']} control={control} errors={errors} />

			<label className='fw-semibold form-label' htmlFor='current_working_address'>
				4. Nơi đang công tác
			</label>
			<CTextInput label='Trường/Viện' name='institute' type='text' control={control} errors={errors} />
			<CTextInput label='Phòng/Khoa' name='faculty' type='text' control={control} errors={errors} />
			<CTextInput label='Bộ môn' name='department' type='text' control={control} errors={errors} />
			<CTextInput label='Phòng thì nghiệm' name='lab' type='text' control={control} errors={errors} />
			<CTextInput label='Chức vụ' name='position' type='text' control={control} errors={errors} />

			<CTextInput label='5. Học vị' name='degree_level' type='text' control={control} errors={errors} />
			<CTextInput label='năm đạt' name='degree_level_year' type='text' control={control} errors={errors} />

			<CTextInput label='6. Học hàm' name='academic_rank' type='text' control={control} errors={errors} />
			<CTextInput label='năm phong' name='academic_rank_year' type='text' control={control} errors={errors} />

			<label className='fw-semibold form-label' htmlFor='contact'>
				7. Liên lạc
			</label>
			<CTextInput label='Địa chỉ' name='address' type='text' control={control} errors={errors} />
			<CTextInput label='Điện thoại/ fax' name='phone' type='text' control={control} errors={errors} />
			<CTextInput label='Email' name='email' type='email' control={control} errors={errors} />

			<label className='fw-semibold form-label' htmlFor='language_level'>
				8. Trình độ ngoại ngữ
			</label>
			<CTextInput label='Tên ngoại ngữ' name='language_name' type='text' control={control} errors={errors} />
			<CRadio label='Nghe' name='listening' options={['Tốt', 'Khá', 'TB']} control={control} errors={errors} />
			<CRadio label='Nói' name='speaking' options={['Tốt', 'Khá', 'TB']} control={control} errors={errors} />
			<CRadio label='Viết' name='writing' options={['Tốt', 'Khá', 'TB']} control={control} errors={errors} />
			<CRadio
				label='Đọc hiểu tài liệu'
				name='reading'
				options={['Tốt', 'Khá', 'TB']}
				control={control}
				errors={errors}
			/>
			<button onClick={handleNextStep}>Next</button>
		</div>
	)
}

MGeneralInfoForm.propTypes = {
	nextStep: PropTypes.func,
}
