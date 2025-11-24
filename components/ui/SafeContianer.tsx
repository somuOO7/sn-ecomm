import { Colors } from "@/contants/Colors";
import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SafeContaierProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const SafeContianer = (props: SafeContaierProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 16,
          backgroundColor:
            props.variant === "secondary" ? "transparent" : Colors.background,
          gap: 16,
        }}
      >
        {props.children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SafeContianer;
