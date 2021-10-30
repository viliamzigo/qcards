import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './index.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>© Copyright {year}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;