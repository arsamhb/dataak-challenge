import React, { useState } from "react";
import styled from 'styled-components';

const BOX_BORDER_RADIUS = "4px";
const CONTENT_TRANSITION_DURATION = "1s";
const CONTENT_FONT_SIZE = "16px";
const CONTENT_FONT_SIZE_HIDDEN = "0px";

const Box = styled.div`
  background-color: ${props => props.isOpen ? 'lightgreen' : ''};
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  border-radius: ${BOX_BORDER_RADIUS};
  cursor: pointer;
  transition: all ${CONTENT_TRANSITION_DURATION} ease;
`;

const Content = styled.p`
  margin: 0;
  padding: 0;
  transition: all ${CONTENT_TRANSITION_DURATION} ease;
  font-size: ${props => props.isOpen ? CONTENT_FONT_SIZE : CONTENT_FONT_SIZE_HIDDEN};
  opacity: ${props => props.isOpen ? "1" : "0"};
`;

const ToggleBox = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box
            isOpen={isOpen}
            onClick={() => setIsOpen(prev => !prev)}
        >
            <h4>{title}</h4>
            <Content isOpen={isOpen}>
                {content}
            </Content>
        </Box>
    );
};

export default ToggleBox;
