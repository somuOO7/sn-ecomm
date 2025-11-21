import { Colors } from "@/contants/Colors";
import { Icons } from "@/contants/Icons";
import { Sizes } from "@/contants/Sizes";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonIcon from "../ui/ButtonIcon";
import Label from "../ui/Label";

const GridCard = () => {
  return (
    <View style={{ flex: 1, gap: 8 }}>
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

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Label variant="bold">Headphone</Label>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Label variant="bold">$50</Label>
            <Label
              variant="light"
              style={{ textDecorationLine: "line-through" }}
            >
              $100
            </Label>
          </View>
        </View>

        <ButtonIcon icon={Icons.CartOutline} variant="primary" />
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
    padding: 6,
  },
  wishlistIcon: {
    height: 22,
    width: 22,
    tintColor: Colors.red,
  },
});

export default GridCard;
