import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import React from "react";
import COLOR from "../../../variables/color";

export const Alert = () => {
  return <TaskAlert isActive={true}>text</TaskAlert>;
};
export default Alert;

const TaskAlert = styled.div`
  visibility: ${(props) => (props.isActive ? true : false)};
  display: flex;
  width: 400px;
  padding: 10px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  background: ${COLOR.RED};
`;
