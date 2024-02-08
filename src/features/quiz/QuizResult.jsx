import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import ListItemText from '@mui/material/ListItemText';

const StyledListItemText = styled(ListItemText)`
  color: ${(props) => (props.isCorrect ? 'green' : 'red')};
  border: 1px solid ${(props) => (props.isCorrect ? 'green' : 'red')};
  padding: 14px;
  border-radius: 4px;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  color: #BF4F74;
`;

const StyledGrid = styled(Grid)`
  padding: 18px;
`;

const QuizResult = ({ quiz }) => {
    return (
        <StyledGrid>
            <StyledTypography variant="h2">
                RESULT OF YOUR TEST
            </StyledTypography>
            <List>
                {quiz.map((question) => (
                    <ListItem key={question.id}>
                        <StyledListItemText
                            isCorrect={question.indexOfCorrectAnswer === question.userAnswer}
                            primary={`For question number "${question.id + 1}-${question.question}" your answer was "${question.userAnswer + 1}-${question.answers[question.userAnswer]}" and ${question.indexOfCorrectAnswer === question.userAnswer ? "it was TRUE" : "it was FALSE"}`}
                        />
                    </ListItem>
                ))}
            </List>
        </StyledGrid>
    )
}

export default QuizResult