import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function StartGameScreen({ onPickHandler }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputhHandler }]
      );

      return;
    }

    onPickHandler(chosenNumber);
  };

  const resetInputhHandler = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>

      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          onChangeText={(entereText) => setEnteredNumber(entereText)}
          autoCorrect={false}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputhHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  // instructionText: {
  //   color: Colors.accent500,
  // },

  // inputContainer: {
  //   justifyContent: "center",
  //   alignItems: "center",

  //   marginHorizontal: 24,
  //   marginTop: 32,
  //   padding: 16,
  //   backgroundColor: Colors.primary700,
  //   borderRadius: 8,

  //   //* only for android
  //   elevation: 4,

  //   //* only for IOS
  //   shadowColor: "black",
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowRadius: 6,
  //   shadowOpacity: 1,
  // },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },
});
