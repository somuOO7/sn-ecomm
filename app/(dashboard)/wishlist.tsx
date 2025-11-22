import TopHeader from "@/components/Header/TopHeader";
import GridCard from "@/components/Product/GridCard";
import SafeContianer from "@/components/ui/SafeContianer";
import SearchWithFilter from "@/components/ui/SearchWithFilter";
import React from "react";
import { View } from "react-native";

const wishlist = () => {
  return (
    <SafeContianer>
      <TopHeader title="My Wishlist" />
      <SearchWithFilter />

      <View style={{ flexDirection: "row", gap: 16, flexWrap: "wrap" }}>
        <GridCard />
        <GridCard />
        <GridCard />
      </View>
    </SafeContianer>
  );
};

export default wishlist;
