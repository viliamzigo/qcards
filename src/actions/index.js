export const setCategotyFilter = filter => ({
    type: 'SET_CATEGORY_FILTER',
    filter
  })

export const loadQuestions = filter => ({
    type: 'LOAD_QUESTIONS',
    filter
})

export const getQuestion = () => ({
    type: 'GET_RANDOM_QUESTION'
})

export const CategoryFilters = {
    EFM: 'EFM',
    EN: 'EN'
  }
