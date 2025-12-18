import { Colors } from "@/contants/Colors";
import React from "react";
import { ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SafeContaierProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  style?: ViewStyle;
}

const SafeContianer = (props: SafeContaierProps) => {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          paddingHorizontal: 16,
          backgroundColor:
            props.variant === "secondary" ? "transparent" : Colors.background,
          gap: 16,
        },
        props.style,
      ]}
    >
      {props.children}
    </SafeAreaView>
  );
};

export default SafeContianer;
