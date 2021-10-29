import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
      <Navbar bg="dark" variant="dark" id="home">
        <Container>
          <Navbar.Brand href="#home">Qcards</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;