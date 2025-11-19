import Label from "@/components/ui/Label";
import TopHeader from "@/components/ui/TopHeader";
import { Colors } from "@/contants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 16,
          backgroundColor: Colors.background,
        }}
      >
        <TopHeader />
        <Label>Dashboard Home</Label>
      </SafeAreaView>
    </>
  );
}
