import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import React from "react";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";
import visible from "./index.stories";

export const Alert = () => {
  return <TaskAlert isActive={visible}>text</TaskAlert>;
};
export default Alert;

const TaskAlert = styled.div`
  visibility: ${(visible) => (visible.isActive ? visible : hidden)};
  display: flex;
  width: 400px;
  padding: 10px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  background: ${COLOR.RED};
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S};
`;
