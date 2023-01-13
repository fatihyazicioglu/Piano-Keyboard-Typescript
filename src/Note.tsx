import React from "react";
import styled from 'styled-components'

const Black = styled.button`
background :black;
`
const White = styled.button`
background :white;
`

const Note: React.FC<Props> = ({color,note}) => 
color === 'white' ?
    <White value={note}/>
:
    <Black value={note}/>
;

export default Note;