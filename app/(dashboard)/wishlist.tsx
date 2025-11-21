import GridCard from "@/components/Product/GridCard";
import SafeContianer from "@/components/ui/SafeContianer";
import SearchWithFilter from "@/components/ui/SearchWithFilter";
import TopHeader from "@/components/ui/TopHeader";
import React from "react";
import { View } from "react-native";

const wishlist = () => {
  return (
    <SafeContianer>
      <TopHeader title="My Wishlist" />
      <SearchWithFilter />

      <View style={{ flexDirection: "row", gap: 16 }}>
        <GridCard />
        <GridCard />
      </View>
    </SafeContianer>
  );
};

export default wishlist;
