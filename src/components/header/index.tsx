import React from "react";
import { Button, HeaderContainer, HeaderText, SearchButtonContainer, SearchButtonInput, TextButton } from "./styles";
import { TouchableOpacity } from "react-native";

export function Header(): React.JSX.Element {
    return(
        <HeaderContainer>
            <HeaderText>Rick and Morty</HeaderText>
            <SearchButtonContainer>
            <SearchButtonInput />
            <TouchableOpacity>
                <Button>
                    <TextButton>Search</TextButton>
                </Button>
            </TouchableOpacity>
        </SearchButtonContainer>
        </HeaderContainer>
    )
};