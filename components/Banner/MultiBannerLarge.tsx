import { Colors } from "@/contants/Colors";
import { Sizes } from "@/contants/Sizes";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "expo-router";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Button from "../ui/Button";
import Label from "../ui/Label";

interface MultiBannerLargeProps {
  bannerList: Array<{
    id: string;
    imageUrl?: string;
    title: string;
    actionTitle?: string;
  }>;
}

const BANNER_HEIGHT = 180;
const BANNER_PADDING = 16;
const BANNER_ANIMATION_TIME = 5000;

// MARK: Animated Pagination Item Component
const AnimatedPaginationItem = ({
  index,
  currentIndex,
}: {
  index: number;
  currentIndex: SharedValue<number>;
}) => {
  const insidePaginationHeight = useSharedValue(0);
  const insidePaginationAnimatedStyle = useAnimatedStyle(() => {
    if (currentIndex.value === index) {
      insidePaginationHeight.value = withTiming(1, {
        duration: BANNER_ANIMATION_TIME,
      });
    } else if (currentIndex.value > index) {
      insidePaginationHeight.value = withTiming(1);
    } else {
      insidePaginationHeight.value = withTiming(0);
    }
    return {
      height: `${insidePaginationHeight.value * 100}%`,
    };
  }, [index]);
  const paginationAnimatedStyle = useAnimatedStyle(() => {
    return {
      flex: currentIndex.value === index ? withTiming(1) : withTiming(0),
    };
  }, []);

  return (
    <Animated.View
      style={[
        {
          backgroundColor: Colors.white,
          height: 18,
          width: 6,
          borderRadius: 3,
          overflow: "hidden",
        },
        paginationAnimatedStyle,
      ]}
    >
      <Animated.View
        style={[
          { backgroundColor: Colors.primary },
          insidePaginationAnimatedStyle,
        ]}
      />
    </Animated.View>
  );
};

// MARK: Main component render
const MultiBannerLarge = (props: MultiBannerLargeProps) => {
  const bannerContentPosition = useSharedValue(0);
  const bannerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: bannerContentPosition.value }],
    };
  }, []);

  const imageTranslateXPosition = useSharedValue(0);
  const imageTranslateYPosition = useSharedValue(0);
  const imageOpacity = useSharedValue(1);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: imageTranslateXPosition.value },
        { translateY: imageTranslateYPosition.value },
      ],
      opacity: imageOpacity.value,
    };
  }, []);

  const paginationAnimateIndex = useSharedValue(0);

  useFocusEffect(
    useCallback(() => {
      const contentAnimations = [];
      const imageXAnimations = [];
      const imageYAnimations = [];
      const imageOpacityAnimations = [];

      for (let i = 1; i < props.bannerList.length; i++) {
        contentAnimations.push(
          withDelay(BANNER_ANIMATION_TIME, withTiming(-BANNER_HEIGHT * i))
        );
        imageYAnimations.push(
          withDelay(BANNER_ANIMATION_TIME, withTiming(-BANNER_HEIGHT * i))
        );
        imageXAnimations.push(
          withDelay(BANNER_ANIMATION_TIME - 300, withTiming(1000))
        );
        imageOpacityAnimations.push(
          withDelay(BANNER_ANIMATION_TIME - 300, withTiming(0))
        );
        imageXAnimations.push(withTiming(0));
        imageOpacityAnimations.push(withTiming(1));
      }

      contentAnimations.push(withDelay(BANNER_ANIMATION_TIME, withTiming(0)));
      imageYAnimations.push(withDelay(BANNER_ANIMATION_TIME, withTiming(0)));
      imageXAnimations.push(
        withDelay(BANNER_ANIMATION_TIME - 300, withTiming(3500))
      );
      imageOpacityAnimations.push(
        withDelay(BANNER_ANIMATION_TIME - 300, withTiming(0))
      );
      imageXAnimations.push(withTiming(0));
      imageOpacityAnimations.push(withTiming(1));

      bannerContentPosition.value = withRepeat(
        withSequence(...contentAnimations),
        -1,
        false
      );

      imageTranslateYPosition.value = withRepeat(
        withSequence(...imageYAnimations),
        -1,
        false
      );

      imageTranslateXPosition.value = withRepeat(
        withSequence(...imageXAnimations),
        -1,
        false
      );

      imageOpacity.value = withRepeat(
        withSequence(...imageOpacityAnimations),
        -1,
        false
      );

      let paginationIndex = 0;

      const animatePagination = () => {
        paginationAnimateIndex.value = paginationIndex;
        if (paginationIndex < props.bannerList.length - 1) {
          setTimeout(() => {
            paginationIndex++;
            animatePagination();
          }, BANNER_ANIMATION_TIME + 300);
        } else {
          setTimeout(() => {
            paginationIndex = 0;
            animatePagination();
          }, BANNER_ANIMATION_TIME + 300);
        }
      };

      animatePagination();

      return () => {
        bannerContentPosition.value = 0;
        imageTranslateYPosition.value = 0;
        imageTranslateXPosition.value = 0;
        imageOpacity.value = 1;
        paginationAnimateIndex.value = 0;
      };
    }, [])
  );

  return (
    <LinearGradient
      colors={[
        Colors.primary,
        Colors.primary,
        Colors.primary,
        Colors.primaryLight,
      ]}
      start={{ x: 0, y: 0 }}
      style={styles.container}
    >
      {props.bannerList.map((bannerItem) => {
        return (
          <View style={styles.content} key={bannerItem.id}>
            <Animated.View style={[bannerAnimatedStyle, styles.leftContainer]}>
              <Label
                style={{
                  fontSize: 25,
                  color: Colors.white,
                  width: "100%",
                }}
                variant="bold"
              >
                {bannerItem.title}
              </Label>

              {bannerItem.actionTitle && (
                <Button title={bannerItem.actionTitle} variant="secondary" />
              )}
            </Animated.View>
            {bannerItem.imageUrl && (
              <Animated.View style={[{ flex: 1 }, imageAnimatedStyle]}>
                <Image
                  source={bannerItem.imageUrl}
                  style={{
                    height: "100%",
                    flex: 1,
                  }}
                  contentFit="contain"
                />
              </Animated.View>
            )}
          </View>
        );
      })}
      <View style={styles.pagination}>
        {props.bannerList.map((bannerItem, index) => (
          <AnimatedPaginationItem
            key={index}
            index={index}
            currentIndex={paginationAnimateIndex}
          />
        ))}
      </View>
    </LinearGradient>
  );
};

// MARK: Styles
const styles = StyleSheet.create({
  container: {
    height: BANNER_HEIGHT,
    width: "100%",
    backgroundColor: Colors.primary,
    borderRadius: Sizes.borderRadius,
    paddingHorizontal: BANNER_PADDING,
    overflow: "hidden",
  },
  content: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 12,
  },
  pagination: {
    position: "absolute",
    right: BANNER_PADDING,
    top: 16,
    bottom: 16,
    flexDirection: "column",
    justifyContent: "center",
    gap: 6,
  },
  paginationItem: {
    backgroundColor: Colors.white,
    height: 18,
    width: 6,
    borderRadius: 3,
  },
});

export default MultiBannerLarge;
