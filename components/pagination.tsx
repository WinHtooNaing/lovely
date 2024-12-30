import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ImageDataProps } from "../data/imageData";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type PaginationProps = {
  item: ImageDataProps[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
};
const { width } = Dimensions.get("screen");
const Pagination = ({ item, paginationIndex, scrollX }: PaginationProps) => {
  return (
    <View style={styles.container}>
      {item.map((_, index) => {
        const pgAnimationStyle = useAnimatedStyle(() => {
          const dotWidth = interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [8, 20, 8],
            Extrapolation.CLAMP
          );
          return { width: dotWidth };
        });
        return (
          <Animated.View
            style={[
              styles.dot,
              pgAnimationStyle,
              { backgroundColor: paginationIndex === index ? "#222" : "#aaa" },
            ]}
            key={index}
          />
        );
      })}
    </View>
  );
};

export default Pagination;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    backgroundColor: "#aaa",
    height: 8,
    width: 8,
    marginHorizontal: 2,
    borderRadius: 8,
  },
});
