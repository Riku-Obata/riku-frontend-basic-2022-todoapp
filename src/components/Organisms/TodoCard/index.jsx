import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Task from "../../Molecules/Task";
import AddTaskButton from "../../Atoms/AddTaskButton";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";

export const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = (index) => {
    const filteredTasklist = taskList.filter((element, idx) => index !== idx);
    setTaskList(filteredTasklist);
  };

  const onTaskNameChange = (value, index) => {
    if (value === "") {
      const filteredOnTaskNameChange = taskList.filter(
        (_, idx) => idx !== index
      );
      setTaskList(filteredOnTaskNameChange);
    } else {
      const mappedOnTaskNameChange = [...taskList];
      mappedOnTaskNameChange[index].name = value;
      setTaskList(mappedOnTaskNameChange);
    }
  };

  useEffect(() => {
    const takeData = localStorage.getItem("taskList");
    if (takeData !== null) {
      const takeTaskList = JSON.parse(takeData);
      setTaskList(takeTaskList);
    }
  }, []);

  useEffect(() => {
    const storeTask = localStorage.setItem("taskList");
  }, [taskList]);

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <TaskGap>
            <Task
              key={index}
              onTaskComplete={() => onTaskComplete(index)}
              onTaskNameChange={(value) => onTaskNameChange(value, index)}
              taskName={task.name}
              defaultIsEditing={task.initializing}
            />
          </TaskGap>
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;

const StyledWrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  background-color: ${COLOR.LIGHT_BLACK};
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  font-family: ${FONTFAMILY.NOTO_SANS};
`;

const TaskGap = styled.div`
  margin-top: 10px;
`;
