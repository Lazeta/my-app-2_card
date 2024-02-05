import styled, { css } from "styled-components";
import { myTheme } from "../MyTheme.styled";

type StyledButtonPropsType = {
  color?: string;
  fontSize?: string;
  btnType: "primary" | "finite";
  active?: boolean;
};

export const Button = styled.button<StyledButtonPropsType>`
  min-width: 8rem;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${(props) => props.fontSize || "1.2rem"};
  font-weight: bold;
  transition: 500ms;
  
  &:hover {
    box-shadow: 4px 4px 5px gray;
    transform: scale(1.05);
    transition-property: all;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;

  }

  ${(props) =>
    props.btnType === "finite" &&
    css<StyledButtonPropsType>`
      border: 2px solid ${(props) => props.color || myTheme.colors.primary};
      color: ${(props) => props.color || myTheme.colors.additionary};
      background-color: ${myTheme.colors.transparent};

      &:hover {
        border-color: ${myTheme.colors.primary};
        color: ${myTheme.colors.transparent};
        background-color: ${myTheme.colors.primary};
      }
    `}

  ${(props) =>
    props.btnType === "primary" &&
    css<StyledButtonPropsType>`
      border: 2px solid ${myTheme.colors.primary};
      color: ${(props) => props.color || myTheme.colors.transparent};
      background-color: ${myTheme.colors.primary};

      &:hover {
        border-color: ${myTheme.colors.primary};
        color: ${myTheme.colors.primary};
        background-color: ${myTheme.colors.transparent};
      }
    `}
`;
