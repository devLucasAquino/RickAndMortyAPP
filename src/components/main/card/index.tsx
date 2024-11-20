import { Text, TouchableOpacity, View } from "react-native";
import { CardContainer, CharacterImage, CharacterInfo, CharacterName, CharacterStatus } from "./styles";
import React, { useEffect, useState } from "react";

interface CardProps{
    id: number;
    name: string;
    status: string;
    gender: string;
    image: string;
};

export function Card({
    name,
    status,
    gender,
    image,
}: CardProps): React.JSX.Element{

    const [ isAlive, setIsAlive ] = useState<boolean>(false);

    const checkIsAlive = () => {
        if(status === "Alive") {
            setIsAlive(true);
        }
    };

    useEffect(() => {
        checkIsAlive();
    })

    return(
        <CardContainer>
            <CharacterName>{name}</CharacterName>
            <CharacterImage source={{uri: image}} style={{ width: 100, height: 100 }} />
            <CharacterInfo>
                <View>
                    <Text>
                        <View style={{
                            width: 10, 
                            height: 10, 
                            backgroundColor: `${isAlive ? ("green") : ("red")}`, 
                            borderRadius: 100}}>
                        </View> {status}</Text>
                    <Text>gender: {gender}</Text>
                </View>
                <TouchableOpacity>
                    <Text>Aqui</Text>
                </TouchableOpacity>
            </CharacterInfo>
        </CardContainer>
    )
};