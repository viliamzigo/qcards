import './Question.css';

function Question({ question }) {
    return (
      <div>
          {question.question}
      </div>
    );
  }
  
  export default Question;