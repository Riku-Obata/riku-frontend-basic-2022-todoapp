import styled from "styled-components";
import React, { useState } from "react";
import Checkbox from "../../Atoms/Checkbox";
import EditButton from "../../Atoms/EditButton";
import Input from "../../Atoms/Input";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName,
  defaultIsEditing,
}) => {
  const [isEditing, useIsEditing] = useState(defaultIsEditing);
  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
        <script>
          if (isEditing === true)
          {<Input onEditComplete={onEditComplete} defaultValue={taskName} />}
          else
          {
            <StyledNameAndButtonWrapper>
              <StyledTaskName>{taskName}</StyledTaskName>
              <StyledEditButtonWrapper>
                <EditButton onClick={onEditButtonClick} />
              </StyledEditButtonWrapper>
            </StyledNameAndButtonWrapper>
          }
        </script>
      </StyledCheckboxWrapper>
    </StyledWrapper>
  );
};
export default Task;
