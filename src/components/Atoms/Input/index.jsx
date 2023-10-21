import styled from "styled-components";
import React, { useRef, useEffect } from "react";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const Input = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleChange = (e) => {};
  });

  return <StyledInput defaultValue={props.default} ref={inputRef} />;
};
export default Input;

const StyledInput = styled.input`
  width: 100%;
  height: 20px;
  padding: 0px 4px;
  background: ${COLOR.BLACK};
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S};
  border: 0;
  outline: none;
  border-radius: 2px;
`;
