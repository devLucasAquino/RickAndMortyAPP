import { Modal, Text, TouchableOpacity, View } from "react-native";
import { CardContainer, CharacterImage, CharacterInfo, CharacterName } from "./styles";
import React, { useEffect, useState } from "react";
import { Characters } from "..";
import { UniqueCard } from "../unique-card-modal";

interface CardProps extends Characters{
};

export function Card({
    id,
    gender,
    image,
    location,
    name,
    origin,
    species,
    status,
    type
}: CardProps): React.JSX.Element{

    const [ isOpenUniqueCard, setIsOpenUniqueCard ] = useState<boolean>(false);
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
        <>
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
                    <TouchableOpacity
                        onPress={() => setIsOpenUniqueCard(true)}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </CharacterInfo>
            </CardContainer>
            <Modal
                visible={isOpenUniqueCard}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setIsOpenUniqueCard(false)}
            >
                <UniqueCard
                    id={id}
                    gender={gender}
                    image={image}
                    location={location}
                    name={name}
                    onClose={() => setIsOpenUniqueCard(false)}
                    origin={origin}
                    species={species}
                    status={status}
                    type={type}
                />

            </Modal>
        </>
    )
};