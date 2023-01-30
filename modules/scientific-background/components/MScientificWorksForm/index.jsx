import 'react-datepicker/dist/react-datepicker.css'

import PropTypes from 'prop-types'
import { CDatePicker, CRadio, CTextInput } from 'common/components/form'

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
			<label className='fw-semibold form-label'>1.1. Sách xuất bản Quốc tế</label>
			<CTextInput label='Tên sách' name='name' type='text' control={control} errors={errors} />
			<CTextInput
				label='Sản phẩm của đề tài/dự án (chỉ ghi mã số)'
				name='subject_code'
				type='product_code'
				control={control}
				errors={errors}
			/>
			<CTextInput label='Nhà xuất bản' name='publisher' type='text' control={control} errors={errors} />
			<CDatePicker label='Năm xuất bản' name='published_year' control={control} errors={errors} />
			<CRadio
				label='Tác giả/đồng tác giả'
				name='role'
				options={['Tác giả', 'Đồng tác giả']}
				control={control}
				errors={errors}
			/>
			<CTextInput label='Bút danh' name='pen_name' type='text' control={control} errors={errors} />
			<label className='fw-semibold form-label'>1.2. Sách xuất bản trong nước</label>
			<CTextInput label='Tên sách' name='name' type='text' control={control} errors={errors} />
			<CTextInput
				label='Sản phẩm của đề tài/dự án (chỉ ghi mã số)'
				name='subject_code'
				type='product_code'
				control={control}
				errors={errors}
			/>
			<CTextInput label='Nhà xuất bản' name='publisher' type='text' control={control} errors={errors} />
			<CDatePicker label='Năm xuất bản' name='published_year' control={control} errors={errors} />
			<CRadio
				label='Tác giả/đồng tác giả'
				name='role'
				options={['Tác giả', 'Đồng tác giả']}
				control={control}
				errors={errors}
			/>
			<CTextInput label='Bút danh' name='pen_name' type='text' control={control} errors={errors} />

			<label className='fw-semibold form-label d-block' htmlFor='paper'>
				2. Các bài báo
			</label>
			<label className='fw-semibold form-label'>2.1. Đăng trên tạp chí Quốc tế</label>
			<CTextInput label='Tên tác giả' name='author' type='text' control={control} errors={errors} />
			<CTextInput label='Tên bài viết' name='name' type='text' control={control} errors={errors} />
			<CTextInput label='Tên tạp chí ' name='magazine_name' type='text' control={control} errors={errors} />
			<CTextInput label='Số của tạp chí' name='magazine_number' type='text' control={control} errors={errors} />
			<CTextInput
				label='Trang đăng bài viết'
				name='published_site'
				type='text'
				control={control}
				errors={errors}
			/>
			<CDatePicker label='Năm xuất bản' name='published_year' control={control} errors={errors} />
			<CTextInput
				label='Sản phẩm của đề tài/dự án (chỉ ghi mã số)'
				name='subject_code'
				type='text'
				control={control}
				errors={errors}
			/>
			<CTextInput
				label='Số hiệu ISSN (ghi rõ thuộc ISI hay không)'
				name='ISSN'
				type='text'
				control={control}
				errors={errors}
			/>
			<CTextInput label='Điểm IF' name='IF' type='text' control={control} errors={errors} />

			<label className='fw-semibold form-label'>2.2. Đăng trên tạp chí trong nước</label>
			<CTextInput label='Tên tác giả' name='author' type='text' control={control} errors={errors} />
			<CTextInput label='Tên bài viết' name='name' type='text' control={control} errors={errors} />
			<CTextInput label='Tên tạp chí ' name='magazine_name' type='text' control={control} errors={errors} />
			<CTextInput label='Số của tạp chí' name='magazine_number' type='text' control={control} errors={errors} />
			<CTextInput
				label='Trang đăng bài viết'
				name='published_site'
				type='text'
				control={control}
				errors={errors}
			/>
			<CDatePicker label='Năm xuất bản' name='published_year' control={control} errors={errors} />
			<CTextInput
				label='Sản phẩm của đề tài/dự án (chỉ ghi mã số)'
				name='subject_code'
				type='text'
				control={control}
				errors={errors}
			/>
			<CTextInput
				label='Số hiệu ISSN (ghi rõ thuộc ISI hay không)'
				name='ISSN'
				type='text'
				control={control}
				errors={errors}
			/>
			<CTextInput label='Ghi chú' name='note' type='text' control={control} errors={errors} />

			<label className='fw-semibold form-label'>2.3. Đăng trên kỷ yếu Hội nghị Quốc tế</label>
			<CTextInput label='Tên tác giả' name='author' type='text' control={control} errors={errors} />
			<CTextInput label='Tên bài viết' name='name' type='text' control={control} errors={errors} />
			<CTextInput label='Tên Hội nghị' name='conference_name' type='text' control={control} errors={errors} />
			<CDatePicker label='Thời gian tổ chức' name='hold_address' control={control} errors={errors} />
			<CTextInput label='Nơi tổ chức' name='hold_address' type='text' control={control} errors={errors} />
			<CTextInput
				label='Sản phẩm của đề tài/dự án (chỉ ghi mã số)'
				name='subject_code'
				type='text'
				control={control}
				errors={errors}
			/>
			<CTextInput
				label='Số hiệu ISBN (ghi rõ thuộc ISI hay không)'
				name='ISBN'
				type='text'
				control={control}
				errors={errors}
			/>
			<CTextInput label='Ghi chú' name='note' type='text' control={control} errors={errors} />

			<label className='fw-semibold form-label'>2.4. Đăng trên kỷ yếu Hội nghị trong nước</label>
			<CTextInput label='Tên tác giả' name='author' type='text' control={control} errors={errors} />
			<CTextInput label='Tên bài viết' name='name' type='text' control={control} errors={errors} />
			<CTextInput label='Tên Hội nghị' name='conference_name' type='text' control={control} errors={errors} />
			<CDatePicker label='Thời gian tổ chức' name='hold_address' control={control} errors={errors} />
			<CTextInput label='Nơi tổ chức' name='hold_address' type='text' control={control} errors={errors} />
			<CTextInput
				label='Sản phẩm của đề tài/dự án (chỉ ghi mã số)'
				name='subject_code'
				type='text'
				control={control}
				errors={errors}
			/>
			<CTextInput
				label='Số hiệu ISBN (ghi rõ thuộc ISI hay không)'
				name='ISBN'
				type='text'
				control={control}
				errors={errors}
			/>
			<CTextInput label='Ghi chú' name='note' type='text' control={control} errors={errors} />
			<button onClick={previousStep}>Previous</button>
			<button onClick={handleNextStep}>Next</button>
		</div>
	)
}

MScientificWorksForm.propTypes = {
	onSaveData: PropTypes.func,
	nextStep: PropTypes.func,
}
