import { useCategory } from "@/stores/cateogyStore";
import React from "react";
import { View } from "react-native";
import CategoryItem from "./CategoryItem";

const CategorySelector = () => {
  const { cateogries, selectedCategoryIdx, setSelectedCategoryIdx } =
    useCategory();

  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      {cateogries.map((item, index) => (
        <CategoryItem
          key={index}
          title={item}
          isSelected={selectedCategoryIdx === index}
          onPress={() => setSelectedCategoryIdx(index)}
        />
      ))}
    </View>
  );
};

export default CategorySelector;
