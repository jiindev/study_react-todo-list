import React from 'react';
import styled from 'styled-components';

const PageDiv = styled.div`
    margin-top: 5rem;
    margin-left:auto;
    margin-right:auto;
    width: 500px;
    background-color: #fff;
    box-shadow : 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding-top: 2rem;
    border-radius: 10px;
    @media(max-width:768px){
        margin-top:1rem;
        width: calc(100% - 2rem);
    }
`;
const Title= styled.h1`
    text-align: center;
    font-size: 3rem;
    font-weight: 300;
    margin: 0;
`;

const Content= styled.div`
    margin-top:2rem;
`;

const PageTemplate = ({children})=>{
    return (
        <PageDiv>
            <Title>일정 관리</Title>
            <Content>
                {children}
            </Content>
        </PageDiv>
    );
};

export default PageTemplate;