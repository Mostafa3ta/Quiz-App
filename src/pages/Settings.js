import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useState } from 'react'
import SelectField from '../components/SelectField'
import SelectTextField from '../components/SelectTextField'
import useAxios from '../hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { amount_score } from '../redux/QuestionsSlice';

export default function Settings() {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  let navigate = useNavigate()
  const disptach = useDispatch();

  if (loading) {
    return (
      <Box mt={25}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography variant="h4" mt={20} color="red">
        Something Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = e => {
    disptach(amount_score(0));
    navigate('/questions')
  }
  
  return <>
    <Typography variant='h2' mb={5} fontWeight='bold'>Quiz App</Typography>

    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label='Category' />
      <SelectField options={difficultyOptions} label='Difficulty' />
      <SelectField options={typeOptions} label='Type' />
      <SelectTextField />
      <Box mt={3} width='100%' >
        <Button fullWidth variant='contained' type='submit'>
          GET STARTED
        </Button>
      </Box>
    </form>

  </>
}
