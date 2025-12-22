import { Colors } from "@/contants/Colors";
import { Sizes } from "@/contants/Sizes";
import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Label from "./Label";

interface ButtonProps extends PressableProps {
  title: string;
  variant?: "primary" | "secondary";
  buttonLength?: "short" | "long";
}

const Button = (props: ButtonProps) => {
  const pressableOpacity = useSharedValue(1);
  const pressableAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: pressableOpacity.value,
    };
  }, []);

  const pressableFadeIn = () => {
    pressableOpacity.value = withSpring(1);
  };
  const pressableFadeOut = () => {
    pressableOpacity.value = withSpring(0.5);
  };

  return (
    <Animated.View
      style={[
        pressableAnimatedStyle,
        props.buttonLength === "long" && {
          width: "100%",
        },
      ]}
    >
      <Pressable
        {...props}
        style={(state) => [
          {
            backgroundColor:
              props.variant === "primary" ? Colors.primary : Colors.white,
          },
          styles.container,
          typeof props.style === "function" ? props.style(state) : props.style,
        ]}
        onPressIn={pressableFadeOut}
        onPressOut={pressableFadeIn}
      >
        <Label
          style={{
            color: props.variant === "primary" ? Colors.white : Colors.black,
            textAlign: "center",
          }}
        >
          {props.title}
        </Label>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: Sizes.borderRadius,
  },
});

export default Button;
