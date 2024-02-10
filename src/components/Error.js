import { Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { amount_of_question, amount_score, question_category, question_difficulty, question_type } from '../redux/QuestionsSlice';

export default function Error() {
    const disptach = useDispatch();
    const navigate = useNavigate();

    const handleBackToSettings = () => {
        disptach(amount_score(0));
        disptach(amount_of_question(10));
        disptach(question_category(''));
        disptach(question_difficulty(''));
        disptach(question_type(''));
        navigate("/");
    };
    return <>
        <Typography variant="h4" mt={20} mb={2} color="red">
            Sorry Something Went Wrong
        </Typography>
        <Typography variant="h5" mb={10} color="red">
            Try Different Settings
        </Typography>
        <Button onClick={handleBackToSettings} variant="contained">
            back to settings
        </Button>
    </>
}
