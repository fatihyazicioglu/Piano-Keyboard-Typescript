import React from "react";
import styled from "styled-components";

const Black = styled.button`
  width: 40px;
  height: 130px;
  border: solid black 1px;
  position: absolute;
  margin: 1px;
  margin-left: -20px;
  background: black;
  :active {
    background: #333;
  }
`;
const White = styled.button`
  background: white;
  width: 60px;
  height: 200px;
  background: white;
  border: solid black 1px;
  box-shadow: 2px 5px;
  margin: 1px;
  margin-left: "-20px";
  box-sizing: border-box;
  :active {
    background: #eeeb;
  }
`;
type Props = {
  color: string;
  note: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Note: React.FC<Props> = ({ color, note, clickHandler }) =>
  color === "white" ? (
    <White value={note} onClick={clickHandler} />
  ) : (
    <Black value={note} onClick={clickHandler} />
  );
export default Note;
