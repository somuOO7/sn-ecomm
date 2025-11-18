import { Colors } from "@/contants/Colors";
import { Icons } from "@/contants/Icons";
import { Image } from "expo-image";
import React, { useEffect } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface DashboardBottomTabItemProps {
  selectedIcon: any;
  unselectedIcon: any;
  label: string;
  isFocused?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const DashboardBottomTabItem = React.forwardRef<
  View,
  DashboardBottomTabItemProps
>(({ selectedIcon, unselectedIcon, label, onPress, style, ...props }, ref) => {
  const pointerTranslateY = useSharedValue(20);
  const pointOpacity = useSharedValue(0);

  const pointerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: pointerTranslateY.value }],
      opacity: pointOpacity.value,
    };
  }, []);

  useEffect(() => {
    if (props.isFocused) {
      pointerTranslateY.value = withSpring(0);
      pointOpacity.value = withSpring(1);
    } else {
      pointerTranslateY.value = withSpring(20);
      pointOpacity.value = withSpring(0);
    }
  }, [props.isFocused]);

  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      style={[style, styles.container]}
      {...props}
    >
      <Animated.View style={pointerAnimatedStyle}>
        <Image
          source={Icons.DownArrow}
          style={[{ width: 16, height: 16 }, styles.selectIcon]}
          contentFit="contain"
        />
      </Animated.View>
      <Image
        source={props.isFocused ? selectedIcon : unselectedIcon}
        style={[
          { width: 24, height: 24 },
          props.isFocused && styles.selectIcon,
        ]}
        contentFit="contain"
      />
      <Text>{label}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  selectIcon: {
    tintColor: Colors.primary,
  },
});

export default DashboardBottomTabItem;
