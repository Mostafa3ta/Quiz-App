import { configureStore } from "@reduxjs/toolkit";
import { QuestionReducer } from "./QuestionsSlice";

export let store = configureStore({
    reducer: {
        Questions: QuestionReducer
    }
})