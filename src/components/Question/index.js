import { useState } from 'react';
import './Question.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Question({ question, getQuestion, resetState }) {
  const [showAnswer, toggleAnswer] = useState(false);

  const nextQuestion = () => {
    toggleAnswer(false)
    getQuestion()
  }

  if (question ===  null) {
    return(<div/>);
  }

  let content, buttons;
  if (question === 'OUT_OF_QUESTIONS') {
    content = <Card.Title className="m-3">OUT_OF_QUESTIONS</Card.Title>
    buttons = <div />
  } else {
    content = <div className="question">
      <Card.Title className="m-3">{question.question}</Card.Title>
      {showAnswer && <Card.Text>{question.answer}</Card.Text>}
    </div>
    buttons = <div>
      {!showAnswer && <Button variant="warning" onClick={() => toggleAnswer(true)}>Zobraziť odpoveď</Button>}
      {showAnswer && <Button variant="success" onClick={() => nextQuestion()}>Ďalšia otázka</Button>}
    </div>
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="w-75">
          <Card body className="text-center">
            <Container fluid>
              <Row>
                <Col>
                  {content}
                </Col>
              </Row>

              <Row className="d-flex justify-content-end m-3">
                <Col>
                  {buttons}
                </Col>
              </Row>
              <Row className="m-3">
                <Col><Button variant="secondary" onClick={() => resetState()}>Späť na výber kategórie</Button></Col>
              </Row>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Question;