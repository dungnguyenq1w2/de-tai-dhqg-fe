import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Container, Dropdown, Form, Nav, Navbar, NavDropdown, Offcanvas, Stack } from 'react-bootstrap'

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
							<Nav className='justify-content-end flex-grow-1 pe-3'>
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

								<NavDropdown title='Dropdown' id={`offcanvasNavbarDropdown-expand-md`}>
									<NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
									<NavDropdown.Item href='#action4'>Another action</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action5'>Something else here</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Form className='d-flex'>
								<Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' />
								<Button variant='outline-success'>Search</Button>
							</Form>
						</Offcanvas.Body>
					</Navbar.Offcanvas>

					<Stack direction='horizontal' gap={2}>
						<Dropdown>
							<Dropdown.Toggle as='span' variant='success' id='dropdown-basic' bsPrefix='none'>
								<i className='bi bi-person-circle ms-2' style={{ fontSize: '2.2rem' }} type='button' />
							</Dropdown.Toggle>

							<Dropdown.Menu align='end'>
								<div className='d-flex align-items-center px-3' style={{ minWidth: 300 }}>
									<i className='bi bi-person-circle me-3' style={{ fontSize: '2rem' }} />
									<div>
										<h6 className='mb-0'>Nguyễn Văn A</h6>
										<span className='fw-semibold' style={{ fontSize: 16, color: '#666666' }}>
											dungnguyenq1w2
											<wbr />
											@gmail.com
										</span>
									</div>
								</div>
								<Dropdown.Divider />

								<Dropdown.Item as='div'>
									<Link href='#'>
										<i className='bi bi-person-lines-fill me-2' style={{ fontSize: '1.5rem' }} />
										<span>Profile</span>
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

						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
					</Stack>
				</Container>
			</Navbar>
		</header>
	)
}

export default CHeader
