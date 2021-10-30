export const loadQuestions = filter => ({
    type: 'LOAD_QUESTIONS',
    filter
})

export const getQuestion = () => ({
    type: 'GET_RANDOM_QUESTION'
})

export const resetState = () => ({
    type: 'RESET_STATE'
})

export const CategoryFilters = {
    EFM: 'EFM',
    EN: 'EN'
}
