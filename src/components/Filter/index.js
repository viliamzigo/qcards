import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Col';
import PropTypes from 'prop-types'

function Filter({ categoryFilters, setCategotyFilter, loadQuestions, getQuestion }) {
  const selectCategory = key => {
    setCategotyFilter(key)
    loadQuestions(key)
    getQuestion()
  }

  return (
    <Container>
      <Row  className="justify-content-center">
        <Col className="w-75">
          <Card>
              {categoryFilters}
              <button onClick={() => selectCategory('EN')}>EN</button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

Filter.propTypes = {
  categoryFilters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setCategotyFilter: PropTypes.func.isRequired
}

export default Filter;