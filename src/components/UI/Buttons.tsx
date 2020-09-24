import styled from "styled-components";

export const ButtonBase = styled.button`
  padding: 0.5em;
  box-shadow: none;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
`;

export const Button = styled(ButtonBase)<{ primary?: any; secondary?: any }>`
  margin-right: 1rem;
  ${(props) =>
    props.primary &&
    `
    background-color: #54a0ff;
      color: #fff;
      &:hover {
        background-color: black;
      }
  `}

  ${(props) =>
    props.secondary &&
    `
      background-color: black;
      color: #fff;
      &:hover {
        background-color: #54a0ff;
      }
  `}

  font-size: 18px;
`;
