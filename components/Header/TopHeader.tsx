import React from "react";
import { StyleSheet, View } from "react-native";
import Label from "../ui/Label";

interface TopHeaderProps {
  title: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

const TopHeader = (props: TopHeaderProps) => {
  return (
    <View style={styles.container}>
      {props.leftComponent && props.leftComponent}
      <Label variant="bold" style={styles.title}>
        {props.title}
      </Label>
      {props.rightComponent && props.rightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 28, flex: 1, textAlign: "center" },
});

export default TopHeader;
