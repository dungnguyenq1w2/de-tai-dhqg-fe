import Link from 'next/link'
import { useRouter } from 'next/router'

function CHeader() {
	const router = useRouter()

	return (
		<header>
			{/* <nav className='navbar bg-body-tertiary sticky-top'>
				<div className='container-fluid'>
					<Link className='navbar-brand' href='/'>
						Quản lí đề tài
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='offcanvas'
						data-bs-target='#offcanvasNavbar'
						aria-controls='offcanvasNavbar'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='offcanvas offcanvas-end'
						tabIndex='-1'
						id='offcanvasNavbar'
						aria-labelledby='offcanvasNavbarLabel'
					>
						<div className='offcanvas-header'>
							<h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
								Quản lí đề tài
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='offcanvas'
								aria-label='Close'
							></button>
						</div>
						<div className='offcanvas-body'>
							<ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
								<li className='nav-item'>
									<span
										onClick={() => router.push('/sheet')}
										className={`nav-link ${
											router.pathname == '/sheet' ? 'active' : ''
										}`}
									>
										Sheet
									</span>
								</li>
								<li className='nav-item'>
									<span
										onClick={() => router.push('/document')}
										className={`nav-link ${
											router.pathname == '/document' ? 'active' : ''
										}`}
									>
										Document
									</span>
								</li>
								<li className='nav-item dropdown'>
									<a
										className='nav-link dropdown-toggle'
										href='#'
										role='button'
										data-bs-toggle='dropdown'
										aria-expanded='false'
									>
										Dropdown
									</a>
									<ul className='dropdown-menu'>
										<li>
											<a className='dropdown-item' href='#'>
												Action
											</a>
										</li>
										<li>
											<a className='dropdown-item' href='#'>
												Another action
											</a>
										</li>
										<li>
											<hr className='dropdown-divider' />
										</li>
										<li>
											<a className='dropdown-item' href='#'>
												Something else here
											</a>
										</li>
									</ul>
								</li>
							</ul>
							<form className='d-flex mt-3' role='search'>
								<input
									className='form-control me-2'
									type='search'
									placeholder='Search'
									aria-label='Search'
								/>
								<button className='btn btn-outline-success' type='submit'>
									Search
								</button>
							</form>
						</div>
					</div>
				</div>
			</nav>  */}
			<nav className='navbar bg-body-tertiary sticky-top shadow-sm'>
				<div className='container-fluid'>
					<Link className='navbar-brand' href='/'>
						Quản lí đề tài
					</Link>
					<div className='d-flex'>
						<div className='d-flex align-items-center justify-content-end me-3'>
							<div className='dropdown'>
								<i
									className='bi bi-person-circle'
									style={{ fontSize: '2.2rem' }}
									type='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								/>
								<ul
									className='dropdown-menu dropdown-menu-end m-0 p-0 py-2'
									style={{ minWidth: 300 }}
								>
									<div className='d-flex align-items-center px-3'>
										<i
											className='bi bi-person-circle me-3'
											style={{ fontSize: '2rem' }}
										/>
										<div>
											<h6 className='mb-0'>Nguyễn Văn A</h6>
											<span
												className='fw-semibold'
												style={{ fontSize: 16, color: '#666666' }}
											>
												dungnguyenq1w2
												<wbr />
												@gmail.com
											</span>
										</div>
									</div>
									<hr className='my-2' />
									<li>
										<a className='dropdown-item' href='#'>
											<i
												className='bi bi-person-lines-fill me-2'
												style={{ fontSize: '1.5rem' }}
											/>
											<span>Profile</span>
										</a>
									</li>
									<hr className='my-2' />
									<li>
										<span
											className='dropdown-item d-flex align-items-center'
											type='button'
										>
											<i
												className='bi bi-box-arrow-right me-2'
												style={{ fontSize: '1.5rem' }}
											/>
											<span>Logout</span>
										</span>
									</li>
								</ul>
							</div>
						</div>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='offcanvas'
							data-bs-target='#offcanvasNavbar'
							aria-controls='offcanvasNavbar'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
					</div>

					<div
						className='offcanvas offcanvas-end'
						tabIndex='-1'
						id='offcanvasNavbar'
						aria-labelledby='offcanvasNavbarLabel'
					>
						<div className='offcanvas-header'>
							<h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
								Quản lí đề tài
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='offcanvas'
								aria-label='Close'
							></button>
						</div>
						<div className='offcanvas-body'>
							<ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
								<li className='nav-item'>
									<a
										className={`nav-link ${
											router.pathname == '/sheet' ? 'active' : ''
										}`}
										href='/sheet'
									>
										Sheet
									</a>
								</li>
								<li className='nav-item'>
									<a
										className={`nav-link ${
											router.pathname == '/document' ? 'active' : ''
										}`}
										href='/document'
									>
										Document
									</a>
								</li>
								<li className='nav-item'>
									<a
										className={`nav-link ${
											router.pathname == '/form' ? 'active' : ''
										}`}
										href='/form'
									>
										Form
									</a>
								</li>
								<li className='nav-item dropdown'>
									<a
										className='nav-link dropdown-toggle'
										href='#'
										role='button'
										data-bs-toggle='dropdown'
										aria-expanded='false'
									>
										Dropdown
									</a>
									<ul className='dropdown-menu'>
										<li>
											<a className='dropdown-item' href='#'>
												Action
											</a>
										</li>
										<li>
											<a className='dropdown-item' href='#'>
												Another action
											</a>
										</li>
										<li>
											<hr className='dropdown-divider' />
										</li>
										<li>
											<a className='dropdown-item' href='#'>
												Something else here
											</a>
										</li>
									</ul>
								</li>
							</ul>
							<form className='d-flex mt-3' role='search'>
								<input
									className='form-control me-2'
									type='search'
									placeholder='Search'
									aria-label='Search'
								/>
								<button className='btn btn-outline-success' type='submit'>
									Search
								</button>
							</form>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default CHeader
