import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const TodoItemDiv=styled.div`
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all .2s ease;
    &:nth-child(odd){
        background: #fdfdfd;
    }
    &:hover{
        background: #f3f3f3;
    }
    &+&{
        border-top: 1px solid lightgrey;
    }
`;
const CheckBox = styled.input`
    margin-right: 1rem;
`;
const TextContent = styled.p`
    flex:1;
    word-break:break-all;
    ${props=>props.done && css`
        text-decoration: line-through;
    `}
`;
const DeleteBtn = styled.button`
    cursor: pointer;
    outline: none;
    border: 0;
    background: transparent;
    margin-left: 1rem;
    color:salmon;
    font-size: 0.8rem;
    transition: all .2s ease;
    &:hover{
        color:#f26b8a;
    }
    
`;

class TodoItem extends Component {

    render() {
        const {done, children, onToggle, onRemove} = this.props;
        return (
            <TodoItemDiv onClick={onToggle}>
                <CheckBox type="checkbox" checked={done} readOnly/>
                <TextContent done={done}>{children}</TextContent>
                <DeleteBtn onClick={(e)=>{
                    onRemove();
                    e.stopPropagation();
                }}>Del</DeleteBtn>
            </TodoItemDiv>
        );
    }
}

export default TodoItem;