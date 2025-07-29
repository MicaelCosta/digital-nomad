import { Redirect, Stack } from "expo-router";
import React from "react";

const IsSignedIn = false;

export default function ProtectedLayout() {
  if (IsSignedIn) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
