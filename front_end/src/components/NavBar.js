import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function NavBar() {
  return (
      <Navbar bg="info" expand="lg">
          <Container fluid>
              <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                  >
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">Link</Nav.Link>
                      <NavDropdown title="Link" id="navbarScrollingDropdown">
                          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action4">
                              Another action
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action5">
                              Something else here
                          </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#" disabled>
                          Link
                      </Nav.Link>
                  </Nav>
              </Navbar.Collapse>
                </Container>
                <div className='container'>
                    <div >
                        <Form className="d-flex" >
                            <Form.Control
                                type='from'
                                placeholder='From'
                                className='me-2'
                                aria-label='From'
                            />
                            <Form.Control
                                type='to'
                                placeholder='To'
                                className='me-2'
                                aria-label='To'
                            />
                            <Form.Control
                                type='date'
                                placeholder='Departure Date'
                                className='me-2'
                                aria-label='date'
                            />
                            <Button type='submit' variant="outline-success">Search</Button>
                        </Form>
                    </div>
                </div>
      </Navbar>
    );
}   

export default NavBar