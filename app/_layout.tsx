import LottieLoader from "@/components/ui/LottieLoader";
import { useLoader } from "@/stores/loaderStore";
import { useUserData } from "@/stores/userDataStore";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const { userData } = useUserData();

  // Font loading
  const [fontLoaded, fontError] = useFonts({
    "SN-Bold": require("@/assets/fonts/Quicksand-Bold.ttf"),
    "SN-Light": require("@/assets/fonts/Quicksand-Light.ttf"),
    "SN-Medium": require("@/assets/fonts/Quicksand-Medium.ttf"),
    "SN-Regular": require("@/assets/fonts/Quicksand-Regular.ttf"),
    "SN-SemiBold": require("@/assets/fonts/Quicksand-SemiBold.ttf"),
  });

  const loaderRef = useRef<LottieView>(null);

  const { isLoading } = useLoader();

  useEffect(() => {
    if (isLoading) loaderRef.current?.play();
    else loaderRef.current?.pause();
  }, [isLoading]);

  // Check font loading and hide splash screen
  useEffect(() => {
    if (fontLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);

  // Check authentication and route accordingly
  useEffect(() => {
    if (fontLoaded || fontError) {
      if (!userData.email) {
        router.replace("/auth/getStarted");
      } else {
        router.replace("/(dashboard)");
      }
    }
  }, [fontLoaded, fontError, userData.email]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />

      {/* LOADER CODE */}
      {isLoading && (
        <LottieLoader
          source={require("@/assets/animation/loader.json")}
          ref={loaderRef}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />
      )}
    </GestureHandlerRootView>
  );
}
