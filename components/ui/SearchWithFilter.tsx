import { Colors } from "@/contants/Colors";
import { Icons } from "@/contants/Icons";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import ButtonIcon from "./ButtonIcon";
import InputField from "./InputField";

const SearchWithFilter = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
      <InputField
        placeholder="Search"
        leftComponent={
          <Image
            source={Icons.Search}
            style={{
              width: 20,
              height: 20,
              marginRight: 14,
              tintColor: Colors.gray,
            }}
          />
        }
      />
      <ButtonIcon icon={Icons.Setting} />
    </View>
  );
};

export default SearchWithFilter;
