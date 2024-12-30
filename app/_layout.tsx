import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="home"
        options={{ animation: "slide_from_right", headerShown: false }}
      />
    </Stack>
  );
};

export default Layout;
