import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ButtonClose, UniqueCardContainer, UniqueCardContent, UniqueCardImage, UniqueCardInfo, UniqueCardName } from "./styles";
import { Characters } from "..";

interface UniqueCardProps extends Characters {
    onClose: () => void;
}

export function UniqueCard({
    gender,
    image,
    location,
    name,
    origin,
    species,
    status,
    type,
    onClose,
}: UniqueCardProps): React.JSX.Element {
    return (
        <UniqueCardContainer>
            <UniqueCardContent>
                <TouchableOpacity onPress={onClose}>
                    <ButtonClose>X</ButtonClose>
                </TouchableOpacity>
                <UniqueCardImage source={{ uri: image }} style={{ width: 200, height: 200, marginVertical: 10}} />
                <UniqueCardInfo>
                    <UniqueCardName>{name}</UniqueCardName>
                    <Text>Specie: {species}</Text>
                    <Text>Status: {status}</Text>
                    <Text>Gender: {gender}</Text>
                    <Text>Location: {location!.name}</Text>
                    <Text>Origin: {origin!.name}</Text>
                    {type ? <Text>Type: {type}</Text> : (<></>)}
                </UniqueCardInfo>
            </UniqueCardContent>
        </UniqueCardContainer>
    );
}
