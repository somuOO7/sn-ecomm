import MultiBannerLarge from "@/components/Banner/MultiBannerLarge";
import SearchWithFilter from "@/components/ui/SearchWithFilter";
import TopHeader from "@/components/ui/TopHeader";
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
          <TopHeader />
          <SearchWithFilter />
          <MultiBannerLarge
            bannerList={[
              {
                id: "123",
                title: "Get Your Special Sale Upto 40%",
                imageUrl: require("@/assets/images/dummy/dummy-1.png"),
              },
              {
                id: "1234",
                title: "Test2",
                imageUrl: require("@/assets/images/dummy/dummy-2.png"),
              },
              { id: "12345", title: "Test3" },
              { id: "123456", title: "Test4" },
            ]}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}
