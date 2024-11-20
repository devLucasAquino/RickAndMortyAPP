import React from "react";
import { Text, View } from "react-native";

interface MainProps {
    search: string | null;
};

export function Main({
    search,
}: MainProps): React.JSX.Element {
    return(
        <View>
            <Text>{search}</Text>
        </View>
    )
};