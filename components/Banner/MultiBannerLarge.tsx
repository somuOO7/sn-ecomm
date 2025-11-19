import { Colors } from "@/contants/Colors";
import { Sizes } from "@/contants/Sizes";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
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

const MultiBannerLarge = (props: MultiBannerLargeProps) => {
  const bannerContentPosition = useSharedValue(0);
  const bannerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: bannerContentPosition.value }],
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      bannerContentPosition.value = withSpring(
        bannerContentPosition.value - BANNER_HEIGHT + BANNER_PADDING * 2
      );
    }, 3000);
  }, []);

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.primaryLight]}
      start={{ x: 0, y: 0 }}
      style={styles.container}
    >
      {props.bannerList.map((bannerItem) => {
        return (
          <Animated.View
            key={bannerItem.id}
            style={[styles.content, bannerAnimatedStyle]}
          >
            <Label
              style={{ fontSize: 100, color: Colors.white }}
              variant="bold"
            >
              {bannerItem.title}
            </Label>
          </Animated.View>
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
    padding: BANNER_PADDING,
    overflow: "visible",
  },
  content: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    // transform: [
    //   {
    //     translateY: -BANNER_HEIGHT + BANNER_PADDING * 2,
    //   },
    // ],
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
