import { createSlice } from "@reduxjs/toolkit";


const QuestionsSlice = createSlice({
    name: 'Questions_Slice',
    initialState: {
        question_category: "",
        question_difficulty: "",
        question_type: "",
        amount_question: 10,
        score: 0,
    },
    reducers: {
        question_category: (state, action) => {
            state.question_category = action.payload
        },
        question_difficulty: (state, action) => {
            state.question_difficulty = action.payload
        },
        question_type: (state, action) => {
            state.question_type = action.payload
        },
        amount_of_question: (state, action) => {
            if (action.payload <= 50) {
                state.amount_question = action.payload
            } else if (action.payload > 50) {
                state.amount_question = 50
            }else {
                state.amount_question = state.amount_question
            }
        },
        amount_score: (state, action) => {
            state.score = action.payload
        },
    }
})

export const QuestionReducer = QuestionsSlice.reducer;
export const { question_category, question_difficulty, question_type, amount_of_question, amount_score } = QuestionsSlice.actions;