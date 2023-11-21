import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import React from "react";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const Alert = ({ visible, errorText }) => {
  return (
    <TaskAlert visible={visible}>
      <TextAlert>{errorText}</TextAlert>
    </TaskAlert>
  );
};
export default Alert;

const TaskAlert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 80px;
  left: 50%;
  width: 100%;
  max-width: 400px;
  padding: 10px 20px;
  gap: 10px;
  border-radius: 4px;
  transition: 0.5s;
  transform: translateX(-50%) translateY(-40px);
  opacity: 0;
  background: ${COLOR.RED};
  font-family: ${FONTFAMILY.NOTO_SANS};

  ${(props) =>
    props.visible
      ? `{ opacity: 1;
       transform: translateX(-50%) translateY(0) }`
      : ``}
`;

const TextAlert = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.S};
`;
