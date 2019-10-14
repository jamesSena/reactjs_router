import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    background-color: blue;
    
    a{
        text-decoration: none;
        font-size: 30px;
        color: #FFF;
        cursor: pointer;
    }
  
`;

export const BemVindo = styled.h1`
    font-size: 50px;
    color: ${props => props.cor};
`;