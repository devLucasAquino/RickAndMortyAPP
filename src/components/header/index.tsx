import React from "react";
import { Button, HeaderContainer, HeaderText, SearchButtonContainer, SearchButtonInput, TextButton } from "./styles";
import { TouchableOpacity } from "react-native";

export interface HeaderProps {
    setSearch: (search: string) => void;
};

export function Header({
    setSearch,
}: HeaderProps): React.JSX.Element {
    return(
        <HeaderContainer>
            <HeaderText>Rick and Morty</HeaderText>
            <SearchButtonContainer>
            <SearchButtonInput onChangeText={setSearch}/>
            <TouchableOpacity>
                <Button>
                    <TextButton>Search</TextButton>
                </Button>
            </TouchableOpacity>
        </SearchButtonContainer>
        </HeaderContainer>
    )
};