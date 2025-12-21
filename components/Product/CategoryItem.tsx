import { Colors } from "@/contants/Colors";
import { Sizes } from "@/contants/Sizes";
import React, { useEffect, useState } from "react";
import { LayoutChangeEvent, Pressable, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Label from "../ui/Label";

interface CategoryItemProps {
  title: string;
  isSelected: boolean;
  onPress: () => void;
}

const CategoryItem = (props: CategoryItemProps) => {
  const [containerWidth, setContainerWidth] = useState(0);

  // Animate circle background
  const animateCircleSize = useSharedValue(
    props.isSelected ? containerWidth : 0
  );
  const animateCircleBorderRadius = useSharedValue(
    props.isSelected ? containerWidth / 2 : 0
  );

  const circleAnimationStyle = useAnimatedStyle(() => ({
    height: animateCircleSize.value,
    width: animateCircleSize.value,
    borderRadius: animateCircleBorderRadius.value,
  }));

  useEffect(() => {
    animateCircleSize.value = withSpring(props.isSelected ? containerWidth : 0);
    animateCircleBorderRadius.value = withSpring(
      props.isSelected ? containerWidth / 2 : 0
    );
  }, [props.isSelected, containerWidth]);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width + 5);
  };

  return (
    <Pressable
      style={styles.container}
      onPress={props.onPress}
      onLayout={handleLayout}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animated.View
          style={[
            {
              backgroundColor: Colors.primary,
            },
            circleAnimationStyle,
          ]}
        />
      </View>
      <Label style={{ color: props.isSelected ? Colors.white : Colors.black }}>
        {props.title}
      </Label>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.inputBackground,
    borderRadius: Sizes.borderRadius,
    paddingVertical: 12,
    paddingHorizontal: 16,
    overflow: "hidden",
  },
});

export default CategoryItem;
