import { Colors } from "@/contants/Colors";
import { Icons } from "@/contants/Icons";
import { Sizes } from "@/contants/Sizes";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ButtonIcon from "./ButtonIcon";
import Label from "./Label";

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <View style={styles.container}>
      <ButtonIcon
        variant="white"
        icon={Icons.Minus}
        onPress={() => setCount((prev) => prev - 1)}
      />
      <Label>{count}</Label>
      <ButtonIcon
        variant="primary"
        icon={Icons.Plus}
        onPress={() => setCount((prev) => prev + 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: Colors.secondary,
    borderRadius: Sizes.borderRadius,
    padding: 4,
  },
});

export default Counter;
