import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg"
import React from "react";
import COLOR from "../../../variables/color";

export const EditButton = (props) => {
    return <Button onClick={props.onClick}>{props.label}</Button>;
}

const Button = styled.button`
  color: ${COLOR.LIGHT_GRAY}
`;