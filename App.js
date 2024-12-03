import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

const Screen1 = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text>Hello Screen1!</Text>
      <TextInput style={styles.textInput} value={name} onChangeText={setName} placeholder="Type your username here" />
      <Button title="Go to Screen 2" onPress={() => navigation.navigate("Screen2")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: "blue",
  },
  box2: {
    flex: 12,
    backgroundColor: "red",
  },
  box3: {
    flex: 5,
    backgroundColor: "green",
  },
});

export default App;
