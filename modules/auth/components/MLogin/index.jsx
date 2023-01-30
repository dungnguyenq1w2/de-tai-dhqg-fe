import styles from 'modules/auth/assets/styles/index.module.scss'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import CLoading from 'common/components/CLoading'
import CTextInput from 'common/components/CTextInput'
import { loginValidationSchema } from 'modules/auth/validation'

import { Button } from 'react-bootstrap'

const formOptions = { resolver: yupResolver(loginValidationSchema) }

function MLogin() {
	// #region data
	const [loginError, setLoginError] = useState()
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm(formOptions)
	// #endregion

	// #region event
	useEffect(() => {
		if (localStorage.getItem('user')) router.push('/')
	}, [router])

	const onSubmit = async (data) => {
		console.log('🚀 ~ data', data)
		// setIsLoading(true)
		// const res = await login(data)
		// if (res?.data) {
		// 	setTimeout(() => {
		// 		setIsLoading(false)
		// 		if (flag) navigate('/')
		// 		else navigate(-1)
		// 	}, 600)
		// } else {
		// 	setLoginError(res.error.message)
		// 	setTimeout(() => {
		// 		setIsLoading(false)
		// 	}, 600)
		// }
	}
	// #endregion

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`${styles.form} bg-white p-4 shadow-sm rounded`}
			style={{ width: '25rem' }}
		>
			<Link href='/'>
				<span className='absolute top-5 left-5 flex cursor-pointer'>
					<i className='bi bi-chevron-left'></i> Trang chủ
				</span>
			</Link>
			<h5 className='text-center fw-semibold my-3'>ĐĂNG NHẬP</h5>
			<CTextInput label='Email' name='email' type='email' control={control} register={register} errors={errors} />
			<CTextInput
				label='Password'
				name='password'
				type='password'
				control={control}
				register={register}
				errors={errors}
			/>

			{loginError && (
				<p className='text-danger p-1 mt-1' style={{ fontSize: '0.9rem' }}>
					{loginError}
				</p>
			)}
			{isLoading && <CLoading />}

			<div className='d-grid'>
				<Button variant='primary' type='submit'>
					Đăng nhập
				</Button>
			</div>

			<div className={`${styles.form__bottom} text-center text-secondary'`}>
				<Link href='/auth/identify'>
					<span>Quên mật khẩu</span>
				</Link>{' '}
				/{' '}
				<Link href='/auth/register'>
					<span>Đăng kí</span>
				</Link>
			</div>
		</form>
	)
}

export default MLogin
