import styled from "styled-components";
import React, { useState } from "react";
import Task from "../../Molecules/Task";
import AddTaskButton from "../../Atoms/AddTaskButton";

export const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = (index) => {
    setTaskList(taskList.filter(index));
  };

  const onTaskNameChange = (value, index) => {
    if (value === "") {
      setTaskList(taskList.filter(index));
    } else value !== "";
    {
      setTaskList(taskList.map(index));
    }
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskComplete={onTaskComplete(index)}
            onTaskNameChange={onTaskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;

const StyledWrapper = styled.div``;
const StyledTaskList = styled.div``;
