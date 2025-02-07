// import LottieView from "lottie-react-native";
// import React, { useEffect, useState } from "react";
// import { Text, View } from "react-native";

// const Anni = () => {
//   const [totalDays, setTotalDays] = useState<number>(0);

//   useEffect(() => {
//     const calculateTotalDays = () => {
//       const firstDay = new Date(2024, 1, 13);
//       const today = new Date();
//       const diff = today.getTime() - firstDay.getTime();
//       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//       setTotalDays(days);
//     };

//     calculateTotalDays();
//   }, []);
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text style={{ fontSize: 26 }}>We have been together for </Text>
//         <Text
//           style={{
//             fontSize: 60,
//             fontWeight: 900,
//             marginTop: 10,
//           }}
//         >
//           {totalDays} days
//         </Text>
//       </View>
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <LottieView
//           source={require("../../assets/annimation/onboard4.json")}
//           autoPlay
//           loop
//           style={{ width: 500, height: 500 }}
//         />
//       </View>
//     </View>
//   );
// };

// export default Anni;
import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Anni = () => {
  const [totalDays, setTotalDays] = useState<number>(0);
  const [isAnniversary, setIsAnniversary] = useState<boolean>(false);

  useEffect(() => {
    const calculateTotalDays = () => {
      const firstDay = new Date(2024, 1, 13); // February 13, 2024
      const today = new Date();

      // Calculate the difference in days
      const diff = today.getTime() - firstDay.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      setTotalDays(days);

      // Check if today is February 13th
      if (today.getDate() === 13 && today.getMonth() === 1) {
        setIsAnniversary(true);
      }
    };

    calculateTotalDays();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {isAnniversary ? (
          <>
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "red" }}>
          🎉Yay🎉
        </Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "red" }}>
          
          Happy Anniversary, My Love! ❤️
          </Text>
          </>
        ) : (
          <>
            <Text style={{ fontSize: 26 }}>We have been together for</Text>
            <Text style={{ fontSize: 60, fontWeight: "900", marginTop: 10 }}>
              {totalDays} days
            </Text>
          </>
        )}
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LottieView
          source={require("../../assets/annimation/onboard4.json")}
          autoPlay
          loop
          style={{ width: 500, height: 500 }}
        />
      </View>
    </View>
  );
};

export default Anni;
