import { Colors } from "@/contants/Colors";
import { Sizes } from "@/contants/Sizes";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface InputFieldProps {
  placeholder: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

const InputField = (props: InputFieldProps) => {
  return (
    <View style={styles.container}>
      {props.leftComponent}
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={Colors.gray}
        style={styles.input}
      />
      {props.rightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.inputBackground,
    padding: 14,
    borderRadius: Sizes.borderRadius,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontFamily: "SN-Regular",
    flex: 1,
    fontSize: 16,
  },
});

export default InputField;
