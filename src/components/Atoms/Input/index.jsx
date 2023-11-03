import styled from "styled-components";
import React, { useRef, useEffect } from "react";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

export const Input = ({ onEditComplete, defaultValue }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = defaultValue;

    inputRef.current.focus();
    inputRef.current.onblur = (e) => {
      onEditComplete(e.target.value);
    };

    inputRef.current.onkeydown = (e) => {
      if (e.key === "Enter") {
        onEditComplete(e.target.value);
      }
    };
  }, []);

  return <StyledInput ref={inputRef} type="text" />;
};
export default Input;

const StyledInput = styled.input`
  width: 100%;
  padding: 0px 4px;
  background: ${COLOR.BLACK};
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S};
  font-family: ${FONTFAMILY.NOTO_SANS};
  border: none;
  outline: none;
  border-radius: 2px;
`;
