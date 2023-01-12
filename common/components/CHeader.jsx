import React from 'react'

function CHeader() {
	return (
		<div>
			<nav className='navbar navbar-light bg-light sticky-top'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='#'>
						Quản lí đề tài
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='offcanvas'
						data-bs-target='#offcanvasLightNavbar'
						aria-controls='offcanvasLightNavbar'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='offcanvas offcanvas-start text-bg-light'
						tabIndex='-1'
						id='offcanvasLightNavbar'
						aria-labelledby='offcanvasLightNavbarLabel'
					>
						<div className='offcanvas-header'>
							<h5 className='offcanvas-title' id='offcanvasLightNavbarLabel'>
								Light offcanvas
							</h5>
							<button
								type='button'
								className='btn-close btn-close-black'
								data-bs-dismiss='offcanvas'
								aria-label='Close'
							></button>
						</div>
						<div className='offcanvas-body'>
							<ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
								<li className='nav-item'>
									<a className='nav-link active' aria-current='page' href='#'>
										Home
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										Link
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
									<ul className='dropdown-menu dropdown-menu-light'>
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
								<button className='btn btn-success' type='submit'>
									Search
								</button>
							</form>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default CHeader
