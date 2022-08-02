import { StyleSheet, Button, View, TextInput, Modal, Image } from "react-native";
import { useState } from "react";

function Goalinput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.InputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonsView}>
          <View style={styles.button}>
            <Button title="Cancel"  onPress={props.onCancel} color= "#f31282"/>
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal"  />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default Goalinput;

const styles = StyleSheet.create({
  InputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ffff',
  },
  textInput: {
    borderWidth: 1,
    color: "white",
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    width: "98%",
    padding: 5,
    height:50,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonsView: {
    flexDirection: "row",
  },
  button:{
    marginHorizontal: 5,
    marginTop:10,
    width: "30%",
  },
  image: {
    width: 100,
    height: 100,
  }
});
