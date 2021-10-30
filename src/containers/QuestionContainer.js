import { connect } from 'react-redux'
import Question from '../components/Question'
import { getQuestion, resetState } from '../actions'

const mapStateToProps = state => ({
  question: state.questions.active
})

const mapDispatchToProps = dispatch => ({
  getQuestion: () => dispatch(getQuestion()),
  resetState: () => dispatch(resetState())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)
