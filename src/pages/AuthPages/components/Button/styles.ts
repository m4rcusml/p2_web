import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
    background-color: #122FC4;
    color: white;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 500px;
    min-width: 300px;
    border-radius: 10px;
`;

export const Wrapper = styled.button`
    cursor: pointer;
    background-color: #122FC4;
    color: white;

    font-size: 16px;

    border: none;
    outline: none;

    appearance: none;

    width: 500px;
    min-width: 300px;
    padding: 15px 0;
    border-radius: 10px;
`;