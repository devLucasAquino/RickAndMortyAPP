import styled from "styled-components/native";

export const CardContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid gray 1px;
    width: 45%;
    border-radius: 10px;
    gap: 10px;
    padding: 10px 0 10px 0;
`;

export const CharacterName = styled.Text`
    text-align: center;
`;

export const CharacterImage = styled.Image`
    border-radius: 5px;
`;

export const CharacterInfo = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px 0 10px;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
`;