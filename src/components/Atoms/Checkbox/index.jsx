import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import React from "react";
import COLOR from "../../../variables/color";

export const Checkbox = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <ImgCheck>
        <img src={check} className="checkSize" />
      </ImgCheck>
    </Button>
  );
};
export default Checkbox;

const Button = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  padding: 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: none;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  transition: 0.2s;
  cursor: pointer;

  :hover .checkSize {
    display: block;
  }
`;

const ImgCheck = styled.div`
  width: 17px;
  height: 17px;

  .checkSize {
    width: 17px;
    height: 17px;
    display: none;
  }
`;
