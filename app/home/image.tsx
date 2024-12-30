import React from "react";
import { View } from "react-native";
import ImageSlider from "../../components/imageSlider";
import { ImageData } from "../../data/imageData";

const Image = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageSlider itemList={ImageData} />
    </View>
  );
};

export default Image;
