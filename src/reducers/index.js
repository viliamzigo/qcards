import { combineReducers } from 'redux'

const questions = (state = { questions: [], active: null }, action) => {
    switch (action.type) {
        case 'LOAD_QUESTIONS':
            try {
                const state = require(`../database/${action.filter}.json`)
                return { ...state, questions: state.map(q => ({ ...q, answered: false }))}
            } catch (e) {
                console.error(e)
                return state
            }
        case 'GET_RANDOM_QUESTION':
            const unanweredQuestions = state.questions.filter(q => !q.answered)
            const randomIndex = Math.floor(Math.random()*unanweredQuestions.length)
            state.questions.find(q => q.question === unanweredQuestions[randomIndex].question).answered = true
            return { ...state, active: unanweredQuestions[randomIndex] }
        default:
            return state
    }
}

const categoryFilter = (state = '', action) => {
    switch (action.type) {
      case 'SET_CATEGORY_FILTER':
        return action.filter
      default:
        return state
    }
  }

export default combineReducers({
    categoryFilter,
    questions
})