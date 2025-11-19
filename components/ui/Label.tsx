import React from "react";
import { Text, TextProps } from "react-native";

interface LabelProps extends TextProps {
  variant?: "light" | "regular" | "medium" | "semibold" | "bold";
}

const Label = (props: LabelProps) => {
  const getFontFamily = () => {
    switch (props.variant) {
      case "light":
        return "SN-Light";
      case "regular":
        return "SN-Regular";
      case "medium":
        return "SN-Medium";
      case "semibold":
        return "SN-SemiBold";
      case "bold":
        return "SN-Bold";
      default:
        return "SN-Medium";
    }
  };
  
  return (
    <Text {...props} style={[{ fontFamily: getFontFamily() }, props.style]}>
      {props.children}
    </Text>
  );
};

export default Label;
