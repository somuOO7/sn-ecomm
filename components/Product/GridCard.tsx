import { Colors } from "@/contants/Colors";
import { Icons } from "@/contants/Icons";
import { Sizes } from "@/contants/Sizes";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

const GridCard = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require("@/assets/images/dummy/dummy-1.png")}
        style={{ width: "100%", height: 150 }}
        contentFit="contain"
      />
      <View style={[styles.imageContainer, styles.wishlistIconContainer]}>
        <Image
          source={Icons.HeartFill}
          style={styles.wishlistIcon}
          contentFit="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 8,
    borderRadius: Sizes.borderRadius,
    borderColor: Colors.secondary,
  },
  wishlistIconContainer: {
    position: "absolute",
    top: -8,
    right: -8,
    padding: 4,
  },
  wishlistIcon: {
    height: 24,
    width: 24,
    tintColor: Colors.red,
  },
});

export default GridCard;
