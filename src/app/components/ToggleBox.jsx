import React, { ReactNode, useEffect, useState } from "react";
import styled from 'styled-components';

const CustomToggleBox = styled('div')`
  background-color: ${(props) => (props.boxStatus ? 'lightgreen' : '')};
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 1s ease;
`;

const SmoothParagraph = styled('p')`
  margin:0;
  padding:0;
  transition: all 1s ease;
  font-size: ${(props) => (props.boxStatus ? "16px" : "0px")};
  opacity: ${(props) => (props.boxStatus ? "1" : "0")};
`;

const ClickToShowBox = ({ title, content }) => {
    const [isExtended, setIsExtended] = useState(false);
    return (
        <CustomToggleBox
            boxStatus={isExtended}
            onClick={() => setIsExtended((prev) => !prev)}
        >
            <h4>
                {title}
            </h4>
            <SmoothParagraph boxStatus={isExtended}>
                {content}
            </SmoothParagraph>
        </CustomToggleBox>
    );
};

export default ClickToShowBox;
