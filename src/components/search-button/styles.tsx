import styled from "styled-components/native";

export const SearchButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding: 10px;
`;

export const SearchButtonInput = styled.TextInput`
    display: flex;
    align-items: center;
    padding: 2px 10%;
    border-radius: 10px 0 0 10px;
    background-color: gray ;
`;

export const Button = styled.View`
    padding: 4px 10px;
    border-radius: 0 10px 10px 0;
    background-color: gray;
`;

export const TextButton = styled.Text`
    color: white;
    font-weight: bold;
`;