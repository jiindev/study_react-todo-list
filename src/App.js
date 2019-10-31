import React, {Component} from 'react';
import styled, {createGlobalStyle, Fragment} from "styled-components";
import PageTemplate from './PageTemplate'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: aliceblue;
    margin: 0;
  }
`;

class App extends Component{
  render(){
    return (
      <>
        <GlobalStyle/>
        <div>
          <PageTemplate>
            <TodoInput/>
            <TodoItem done>아자아자아자</TodoItem>
            <TodoItem>아자아자아자</TodoItem>
            <TodoItem>아자아자아자</TodoItem>
          </PageTemplate>
        </div>
      </>
    );
  }
}

export default App;
