import React, { useRef, useState } from "react";
import { View, ViewToken } from "react-native";
import { ImageDataProps } from "../data/imageData";
import ImageSliderItem from "./imageSliderItem";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Pagination from "./pagination";

type ImageSliderProps = {
  itemList: ImageDataProps[];
};
const ImageSlider = ({ itemList }: ImageSliderProps) => {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });
  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index);
    }
  };
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);
  return (
    <View style={{ position: "relative" }}>
      <Animated.FlatList
        data={itemList}
        renderItem={({ item, index }) => (
          <ImageSliderItem item={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <View
        style={{
          position: "absolute",
          bottom: 50, // Adjust as needed to bring pagination closer to the image
          width: "100%",
          alignItems: "center", // Center align the pagination
        }}
      >
        <Pagination
          item={itemList}
          scrollX={scrollX}
          paginationIndex={paginationIndex}
        />
      </View>
    </View>
  );
};

export default ImageSlider;
