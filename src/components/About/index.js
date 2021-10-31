import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <Container>
      <Row  className="justify-content-center">
        <Col className="w-75">
          <Card body>
            <Card.Title>Informácie</Card.Title>
            <Card.Text>
              Táto aplikácia je voľnočasovým projektom študentov pre zefektívnenie učenia rôznych oblastí, hlavne jazykov a ako výpomoc pri štúdiu EFM na fakultu matematiky, fyziky a informatiky Univerzity Komenského. Vaše návrhy, či pripomienky môžete zadávať cez <a href="https://github.com/viliamzigo/qcards/issues" target="_blank" rel="noreferrer">github issues</a>.
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;