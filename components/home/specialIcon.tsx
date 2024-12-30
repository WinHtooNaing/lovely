import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SpecialIcon = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/annimation/special.json")}
        autoPlay
        loop
        style={{ width: 150, height: 150 }}
      />
      <Text style={{ fontSize: 20, fontWeight: 800 }}>Our memorable days</Text>
    </View>
  );
};

export default SpecialIcon;

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
});
