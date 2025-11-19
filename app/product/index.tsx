import Label from "@/components/ui/Label";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

const index = () => {
  const { title } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: (title as string) || "Product" }} />
      <View>
        <Label>index</Label>
      </View>
    </>
  );
};

export default index;
