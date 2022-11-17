import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickNumberHanlder = (pickNumber) => {
    setUserNumber(pickNumber);
  };

  let screen = <StartGameScreen onPickHandler={pickNumberHanlder} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient colors={["#3b021f", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/image1.jpg")}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: "#ddb52f",
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
