import styled from "styled-components/native";

export const UniqueCardContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const UniqueCardContent = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 50px;
    border-radius: 10px;
    background-color: white;
    box-sizing: border-box;
`;

export const UniqueCardImage = styled.Image`
    border-radius: 5px;
    width: 100%;
    height: auto;
`;

export const UniqueCardName = styled.Text`
    text-align: center;
    font-size: 22px;
    margin: 10px 0;
`;

export const UniqueCardInfo = styled.View`
    width: 50%;
    text-align: left;
`;

export const ButtonClose = styled.Text`
    color: blue;
    font-size: 16px;
`;