import styled from "styled-components";
import React, { useState } from "react";
import Checkbox from "../../Atoms/Checkbox";
import EditButton from "../../Atoms/EditButton";
import Input from "../../Atoms/Input";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
import COLOR from "../../../variables/color";
import AddTaskButton from "../../Atoms/AddTaskButton";

export const TodoCard = () => {
  const [taskList, setTaskLIst] = useState([]);

  const onAddTaskButtonClick = () => {
    setTaskLIst();
  };

  const onTaskComplete = (index) => {};

  const onTaskNameChange = (value, index) => {};

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList></StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;
