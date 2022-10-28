import './NavBar.css';
import Logo from './Logo.png'
import CartWidjet from './CartWidjet.js';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <>
        <Container>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#"><img
              src={Logo}
              width="90"
              height="40"
              className="d-inline align-top"
              alt="logo"
            /></Navbar.Brand>
          <Nav className="mt-auto justify-content-end">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#features">PRODUCTOS</Nav.Link>
            <Nav.Link href="#pricing">CONTACTO</Nav.Link>
            <Nav.Link href="#"><CartWidjet /> </Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </Container>
    </>
  )
}

export default NavBar
