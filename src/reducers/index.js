import { combineReducers } from 'redux'

const questions = (state = { questions: [], active: null, category: null }, action) => {
    switch (action.type) {
        case 'LOAD_QUESTIONS':
            try {
                const state = require(`../database/${action.filter}.json`)
                return { ...state, category: action.filter, questions: state.map(q => ({ ...q, answered: false }))}
            } catch (e) {
                console.error(e)
                return state
            }
        case 'GET_RANDOM_QUESTION':
            const unanweredQuestions = state.questions.filter(q => !q.answered)
            if (unanweredQuestions.length === 0) {
                return { ...state, active: "OUT_OF_QUESTIONS"}
            }
            const randomIndex = Math.floor(Math.random()*unanweredQuestions.length)
            state.questions.find(q => q.question === unanweredQuestions[randomIndex].question).answered = true
            return { ...state, active: unanweredQuestions[randomIndex] }
        default:
            return state
    }
}

export default combineReducers({
    questions
})