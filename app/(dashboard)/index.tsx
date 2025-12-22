import MultiBannerLarge from "@/components/Banner/MultiBannerLarge";
import DashboardTopHeader from "@/components/Header/DashboardTopHeader";
import CategorySelector from "@/components/Product/CategorySelector";
import GridCard from "@/components/Product/GridCard";
import SafeContianer from "@/components/ui/SafeContianer";
import SearchWithFilter from "@/components/ui/SearchWithFilter";
import SectionTitle from "@/components/ui/SectionTitle";
import { getProducts } from "@/services/api/products.api";
import { useCategory } from "@/stores/cateogyStore";
import { useLoader } from "@/stores/loaderStore";
import { useProduct } from "@/stores/productStore";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { ScrollView, View } from "react-native";

export default function Index() {
  const { setCategories } = useCategory();
  const { setIsLoading } = useLoader();
  const { products } = useProduct();

  useFocusEffect(
    useCallback(() => {
      setIsLoading(true);
      const makeAPICall = async () => {
        try {
          await getProducts();
          // MAKE CATEGORY API CALL HERE
          setCategories(["All", "Men", "Women", "Kids", "Accessories"]);
        } finally {
          setIsLoading(false);
        }
      };
      makeAPICall();
    }, [])
  );

  return (
    <SafeContianer>
      <DashboardTopHeader />

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
      >
        <SearchWithFilter />

        <SectionTitle title="Categories" />
        <CategorySelector />

        <MultiBannerLarge
          bannerList={[
            {
              id: "123",
              title: "Get Your Special Sale Upto 40%",
              imageUrl: require("@/assets/images/dummy/dummy-1.png"),
              actionTitle: "Shop Now",
            },
            {
              id: "1234",
              title: "Test2",
              imageUrl: require("@/assets/images/dummy/dummy-2.png"),
            },
            {
              id: "12345",
              title: "Test3",
              imageUrl: require("@/assets/images/dummy/dummy-1.png"),
              actionTitle: "Shop Now",
            },
            {
              id: "123456",
              title: "Test4",
              imageUrl: require("@/assets/images/dummy/dummy-2.png"),
            },
          ]}
        />

        <SectionTitle title="Popular Products" />
        <View style={{ flexDirection: "row", gap: 16, flexWrap: "wrap" }}>
          {products.map((product) => (
            <GridCard
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </View>
      </ScrollView>
    </SafeContianer>
  );
}
