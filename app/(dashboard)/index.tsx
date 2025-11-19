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
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}
