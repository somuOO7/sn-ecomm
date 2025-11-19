import { Colors } from "@/contants/Colors";
import { Sizes } from "@/contants/Sizes";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Label from "./Label";

const Button = () => {
  return (
    <Pressable style={styles.container}>
      <Label>Button</Label>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: Sizes.borderRadius,
  },
});

export default Button;
