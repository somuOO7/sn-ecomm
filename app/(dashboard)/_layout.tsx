import DashboardBottomTabItem from "@/components/Tab/DashboardBottomTabItem";
import { Icons } from "@/contants/Icons";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import { StyleSheet } from "react-native";

export default function Layout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList style={styles.tabContainer}>
        <TabTrigger href="/" name="Home" asChild>
          <DashboardBottomTabItem
            selectedIcon={Icons.HomeFill}
            unselectedIcon={Icons.HomeOutline}
            label="Home"
          />
        </TabTrigger>
        <TabTrigger href="/shopping" name="Shopping" asChild>
          <DashboardBottomTabItem
            selectedIcon={Icons.ShoppingBagFill}
            unselectedIcon={Icons.ShoppingBagOutline}
            label="Shopping"
          />
        </TabTrigger>
        <TabTrigger href="/wishlist" name="Wishlist" asChild>
          <DashboardBottomTabItem
            selectedIcon={Icons.HeartFill}
            unselectedIcon={Icons.HeartOutline}
            label="Wishlist"
          />
        </TabTrigger>
        <TabTrigger href="/account" name="Account" asChild>
          <DashboardBottomTabItem
            selectedIcon={Icons.ProfileFill}
            unselectedIcon={Icons.ProfileOutline}
            label="Account"
          />
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: "white",
    paddingHorizontal: 18,
    paddingBottom: 28,
  },
});
