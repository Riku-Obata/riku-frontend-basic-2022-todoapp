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
    const copyOnTaskComplete = taskList.filter((element, idx) => index !== idx);
    setTaskList(copyOnTaskComplete);
  };

  const onTaskNameChange = (value, index) => {
    if (value === "") {
      const copyOnTaskNameChange = taskList.filter((_, idx) => idx !== index);
      setTaskList(copyOnTaskNameChange);
    } else {
      taskList[index].name = value;
    }
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskComplete={() => onTaskComplete(index)}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
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
