import { StatusBar } from "expo-status-bar";
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { Link } from "expo-router";
const { width, height } = Dimensions.get("screen");
const bgs = ["#A5BBFF", "#7f5539", "#FFAFFC"];
import AntDesign from "@expo/vector-icons/AntDesign";
const DATA = [
  {
    key: "12345",
    image: require("../assets/annimation/onboard1.json"),
    title: "We Will Be Together For the Rest Of Our Lives",
    subtitle: "Done with React Native Onboarding Swiper",
  },
  {
    key: "23424",
    image: require("../assets/annimation/onboard2.json"),
    title: "Thank You For Choosing Me",
    subtitle: "Done with React Native Onboarding Swiper",
  },
  {
    key: "9809",
    image: require("../assets/annimation/onboard3.json"),
    title: "You Are An Important Girl In My Life",
    subtitle: "Done with React Native Onboarding Swiper",
  },
];
const Indicator = ({ scrollX }) => {
  return (
    <View style={{ position: "absolute", bottom: 100, flexDirection: "row" }}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.7, 1, 0.7],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 1, 0.6],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "#fff",
              margin: 10,
              opacity,
              transform: [
                {
                  scale,
                },
              ],
            }}
          />
        );
      })}
    </View>
  );
};
const Backdrop = ({ scrollX }) => {
  const backgroundcolor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor: backgroundcolor,
        },
      ]}
    />
  );
};
export default function Index() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Backdrop scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ paddingBottom: 100 }}
        horizontal
        pagingEnabled
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: "center" }}>
              <View
                style={{
                  flex: 0.7,
                  justifyContent: "center",
                  padding: 20,
                }}
              >
                <LottieView
                  source={item.image}
                  autoPlay
                  loop
                  style={{ width: width / 2, height: width / 2 }}
                />
              </View>
              <View style={{ flex: 0.3 }}>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 20,
                    marginBottom: 10,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Text>
                {/* <Text style={{ fontWeight: 300, color: "#fff", fontSize: 20 }}>
                  {item.subtitle}
                </Text> */}
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
      <View>
        <Pressable
          style={{
            paddingBottom: 20,
          }}
        >
          <Link
            href={"/home"}
            style={{
              paddingHorizontal: 140,
              paddingVertical: 10,
              backgroundColor: "#f07167",
              color: "#fff",
              fontSize: 18,
              borderRadius: 20,
            }}
          >
            <AntDesign
              name="arrowright"
              size={24}
              color="black"
              style={{
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            />
          </Link>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
