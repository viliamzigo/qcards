import { connect } from 'react-redux'
import Filter from '../components/Filter'
import { CategoryFilters, loadQuestions, getQuestion } from '../actions'

const mapStateToProps = state => ({
  categoryFilters: Object.keys(CategoryFilters),
  activeFilter: state.questions.category
})


const mapDispatchToProps = dispatch => ({
  loadQuestions: key => dispatch(loadQuestions(key)),
  getQuestion: () => dispatch(getQuestion()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
