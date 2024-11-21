import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { api } from "../../lib/axios";
import { Card } from "./card";
import { ListContainer } from "./styles";

export type Characters = {
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

export function Main(): React.JSX.Element {

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
        <>
            <ScrollView>
                <ListContainer>
                    {characters.length > 0 ? (
                        characters.map((character: Characters) => (
                            <Card 
                                key={character.id}
                                id={character.id}
                                name={character.name}
                                gender={character.gender}
                                status={character.status}
                                image={character.image}
                                location={character.location}
                                origin={character.origin}
                                species={character.species}
                                type={character.type}
                            />
                        ))
                    ) : (
                        <Text>Nenhum personagem encontrado</Text>
                    )}
                </ListContainer>
            </ScrollView>
            
        </>
    )
};