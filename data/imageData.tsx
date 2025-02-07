import { ImageSourcePropType } from "react-native";

export type ImageDataProps = {
  title: string;
  image: ImageSourcePropType;
  description: string;
};

export const ImageData = [
  {
    title: "The Love of My Life",
    image: require("../assets/images/image1.jpg"),
    description: "Every moment with you is magical. You are my heart, my soul, my everything.",
  },
  {
    title: "My Beautiful Angel",
    image: require("../assets/images/image2.jpg"),
    description: "Your smile lights up my world like the sun brightens the sky. I love you endlessly.",
  },
  {
    title: "My Heartbeat",
    image: require("../assets/images/image3.jpg"),
    description: "No matter where life takes us, my love for you will never change. You're my forever.",
  },
  {
    title: "The One I Cherish",
    image: require("../assets/images/image4.jpg"),
    description: "You are the queen of my heart, the reason for my happiness, and the love of my life.",
  },
  {
    title: "My Missing Piece",
    image: require("../assets/images/image5.jpg"),
    description: "With you, I have found my missing piece. You complete me in every way.",
  },
  {
    title: "The Reason I Smile",
    image: require("../assets/images/image7.jpg"),
    description: "No words can express how much you mean to me. You are my greatest gift.",
  },
  {
    title: "My Greatest Blessing",
    image: require("../assets/images/image8.jpg"),
    description: "I used to dream of love like this, and then I found you. You are my dream come true.",
  },
];
