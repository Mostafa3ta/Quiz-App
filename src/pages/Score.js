import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { amount_of_question, amount_score, question_category, question_difficulty, question_type } from '../redux/QuestionsSlice';



export default function Score() {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const { score, amount_question } = useSelector((state) => state.Questions);

  const handleBackToSettings = () => {
    disptach(amount_score(0));
    disptach(amount_of_question(10));
    disptach(question_category(''));
    disptach(question_difficulty(''));
    disptach(question_type(''));
    navigate("/");
  };
  return <>
    <Box mt={20}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score
      </Typography>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        {score} / {amount_question}
      </Typography>
      <Button onClick={handleBackToSettings} color='success' variant="contained">
        back to settings
      </Button>
    </Box>
  </>
}
