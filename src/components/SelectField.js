import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { question_category, question_difficulty, question_type } from '../redux/QuestionsSlice'

export default function SelectField({ label, options }) {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
        switch (label) {
            case 'Category':
                dispatch(question_category(e.target.value))
                break;
            case 'Difficulty':
                dispatch(question_difficulty(e.target.value))
                break;
            case 'Type':
                dispatch(question_type(e.target.value))
                break;
            default:
                return;
        }
    }

    return <>
        <Box color={'white'} width='100%' mt={3}>
            <FormControl size='small' fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    {options.map(({ id, name }) => (
                        <MenuItem value={id} key={id}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    </>
}
