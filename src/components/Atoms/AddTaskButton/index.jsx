import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg"
import React from "react";
import COLOR from "../../../variables/color";


export const AddTaskButton = ({onClick}) => {
    return <Button onClick={onClick}><img src={plus}/>タスクを追加</Button>;
}
export default AddTaskButton;

const Button = styled.button`
 display: flex;
 padding: 2px 6px;
 align-items: center;
 gap: 10px;
`