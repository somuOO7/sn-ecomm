import { Colors } from "@/contants/Colors";
import { Icons } from "@/contants/Icons";
import { Sizes } from "@/contants/Sizes";
import React, { useState } from "react";
import { LayoutChangeEvent, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import ButtonIcon from "./ButtonIcon";
import Label from "./Label";
interface SwipeButtonProps {
  title: string;
  onSuccess: () => void;
}

const SLIDER_SIZE = 58 - 8;
const PADDING = 4;

const SwipeButton = (props: SwipeButtonProps) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const xPosition = useSharedValue(0);
  const backgroundColor = useSharedValue(Colors.primary);

  const maxSlide = containerWidth - SLIDER_SIZE - PADDING * 2;

  const slideAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: xPosition.value }],
    };
  }, []);

  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value,
    };
  }, []);

  const slide = Gesture.Pan()
    .onUpdate((e) => {
      const newX = Math.max(0, Math.min(e.translationX, maxSlide));
      xPosition.value = newX;
    })
    .onEnd((e) => {
      if (xPosition.value < maxSlide / 2) {
        xPosition.value = withSpring(0);
      } else {
        xPosition.value = withSpring(maxSlide);
        backgroundColor.value = withSpring(Colors.success);

        scheduleOnRN(props.onSuccess);
      }
    });

  const onLayout = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  return (
    <Animated.View
      style={[styles.container, backgroundAnimatedStyle]}
      onLayout={onLayout}
    >
      <GestureDetector gesture={slide}>
        <Animated.View style={[styles.sliderAnimatedView, slideAnimatedStyle]}>
          <ButtonIcon icon={Icons.NextArrow} style={styles.slider} />
        </Animated.View>
      </GestureDetector>
      <Label style={styles.sliderLabel}>{props.title}</Label>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: Sizes.borderRadius,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  sliderAnimatedView: {
    position: "absolute",
    top: PADDING,
    left: PADDING,
  },
  slider: {
    height: SLIDER_SIZE,
    width: SLIDER_SIZE,
  },
  sliderLabel: { color: Colors.white, fontSize: 16 },
});

export default SwipeButton;
