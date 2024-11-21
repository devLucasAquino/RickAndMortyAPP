import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { UniqueCardContainer } from "./styles";
import { Characters } from "..";

interface UniqueCardProps extends Characters {
    onClose: () => void;
}

export function UniqueCard({
    id,
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
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
                <Text>ID: {id}</Text>
                <Text>Gender: {gender}</Text>
                <Text>Location: {location?.name || "Unknown"}</Text>
                <Text>Origin: {origin?.name || "Unknown"}</Text>
                <Text>Species: {species}</Text>
                <Text>Name: {name}</Text>
                <Text>Status: {status}</Text>
                <Text>Type: {type || "N/A"}</Text>
                <Image source={{ uri: image }} style={{ width: 100, height: 100, marginVertical: 10 }} />
                <TouchableOpacity onPress={onClose} style={{ marginTop: 10 }}>
                    <Text style={{ color: "blue" }}>Close</Text>
                </TouchableOpacity>
            </View>
        </UniqueCardContainer>
    );
}
