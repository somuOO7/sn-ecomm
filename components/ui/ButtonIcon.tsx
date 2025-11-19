import { Colors } from "@/contants/Colors";
import { Icons } from "@/contants/Icons";
import { Sizes } from "@/contants/Sizes";
import { Image } from "expo-image";
import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface ButtonIconProps extends PressableProps {
  icon: keyof typeof Icons;
  variant?: "primary" | "secondary";
}

const ButtonIcon = (props: ButtonIconProps) => {
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
    <Animated.View style={pressableAnimatedStyle}>
      <Pressable
        {...props}
        onPressIn={pressableFadeOut}
        onPressOut={pressableFadeIn}
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
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: Sizes.borderRadius,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default ButtonIcon;
