import MultiBannerLarge from "@/components/Banner/MultiBannerLarge";
import DashboardTopHeader from "@/components/Header/DashboardTopHeader";
import Label from "@/components/ui/Label";
import SafeContianer from "@/components/ui/SafeContianer";
import SearchWithFilter from "@/components/ui/SearchWithFilter";
import { getProducts } from "@/services/api/products.api";
import { useLoader } from "@/stores/loaderState";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

export default function Index() {
  const { isLoading, setIsLoading } = useLoader();
  useFocusEffect(
    useCallback(() => {
      setIsLoading(true);
      const makeAPICall = async () => {
        try {
          await getProducts();
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

      <Label>Test</Label>
    </SafeContianer>
  );
}
