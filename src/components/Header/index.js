import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Component } from 'react'
import { connect } from 'react-redux'
import { resetState } from '../../actions'


export class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#" onClick={() => this.props.resetState()}>Qcards</Navbar.Brand>    
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" onClick={() => this.props.resetState()}>Domov</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  resetState: () => dispatch(resetState())
})

export default connect(null, mapDispatchToProps)(Header)