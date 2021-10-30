import { connect } from 'react-redux'
import Question from '../components/Question'
import { getQuestion } from '../actions'

const mapStateToProps = state => ({
  question: state.questions.active
})

const mapDispatchToProps = dispatch => ({
  getQuestion: () => dispatch(getQuestion()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)
