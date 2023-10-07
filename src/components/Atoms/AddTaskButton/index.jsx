import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg"
import React from "react";
import COLOR from "../../../variables/color";


export const AddTaskButton = ({onClick}) => {
    return <Button onClick={onClick}><img src={plus} className="img-size"/></Button>;
}
export default AddTaskButton;

const Button = styled.plusButton