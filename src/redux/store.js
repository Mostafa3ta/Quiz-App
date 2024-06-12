import { configureStore } from "@reduxjs/toolkit";
import { QuestionReducer } from "./QuestionsSlice";

export const store = configureStore({
    reducer: {
        Questions: QuestionReducer
    }
})