import { Colors } from "@/contants/Colors";
import { Icons } from "@/contants/Icons";
import { Sizes } from "@/contants/Sizes";
import { Image } from "expo-image";
import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface ButtonIconProps extends PressableProps {
  icon: keyof typeof Icons;
  variant?: "primary" | "secondary" | "white";
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

  const iconPosition = useSharedValue(0);
  const iconAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: iconPosition.value }],
    };
  }, []);

  const animateCart = () => {
    const animationList = [];
    animationList.push(withSpring(40));
    animationList.push(withTiming(-40, { duration: 0 }));
    animationList.push(withSpring(0));
    iconPosition.value = withSequence(...animationList);
  };

  const getBackgroundColor = () => {
    switch (props.variant) {
      case "primary":
        return Colors.primary;
      case "secondary":
        return Colors.secondary;
      case "white":
        return Colors.white;
      default:
        return Colors.secondary;
    }
  };

  const getTintColor = () => {
    switch (props.variant) {
      case "primary":
        return Colors.white;
      case "secondary":
        return Colors.black;
      case "white":
        return Colors.black;
      default:
        return Colors.black;
    }
  };

  return (
    <Animated.View style={pressableAnimatedStyle}>
      <Pressable
        {...props}
        onPressIn={pressableFadeOut}
        onPressOut={() => {
          pressableFadeIn();
          if (props.icon === Icons.CartOutline) {
            animateCart();
          }
        }}
        style={(state) => [
          {
            backgroundColor: getBackgroundColor(),
          },
          styles.container,
          typeof props.style === "function" ? props.style(state) : props.style,
        ]}
      >
        <Animated.View style={iconAnimationStyle}>
          <Image
            source={props.icon}
            style={[
              {
                tintColor: getTintColor(),
              },
              styles.icon,
            ]}
          />
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: Sizes.borderRadius,
    overflow: "hidden",
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default ButtonIcon;
