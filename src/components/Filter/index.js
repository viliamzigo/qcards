import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types'

function Filter({ categoryFilters, loadQuestions, getQuestion }) {

  const selectCategory = key => {
    loadQuestions(key)
    getQuestion()
  }

  return (
    <Container>
      <Row  className="justify-content-center">
        <Col className="w-75">
          <Card body>
            <Card.Title>Výber kategórie otázok</Card.Title>
            <Card.Text>
              Zvoľte kategóriu.
            </Card.Text>
            <ListGroup>
            {categoryFilters.map((category, index) => (  
              <ListGroup.Item action onClick={() => selectCategory(category)} key={index}>
                {category}
              </ListGroup.Item>
            ))}
              
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

Filter.propTypes = {
  categoryFilters: PropTypes.array.isRequired,
  loadQuestions: PropTypes.func.isRequired,
  getQuestion: PropTypes.func.isRequired
}

export default Filter;