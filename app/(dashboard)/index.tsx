import MultiBannerLarge from "@/components/Banner/MultiBannerLarge";
import DashboardTopHeader from "@/components/Header/DashboardTopHeader";
import CategorySelector from "@/components/Product/CategorySelector";
import SafeContianer from "@/components/ui/SafeContianer";
import SearchWithFilter from "@/components/ui/SearchWithFilter";
import SectionTitle from "@/components/ui/SectionTitle";
import { getProducts } from "@/services/api/products.api";
import { useCategory } from "@/stores/cateogyStore";
import { useLoader } from "@/stores/loaderState";
import { useProduct } from "@/stores/productStore";
import { Image } from "expo-image";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

export default function Index() {
  const { setIsLoading } = useLoader();
  const { products } = useProduct();
  const { setCategories } = useCategory();

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
      <Image
        source={{ uri: products[0]?.imageUrl }}
        style={{ height: 100, width: 100 }}
        contentFit="cover"
      />
    </SafeContianer>
  );
}
