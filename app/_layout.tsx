import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();

  // Font loading
  const [fontLoaded, fontError] = useFonts({
    "SN-Bold": require("@/assets/fonts/Quicksand-Bold.ttf"),
    "SN-Light": require("@/assets/fonts/Quicksand-Light.ttf"),
    "SN-Medium": require("@/assets/fonts/Quicksand-Medium.ttf"),
    "SN-Regular": require("@/assets/fonts/Quicksand-Regular.ttf"),
    "SN-SemiBold": require("@/assets/fonts/Quicksand-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);

  return (
    <Stack
      screenOptions={{
        headerLeft: ({ canGoBack }) =>
          canGoBack ? (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          ) : null,
      }}
    />
  );
}
