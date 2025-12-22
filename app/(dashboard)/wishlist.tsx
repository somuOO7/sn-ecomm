import TopHeader from "@/components/Header/TopHeader";
import SafeContianer from "@/components/ui/SafeContianer";
import SearchWithFilter from "@/components/ui/SearchWithFilter";
import { useUserData } from "@/stores/userDataStore";
import React, { useEffect } from "react";
import { View } from "react-native";

const wishlist = () => {
  const { removeUserData } = useUserData();
  useEffect(() => {
    removeUserData();
  }, []);

  return (
    <SafeContianer>
      <TopHeader title="My Wishlist" />
      <SearchWithFilter />

      <View style={{ flexDirection: "row", gap: 16, flexWrap: "wrap" }}>
        {/* <GridCard />
        <GridCard />
        <GridCard /> */}
      </View>
    </SafeContianer>
  );
};

export default wishlist;
