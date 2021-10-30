import { connect } from 'react-redux'
import Question from '../components/Question'

const mapStateToProps = state => ({
  question: state.questions.active
})

export default connect(
  mapStateToProps
)(Question)
