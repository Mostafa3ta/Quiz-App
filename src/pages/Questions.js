import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { amount_score } from '../redux/QuestionsSlice';
import { decode } from 'html-entities';
import Error from '../components/Error';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export default function Questions() {
  let navigate = useNavigate()

  let {
    question_category,
    question_difficulty,
    question_type,
    amount_question,
    score,
  } = useSelector((state) => state.Questions);
  let dispatch = useDispatch();
  let apiUrl = `/api.php?`

  apiUrl = apiUrl.concat(`amount=${amount_question}`);

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl })
  const [questionIndex, setQuestion] = useState(0)
  const [options, setOptions] = useState([])
  console.log(options);
  console.log(response);
  console.log(apiUrl);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length + 1),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={25}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(amount_score(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestion(questionIndex + 1)
    } else {
      navigate(`/score`)
    }

  }

  return <>
    {response.results.length === 0 ? <Error /> : <>
      <Box>
        <Typography mb={3} variant='h4'>Question {questionIndex + 1}</Typography>
        <Typography mb={3} variant='h5'>{decode(response.results[questionIndex].question)}</Typography>
        {options.map((data, id) => (
          <Box mt={2} key={id}>
            <Button onClick={handleClickAnswer} variant="contained" fullWidth>
              {decode(data)}
            </Button>
          </Box>
        ))}
        <Box mt={5}>
          Score : {score} / {response.results.length}
        </Box>
      </Box>
    </>}

  </>
}
