import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg";
import React from "react";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const AddTaskButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={plus} className="img-plus" />
      <div className="task">タスクを追加</div>
    </Button>
  );
};
export default AddTaskButton;

const Button = styled.button`
  display: flex;
  padding: 2px 6px;
  align-items: center;
  gap: 10px;
  border: 0;
  color: ${COLOR.GREEN};
  background: none;
  transition: 0.2s;
  border-radius: 12px;

  .task {
    font-family: ${FONTFAMILY.NOTO_SANS};
    ${TEXT.S};
  }

  .img-plus {
    width: 20px;
    height: 20px;
  }

  :hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
    cursor: pointer;
  }
`;
