import Head from 'next/head'
import CHeader from '../../common/components/CHeader'

export default function Doc() {
	return (
		<div>
			<Head>
				<title>Document</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<>
				<CHeader />
				<div className='d-flex justify-content-center align-items-center'>
					<button
						type='button'
						className='btn btn-primary'
						data-bs-toggle='modal'
						data-bs-target='#exampleModal'
					>
						Launch demo modal
					</button>

					<div
						className='modal fade'
						id='exampleModal'
						tabIndex='-1'
						aria-labelledby='exampleModalLabel'
						aria-hidden='true'
					>
						<div className='modal-dialog'>
							<div className='modal-content'>
								<div className='modal-header'>
									<h5 className='modal-title' id='exampleModalLabel'>
										Modal title
									</h5>
									<button
										type='button'
										className='btn-close'
										data-bs-dismiss='modal'
										aria-label='Close'
									></button>
								</div>
								<div className='modal-body'>
									<h1>Body modal</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='dropdown m-3'>
					<button
						className='btn btn-secondary dropdown-toggle'
						type='button'
						data-bs-toggle='dropdown'
						id='dropdownMenuButton1'
						aria-expanded='false'
					>
						Dropdown button
					</button>
					<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
						<li>
							<a className='dropdown-item' href='#'>
								Option 1
							</a>
						</li>
						<li>
							<a className='dropdown-item' href='#'>
								Option 2
							</a>
						</li>
						<li>
							<a className='dropdown-item' href='#'>
								Option 3
							</a>
						</li>
					</ul>
				</div>
			</>
		</div>
	)
}
