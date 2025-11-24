import { Colors } from "@/contants/Colors";
import { Sizes } from "@/contants/Sizes";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import Counter from "../ui/Counter";
import Label from "../ui/Label";

const CartCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/dummy/dummy-2.png")}
        style={styles.image}
        contentFit="contain"
      />
      <View style={styles.contentContainer}>
        <View>
          <Label variant="bold">Title</Label>
          <Label variant="light" style={{ fontSize: 12 }}>
            Description
          </Label>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <Label variant="bold" style={{ fontSize: 20 }}>
            $Price
          </Label>

          <Counter />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: Sizes.borderRadius,
    flexDirection: "row",
    gap: 16,
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: Colors.secondary,
    borderRadius: Sizes.borderRadius,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default CartCard;
