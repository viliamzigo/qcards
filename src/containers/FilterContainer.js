import { connect } from 'react-redux'
import Filter from '../components/Filter'
import { CategoryFilters, setCategotyFilter, loadQuestions, getQuestion } from '../actions'

const mapStateToProps = state => ({
  categoryFilters: Object.keys(CategoryFilters)
})


const mapDispatchToProps = dispatch => ({
  setCategotyFilter: key => dispatch(setCategotyFilter(key)),
  loadQuestions: key => dispatch(loadQuestions(key)),
  getQuestion: () => dispatch(getQuestion()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
