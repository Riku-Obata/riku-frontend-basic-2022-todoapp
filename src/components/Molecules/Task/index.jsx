import styled from "styled-components";
import React, { useState } from "react";
import Checkbox from "../../Atoms/Checkbox";
import EditButton from "../../Atoms/EditButton";
import Input from "../../Atoms/Input";

export const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName = "",
  defaultIsEditing = false,
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

const StyledWrapper = styled.div`
  display: flex;
  padding: 2px 6px;
  align-items: center;
  gap: 10px;
`;

const StyledCheckboxWrapper = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
`;

const StyledTaskName = styled.div`
  display: flex;
  padding: 0px 4px;
  flex-direction: column;
  flex: 1 0 0;
`;

const StyledEditButtonWrapper = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
`;
