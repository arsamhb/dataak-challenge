import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/system';

// IN ORDER TO HANDLE MUI OVERRIDING ON MY CSS IMPLEMENTED USING
// STYLED-COMPONENT I USED STYLE FROM MUI/SYSTEM
// BUT I USED STYLED-COMPONENT IN THE QuizResult COMPONENT AS YOU CAN SEE
const StyledFormControl = styled(FormControl)({
    backgroundColor: 'aliceblue',
    padding: "2rem",
    width: '80vw',
});
const StyledFormLabel = styled(FormLabel)({
    color: '#1976DB',
    fontSize: "24px",
    fontWeight: 700,
});
const StyledFormControlLabel = styled(FormControlLabel)({
    margin: '1rem',
    padding: '1rem',
    maxWidth: '80%',
    border: "1px solid black",
    borderRadius: "4px",
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
    },
})
const StyledRadio = styled(Radio)({
    display: 'none'
})

const SingleQuestion = ({ question, selectAnswer }) => {
    return (
        <StyledFormControl>
            <StyledFormLabel id={question.index}>{question.question}</StyledFormLabel>
            <RadioGroup
                aria-labelledby={question.question}
                name={`question number ${question.index} `}
            >
                {question.answers.map((answer, index) =>
                    <StyledFormControlLabel
                        key={index}
                        value={index}
                        control={<StyledRadio/>}
                        checked={question.userAnswer === index}
                        onChange={() => {
                            selectAnswer(index)
                        }}
                        label={answer} />
                )}
            </RadioGroup>
        </StyledFormControl>
    )
}

export default SingleQuestion