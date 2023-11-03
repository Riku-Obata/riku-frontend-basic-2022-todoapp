import styled from "styled-components";
import React from "react";
import { Title } from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";

export const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <StyledWrapperTodoCard>
        <TodoCard />
      </StyledWrapperTodoCard>
    </StyledWrapper>
  );
};
export default MainPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StyledWrapperTodoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;
