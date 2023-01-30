import * as Yup from 'yup'

export const loginValidationSchema = Yup.object().shape({
	email: Yup.string().email('Email không hợp lệ').required('Hãy nhập email'),
	password: Yup.string().required('Hãy nhập mật khẩu').min(6, 'Mật khẩu phải trên 6 kí tự'),
})

export const resetPasswordValidationSchema = Yup.object().shape({
	newPassword: Yup.string().required('Hãy nhập mật khẩu').min(6, 'Mật khẩu phải trên 6 kí tự'),
	confirmPassword: Yup.string().required('Hãy nhập mật khẩu').min(6, 'Mật khẩu phải trên 6 kí tự'),
})

export const identifyValidationSchema = Yup.object().shape({
	email: Yup.string().email('Email không hợp lệ').required('Hãy nhập email'),
})

export const registerValidationSchema = Yup.object().shape({
	name: Yup.string().required('Hãy nhập họ tên'),
	email: Yup.string().email('Email không hợp lệ').required('Hãy nhập email'),
	password: Yup.string().required('Hãy nhập mật khẩu').min(6, 'Mật khẩu phải trên 6 kí tự'),
	confirmPassword: Yup.string()
		.required('Hãy nhập mật khẩu xác nhận')
		.oneOf([Yup.ref('password')], 'Mật khẩu xác nhận không khớp'),
})
