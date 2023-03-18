import { View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import { Text } from "../../../infrastructure/components/typography/Text";

export default function DetailCard({icon,name,value}) {
  return (
    <View
      style={{
        margin: 5,
        height: 120,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"gray",
        flexDirection:"column"
      }}
    >
        <IconButton icon={icon} />
        <Text variant="hint" style={{fontWeight:800}} >{name} </Text>
        <Text variant="body">{value} </Text>
    </View>
  );
}
