import { Colors } from "@/contants/Colors";
import { Sizes } from "@/contants/Sizes";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "expo-router";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
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
const BANNER_ANIMATION_TIME = 1000;

const MultiBannerLarge = (props: MultiBannerLargeProps) => {
  const bannerContentPosition = useSharedValue(0);
  const bannerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: bannerContentPosition.value }],
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      const animations = [];
      for (let i = 0; i < props.bannerList.length; i++) {
        animations.push(
          withDelay(BANNER_ANIMATION_TIME, withSpring(-BANNER_HEIGHT * i))
        );
      }
      bannerContentPosition.value = withSequence(...animations);

      return () => {
        bannerContentPosition.value = 0;
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
                style={{ fontSize: 25, color: Colors.white }}
                variant="bold"
              >
                {bannerItem.title}
              </Label>

              <Button />
            </Animated.View>
            {bannerItem.imageUrl && (
              <View style={{ flex: 1 }}>
                <Image
                  source={bannerItem.imageUrl}
                  style={{ height: "100%", flex: 1 }}
                  contentFit="contain"
                />
              </View>
            )}
          </View>
        );
      })}
      <View style={styles.pagination}>
        {props.bannerList.map((bannerItem, index) => {
          return <View key={index} style={styles.paginationItem} />;
        })}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: BANNER_HEIGHT,
    width: "100%",
    backgroundColor: Colors.primary,
    borderRadius: Sizes.borderRadius,
    paddingHorizontal: BANNER_PADDING,
    overflow: "visible",
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
    top: 0,
    bottom: 0,
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
