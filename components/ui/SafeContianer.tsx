import { Colors } from "@/contants/Colors";
import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SafeContianer = (props: { children: React.ReactNode }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 16,
          backgroundColor: Colors.background,
          gap: 16,
        }}
      >
        {props.children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SafeContianer;
