import MultiBannerLarge from "@/components/Banner/MultiBannerLarge";
import DashboardTopHeader from "@/components/ui/DashboardTopHeader";
import SafeContianer from "@/components/ui/SafeContianer";
import SearchWithFilter from "@/components/ui/SearchWithFilter";

export default function Index() {
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
    </SafeContianer>
  );
}
