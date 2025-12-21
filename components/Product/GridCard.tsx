import { Colors } from "@/contants/Colors";
import { Icons } from "@/contants/Icons";
import { Sizes } from "@/contants/Sizes";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonIcon from "../ui/ButtonIcon";
import Label from "../ui/Label";

interface GridCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

const GridCard = (props: GridCardProps) => {
  return (
    <View style={{ flex: 1, gap: 8, minWidth: "40%" }}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: props.imageUrl }}
          style={{ width: "100%", height: 150 }}
          contentFit="cover"
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
          <Label variant="bold">{props.title}</Label>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Label variant="bold">${props.price?.toFixed(2)}</Label>
            <Label
              variant="light"
              style={{ textDecorationLine: "line-through", fontSize: 10 }}
            >
              ${(props.price * 1.2).toFixed(2)}
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
