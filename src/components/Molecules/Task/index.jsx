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

  const onEditComplete = (value) => {
    useIsEditing(false);
    onTaskNameChange(value);
  };

  const onEditButtonClick = () => {
    useIsEditing(true);
  };
  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};
export default Task;

const StyledWrapper = styled.div``;
const StyledCheckboxWrapper = styled.div``;
const StyledNameAndButtonWrapper = styled.div``;
const StyledTaskName = styled.div``;
const StyledEditButtonWrapper = styled.div``;
