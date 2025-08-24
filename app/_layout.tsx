import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// 👇 新增：i18n Provider
import { I18nextProvider } from "react-i18next";
import "../i18n";
import i18n from "../i18n";

export default function RootLayout() {
  return (
    <I18nextProvider i18n={i18n}>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{}} />
        <Stack.Screen name="confirm" options={{ headerShown: false }} />
      </Stack>
    </I18nextProvider>
  );
}
