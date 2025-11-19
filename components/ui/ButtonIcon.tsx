import { Colors } from "@/contants/Colors";
import { Icons } from "@/contants/Icons";
import { Image } from "expo-image";
import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";

interface ButtonIconProps extends PressableProps {
  icon: keyof typeof Icons;
  variant?: "primary" | "secondary";
}

const ButtonIcon = (props: ButtonIconProps) => {
  return (
    <Pressable
      {...props}
      style={(state) => [
        {
          backgroundColor:
            props.variant === "primary" ? Colors.primary : Colors.secondary,
        },
        styles.container,
        typeof props.style === "function" ? props.style(state) : props.style,
      ]}
    >
      <Image
        source={props.icon}
        style={[
          {
            tintColor:
              props.variant === "primary" ? Colors.white : Colors.black,
          },
          styles.icon,
        ]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default ButtonIcon;
