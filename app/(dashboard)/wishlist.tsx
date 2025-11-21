import GridCard from "@/components/Product/GridCard";
import SafeContianer from "@/components/ui/SafeContianer";
import SearchWithFilter from "@/components/ui/SearchWithFilter";
import TopHeader from "@/components/ui/TopHeader";
import React from "react";

const wishlist = () => {
  return (
    <SafeContianer>
      <TopHeader title="My Wishlist" />
      <SearchWithFilter />

      <GridCard />
    </SafeContianer>
  );
};

export default wishlist;
