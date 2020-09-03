import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  let [input, setInput] = useState("")
  let [toggle, setToggle] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi</Text>
      <Text style={styles.text} >What is your name?</Text>
      <TextInput
        placeholder="Enter your name"
        value={input}
        style={styles.input}
        onChangeText={text => setInput(text)}
      />
      {
        input
          ? (
            <TouchableOpacity onPress={() => setToggle(true)}>
              <Text style={styles.button} >Submit name</Text>
            </TouchableOpacity>)
          : (null)
      }
      {
        toggle
          ? (<Text style={styles.text} >Welcome {input}</Text>)
          : (null)
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: "blue",
    fontSize: 25,
  },

  input: {
    marginTop: 15,
    height: 35,
    width: 275,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 100 / 2,
    textAlign: "center",
    fontSize: 15,
  },

  button: {
    padding: 5,
    marginTop: 15,
    height: 35,
    width: 275,
    borderColor: "black",
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderRadius: 100 / 2,
    textAlign: "center",
    fontSize: 15,
  }
});


export default App;