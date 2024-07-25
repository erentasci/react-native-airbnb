import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  console.log("Page id:", id);

  return (
    <View>
      <Text>Listing</Text>
    </View>
  );
};

export default Page;
