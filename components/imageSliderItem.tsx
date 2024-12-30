import React, { useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { ImageDataProps } from "../data/imageData";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
type ImageSliderItemProps = {
  item: ImageDataProps;
  index: number;
  scrollX: SharedValue<number>;
};
const { width } = Dimensions.get("screen");
const ImageSliderItem = ({ item, index, scrollX }: ImageSliderItemProps) => {
  const [color, setColor] = useState(false);
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],

            [-width * 0.25, 0, width * 0.25],

            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],

            [0.9, 1, 0.9],

            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          width,
          gap: 20,
        },
        rnAnimatedStyle,
      ]}
    >
      <Image
        source={item.image}
        style={{ width: 300, height: 500, borderRadius: 20 }}
      />
      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
        style={{
          position: "absolute",
          width: 300,
          height: 500,
          padding: 20,
          borderRadius: 20,
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              padding: 5,
              borderRadius: 30,
            }}
            onPress={() => {
              setColor(!color);
            }}
          >
            <Ionicons
              name="heart-outline"
              size={24}
              color={color ? "pink" : "white"}
            />
          </TouchableOpacity>
        </View>
        <View style={{ gap: 10 }}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "600",
              letterSpacing: 1.5,
            }}
          >
            {item.title}
          </Text>
          <Text style={{ color: "white", fontSize: 12, letterSpacing: 1.2 }}>
            {item.description}
          </Text>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

export default ImageSliderItem;
