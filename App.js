import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [GameIsOver, setGameIsOver] = useState(true);

  const pickNumberHanlder = (pickNumber) => {
    setUserNumber(pickNumber);
    setGameIsOver(false);
  };

  let screen = <StartGameScreen onPickHandler={pickNumberHanlder} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={setGameIsOver} />;
  }

  if (GameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent500]}
      style={styles.rootScreen}
    >
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
    // backgroundColor: Colors.accent500,
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
