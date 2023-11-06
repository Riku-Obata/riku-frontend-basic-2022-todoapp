import styled from "styled-components";
import React from "react";
import { Title } from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";
import BREAKPOINT from "../../../variables/breakpoint";

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

  @media screen and (min-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 60px;
  }
`;

const StyledWrapperTodoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;

  @media screen and (min-width: ${BREAKPOINT.MEDIUM}) {
    max-width: 500px;
  }
`;
