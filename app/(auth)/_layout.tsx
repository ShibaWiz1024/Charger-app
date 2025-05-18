import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true, // 如果你希望隱藏標題列可以改成 false
      }}
    />
  );
}
