import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const QuizResult = ({ quiz }) => {
    return (
        <>
            {quiz.map((item, index) =>
                <span key={index}>{item.userAnswer}</span>
            )}
            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    RESULT OF YOUR TEST
                </Typography>
                <List>
                    {quiz.map((question) => (
                        <ListItem>
                            <ListItemText>
                                {`for question num.${question.id + 1} your answer was ${question.userAnswer + 1} and ${question.indexOfCorrectAnswer === question.userAnswer ?
                                    "it was true"
                                    : "it was false"}`}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </>
    )
}

export default QuizResult