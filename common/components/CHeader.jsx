import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Container, Dropdown, Form, Nav, Navbar, NavDropdown, Offcanvas, Stack } from 'react-bootstrap'

const user = {
	id: 1,
	name: 'Nguyễn Văn A',
	email: 'nva@gmail.com',
}
// const user = null
function CHeader() {
	const router = useRouter()

	return (
		<header>
			<Navbar key='md' bg='light' expand='md' className='shadow-sm mb-1'>
				<Container fluid>
					<Link href='/'>
						<Navbar.Brand>Quản lí đề tài</Navbar.Brand>
					</Link>

					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-md`}
						aria-labelledby={`offcanvasNavbarLabel-expand-md`}
						placement='end'
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>Quản lí đề tài</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='justify-content-center flex-grow-1'>
								<Nav.Link as='span'>
									<Link
										className={`${router.pathname == '/sheet' ? 'text-primary' : ''}`}
										href='/sheet'
									>
										Sheet
									</Link>
								</Nav.Link>
								<Nav.Link as='span'>
									<Link
										className={`${router.pathname == '/document' ? 'text-primary' : ''}`}
										href='/document'
									>
										Document
									</Link>
								</Nav.Link>
								<Nav.Link as='span'>
									<Link
										className={`${router.pathname == '/form' ? 'text-primary' : ''}`}
										href='/form'
									>
										Form
									</Link>
								</Nav.Link>
								<Nav.Link as='span'>
									<Link
										className={`${
											router.pathname == '/subject-registration' ? 'text-primary' : ''
										}`}
										href='/subject-registration'
									>
										Đăng kí đề tài
									</Link>
								</Nav.Link>
								{/* <NavDropdown title='Dropdown' id={`offcanvasNavbarDropdown-expand-md`}>
									<NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
									<NavDropdown.Item href='#action4'>Another action</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action5'>Something else here</NavDropdown.Item>
								</NavDropdown> */}
							</Nav>
							{/* <Form className='d-flex'>
								<Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' />
								<Button variant='outline-success'>Search</Button>
							</Form> */}

							{!user && (
								<Stack direction='horizontal' gap={2} className='justify-content-center'>
									<Button variant='outline-primary'>
										<Link href='/auth/login'>Đăng nhập</Link>
									</Button>
									<Button variant='outline-warning'>
										<Link href='/auth/register'>Đăng kí</Link>
									</Button>
								</Stack>
							)}
						</Offcanvas.Body>
					</Navbar.Offcanvas>

					<Stack direction='horizontal' gap={2}>
						{user && (
							<Dropdown>
								<Dropdown.Toggle as='div' variant='success' id='dropdown-basic' bsPrefix='none'>
									<i className='bi bi-person-circle' style={{ fontSize: '1.7rem' }} type='button' />
								</Dropdown.Toggle>

								<Dropdown.Menu align='end'>
									<div className='d-flex align-items-center px-3' style={{ minWidth: 300 }}>
										<i className='bi bi-person-circle me-3' style={{ fontSize: '2rem' }} />
										<div>
											<h6 className='mb-0'>{user.name}</h6>
											<span className='fw-semibold' style={{ fontSize: 16, color: '#666666' }}>
												{user.email.split('@')[0]}
												<wbr />@{user.email.split('@')[1]}
											</span>
										</div>
									</div>
									<Dropdown.Divider />

									<Dropdown.Item as='div'>
										<Link href='/scientific-background'>
											<span className='d-flex align-items-center' type='button'>
												<i
													className='bi bi-person-lines-fill me-2'
													style={{ fontSize: '1.5rem' }}
												/>
												<span>Lý lịch khoa học</span>
											</span>
										</Link>
									</Dropdown.Item>

									<Dropdown.Divider />
									<Dropdown.Item as='div'>
										<span className='d-flex align-items-center' type='button'>
											<i className='bi bi-box-arrow-right me-2' style={{ fontSize: '1.5rem' }} />
											<span>Logout</span>
										</span>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						)}

						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
					</Stack>
				</Container>
			</Navbar>
		</header>
	)
}

export default CHeader
