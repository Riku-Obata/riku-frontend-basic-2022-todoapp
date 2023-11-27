import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Task from "../../Molecules/Task";
import AddTaskButton from "../../Atoms/AddTaskButton";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import AlertManager from "../AlertManager";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

export const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);
  const AlertHandlerContext = useAlertHandlerContext();

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
      mappedOnTaskNameChange[index].initializing = false;
      setTaskList(mappedOnTaskNameChange);
    }
  };

  useEffect(() => {
    const storedTaskList = localStorage.getItem("taskList");
    if (storedTaskList !== null) {
      const parsedTaskList = JSON.parse(storedTaskList);
      setTaskList(parsedTaskList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
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
            <AlertManager />
          </TaskGap>
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;

const StyledWrapper = styled.div`
  padding: 20px;
  align-items: flex-start;
  border-radius: 4px;
  background-color: ${COLOR.LIGHT_BLACK};
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  box-sizing: border-box;
  font-family: ${FONTFAMILY.NOTO_SANS};
`;

const TaskGap = styled.div`
  margin-top: 10px;
`;
