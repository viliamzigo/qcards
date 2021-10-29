import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './index.css';

function Header() {
  const year = new Date().getFullYear();
  return (
    <div class="footer">
      <Container>
        <Row>
          <Col>© Copyright {year}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;