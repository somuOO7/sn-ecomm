import LottieView, { AnimationObject } from "lottie-react-native";
import React, { Ref } from "react";
import { StyleSheet, View } from "react-native";

interface LottieLoaderProps {
  source: string | AnimationObject | { uri: string };
  ref: Ref<LottieView>;
}

const LottieLoader = (props: LottieLoaderProps) => {
  return (
    <View style={[styles.fullScreenCover, { backgroundColor: "#00000040" }]}>
      <LottieView
        autoPlay
        ref={props.ref}
        style={styles.fullScreenCover}
        source={props.source}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenCover: {
    width: "100%",
    height: "100%",
  },
});

export default LottieLoader;
