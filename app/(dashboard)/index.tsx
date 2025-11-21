import MultiBannerLarge from "@/components/Banner/MultiBannerLarge";
import DashboardTopHeader from "@/components/ui/DashboardTopHeader";
import SearchWithFilter from "@/components/ui/SearchWithFilter";
import { Colors } from "@/contants/Colors";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView
          style={{
            flex: 1,
            paddingHorizontal: 16,
            backgroundColor: Colors.background,
            gap: 16,
          }}
        >
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
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}
