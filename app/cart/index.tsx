import TopHeader from "@/components/Header/TopHeader";
import CartCard from "@/components/Product/CartCard";
import Button from "@/components/ui/Button";
import ButtonIcon from "@/components/ui/ButtonIcon";
import InputField from "@/components/ui/InputField";
import Label from "@/components/ui/Label";
import SafeContianer from "@/components/ui/SafeContianer";
import { Colors } from "@/contants/Colors";
import { Icons } from "@/contants/Icons";
import { Sizes } from "@/contants/Sizes";
import { Link } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const DUMMY_DATA = [
  { title: "Sub total", value: 100 },
  { title: "Discount", value: 20 },
];

const index = () => {
  return (
    <SafeContianer variant="secondary">
      <TopHeader
        title="My Cart"
        leftComponent={
          <Link href=".." asChild>
            <ButtonIcon variant="white" icon={Icons.BackArrow} />
          </Link>
        }
      />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ gap: 12 }}
        showsVerticalScrollIndicator={false}
      >
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </ScrollView>

      <View style={styles.bottomContainer}>
        <InputField
          placeholder="Enter Discount Code"
          rightComponent={<Button title="Apply" />}
        />

        <View style={{ gap: 16, marginVertical: 16 }}>
          {DUMMY_DATA.map((item, index) => (
            <View
              key={index}
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Label style={styles.cartTitle}>{item.title} :</Label>
              <Label style={styles.cartValue} variant="bold">
                ${item.value}
              </Label>
            </View>
          ))}

          <View style={styles.separator} />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Label style={styles.cartTitle} variant="bold">
              Total :
            </Label>
            <Label style={styles.cartValue} variant="bold">
              $80
            </Label>
          </View>
        </View>
      </View>
    </SafeContianer>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: Colors.white,
    padding: 16,
    borderTopLeftRadius: Sizes.borderRadius,
    borderTopRightRadius: Sizes.borderRadius,
  },
  cartTitle: { fontSize: 16, color: Colors.textSecondary },
  cartValue: { fontSize: 16 },
  separator: {
    backgroundColor: Colors.textSecondary,
    height: 1,
    width: "100%",
  },
});

export default index;
