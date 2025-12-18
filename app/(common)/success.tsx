import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import SafeContianer from "@/components/ui/SafeContianer";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet } from "react-native";

const success = () => {
  return (
    <SafeContianer style={styles.container}>
      <LottieView
        loop={false}
        style={styles.successIcon}
        source={require("@/assets/animation/success.json")}
      />
      <Label variant="bold">Order Placed Successfully</Label>

      <Button
        title="Back to home"
        onPress={() => {
          router.dismissAll();
          router.replace("/");
        }}
        variant="primary"
      />
    </SafeContianer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  successIcon: {
    width: "100%",
    height: 200,
  },
});

export default success;
