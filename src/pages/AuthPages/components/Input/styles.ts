import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    flex: 1 1;

    border-radius: 15px;
    overflow: hidden;
`;

export const TextInput = styled.input.attrs(() => ({
    required: true,
}))`
    width: 100%;
    font-size: 14px;
    padding: 14px;

    background-color: transparent;
    border: none;
    outline: none;
`;