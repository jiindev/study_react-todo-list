import React, {Component} from 'react';
import styled, {createGlobalStyle, Fragment} from "styled-components";
import PageTemplate from './PageTemplate'

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
          <PageTemplate>안뇽하세요</PageTemplate>
        </div>
      </>
    );
  }
}

export default App;
