import { Colors } from "@/contants/Colors";
import React from "react";
import { View } from "react-native";
import Label from "./Label";

interface SectionTitleProps {
  title: string;
  seeAllAction?: () => void;
}

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Label variant="bold" style={{ fontSize: 20 }}>
        {props.title}
      </Label>
      <Label style={{ color: Colors.textSecondary }}>See All</Label>
    </View>
  );
};

export default SectionTitle;
