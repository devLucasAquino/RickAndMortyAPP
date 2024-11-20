import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { api } from "../../lib/axios";

interface MainProps {
    search: string | null;
};

type Characters = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
    },
    location: {
        name: string;
    },
    image: string;
};

export function Main({
    search,
}: MainProps): React.JSX.Element {

    const [ characters, setCharacters ] = useState<Characters[]>([]);

    const getAllCharacters = async () => {
        api.get(`/character`)
        .then((json) => {
            const results = json.data.results;
            setCharacters(results.map((character: Characters) => ({
                id: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
                type: character.type,
                gender: character.gender,
                origin: {
                    name: character.origin.name,
                },
                location: {
                    name: character.location.name,
                },
                image: character.image,
            })));
        })
    };

    useEffect(() => {
        getAllCharacters();
    }, [])

    return(
        <View>
            <Text>{search}</Text>
            {characters.length > 0 ? (
                characters.map((character: Characters) => (
                    <Text key={character.id}>{character.name}</Text>
                ))
            ) : (
                <Text>Nenhum personagem encontrado</Text>
            )}
        </View>
    )
};