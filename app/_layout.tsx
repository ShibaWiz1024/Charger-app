import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="account" options={{ title: "account", headerBackTitle: "返回" }} />
        <Stack.Screen name="change-password" options={{ title: "change-password", headerBackTitle: "返回" }} />
        <Stack.Screen name="logout" options={{ title: "logout", headerBackTitle: "返回" }} />
        <Stack.Screen name="+not-found" options={{}} />
      </Stack>
    </>
  );
}
