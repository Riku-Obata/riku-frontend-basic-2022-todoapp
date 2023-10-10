import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import React from "react";
import COLOR from "../../../variables/color";

export const Checkbox = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={check} className="imgCheck" />
    </Button>
  );
};
export default Checkbox;

const Button = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: none;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  transition: 0.2s;
  cursor: pointer;
`;
