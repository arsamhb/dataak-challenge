import React, { useEffect } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const SingleQuestion = ({ question, selectAnswer }) => {

    return (
        <FormControl>
            <FormLabel id={question.question}>{question.question}</FormLabel>
            <RadioGroup
                aria-labelledby={question.question}
                defaultValue={undefined}
                name={`question number ${question.id}`}
            >
                {question.answers.map((answer, index) =>
                    <FormControlLabel
                        key={index}
                        value={index}
                        control={<Radio
                            checked={false}
                            onChange={() => {
                                selectAnswer(index)
                            }}
                        />}
                        label={answer} />
                )}
            </RadioGroup>
        </FormControl>
    )
}

export default SingleQuestion