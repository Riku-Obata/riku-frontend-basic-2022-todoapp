import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import React from "react";
import COLOR from "../../../variables/color";

export const Checkbox = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={pencil} className="img-size" />
    </Button>
  );
};
export default Checkbox;

const Button = styled.button;
