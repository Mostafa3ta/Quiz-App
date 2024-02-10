import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { amount_of_question } from '../redux/QuestionsSlice'

export default function SelectTextField() {

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(amount_of_question(e.target.value));
  }

  return <>
    <Box mt={3} width='100%'>
      <FormControl fullWidth size='small'>
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Amount of Questions"
          type="number"
          size="small">
        </TextField>
      </FormControl>
    </Box>
  </>
}
