import { Tabs } from "expo-router";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="image"
        options={{
          headerShown: false,
          title: "Image",
          tabBarIcon: ({ color }) => (
            <Entypo name="image" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="anni"
        options={{
          headerShown: false,
          title: "You&Me",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="robot-love-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
