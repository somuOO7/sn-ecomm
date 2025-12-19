import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import SafeContianer from "@/components/ui/SafeContianer";
import { Colors } from "@/contants/Colors";
import { Sizes } from "@/contants/Sizes";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const success = () => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const bottomSheetFlex = useSharedValue(0);
  const bottomSheetAnimatedStyle = useAnimatedStyle(() => {
    return {
      flex: bottomSheetFlex.value,
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsBottomSheetVisible(true);
      bottomSheetFlex.value = withSpring(1);
    }, 3000);
  }, []);

  return (
    <SafeContianer variant="secondary" style={styles.container}>
      <Label variant="bold" style={{ fontSize: 24 }}>
        Order Successful!
      </Label>
      <LottieView
        autoPlay
        loop={false}
        style={styles.successIcon}
        source={require("@/assets/animation/success.json")}
      />
      <Label style={{ textAlign: "center" }}>
        Your order is being packed now by the App, and will be ready for
        shipping soon.
      </Label>

      <View style={{ height: 24 }} />

      <Button
        title="Back to home"
        onPress={() => {
          router.dismissAll();
          router.replace("/");
        }}
        variant="primary"
      />
      {isBottomSheetVisible && (
        <Animated.View style={[styles.bottomSheet, bottomSheetAnimatedStyle]}>
          <Label>Continue shopping</Label>
        </Animated.View>
      )}
    </SafeContianer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  successIcon: {
    width: "100%",
    height: 200,
    marginVertical: -38,
  },
  bottomSheet: {
    backgroundColor: Colors.white,
    width: "100%",
    borderTopLeftRadius: Sizes.borderRadius,
    borderTopRightRadius: Sizes.borderRadius,
  },
});

export default success;
