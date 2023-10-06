import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg"
import React from "react";
import COLOR from "../../../variables/color";


export const EditButton = ({onClick}) => {
    return <Button onClick={onClick}><img src={pencil} className="img-size"/></Button>;
}
export default EditButton;

const Button = styled.button`
 display: flex;
 background: none;
 width: 20px;
 height: 20px;
 border-radius: 50%;
 padding: 0;
 border: 0;
 transition: 0.2s;
 justify-content: center;
 align-items: center;
 flex-shrink: 0;

 .img-size{
    width: 100%;
    height: 100%;
 }
 
 :hover{
   background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
   cursor: pointer;
 }
`;