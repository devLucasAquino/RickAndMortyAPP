import React from "react";
import { TouchableOpacity } from "react-native";
import { Button, SearchButtonContainer, SearchButtonInput, TextButton } from "./styles";

export function SearchButton(): React.JSX.Element {
    return (
        <SearchButtonContainer>
            <SearchButtonInput />
            <TouchableOpacity>
                <Button>
                    <TextButton>Search</TextButton>
                </Button>
            </TouchableOpacity>
        </SearchButtonContainer>
    )
}