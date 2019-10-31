import React from 'react';
import styled from 'styled-components';

const TodoAdd = styled.div`
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    display: flex;
    padding: 1rem;
    input{
        flex:1;
        font-size:1.1rem;
        color: #22170B;
        outline: none;
        border: none;
        background: transparent;
        border-bottom: 1px solid lightgray;
        &:focus{
            border-bottom: 1px solid lightblue;
        }
    }
`;

const AddBtn = styled.button`
    width: 5rem;
    height: 2rem;
    border: 0;
    border-radius: 20px;
    margin-left:1rem;
    background: skyblue;
    color: white;
    font-weight: 500;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s ease;
    outline: none;
    cursor:pointer;
    &:hover{
        background: #34679D;
        color: white;
    }
    &:active{
        background:#1C4254;
    }
`;

const TodoInput = ({value, onChange, onInsert})=>{
    const handleKeyPress=(e)=>{
        if(e.key==='Enter'){
            onInsert();
        }
    }


return (
            <TodoAdd>
                <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
                <AddBtn onClick={onInsert}>추가</AddBtn>
            </TodoAdd>
);

}; 

export default TodoInput;