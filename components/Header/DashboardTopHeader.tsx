import { Colors } from "@/contants/Colors";
import { Icons } from "@/contants/Icons";
import { Sizes } from "@/contants/Sizes";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import ButtonIcon from "../ui/ButtonIcon";
import Label from "../ui/Label";

const DashboardTopHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarView}>
        <Image
          resizeMode="contain"
          source={require("@/assets/images/react-logo.png")}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </View>

      <View style={{ flex: 1, gap: 4 }}>
        <Label variant="regular">Hello Alex</Label>
        <Label variant="bold">Good Morning!</Label>
      </View>

      <ButtonIcon icon={Icons.BellOutline} variant="secondary" />
      <ButtonIcon icon={Icons.ShoppingBagOutline} variant="secondary" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatarView: {
    height: 44,
    width: 44,
    backgroundColor: Colors.primary,
    borderRadius: Sizes.borderRadius,
    overflow: "hidden",
  },
});

export default DashboardTopHeader;
