import React from "react";
import { HeaderContainer, HeaderText } from "./styles";
import { SearchButton } from "../search-button/search-button";

export function Header(): React.JSX.Element {
    return(
        <HeaderContainer>
            <HeaderText>Rick and Morty</HeaderText>
            <SearchButton />
        </HeaderContainer>
    )
};