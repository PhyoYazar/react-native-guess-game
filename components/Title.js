import { Text, StyleSheet } from "react-native";

// import Colors from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    // color: Colors.accent500,
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    // borderColor: Colors.accent500,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
