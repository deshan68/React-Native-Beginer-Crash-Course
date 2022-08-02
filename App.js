import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Goalitem from "./components/Goalitem";
import Goalinput from "./components/Goalinput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function StartmodalVisibleHandler() {
    setModalIsVisible(true);
  }
  function EndtmodalVisibleHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    EndtmodalVisibleHandler();
  }

  function DeleteItem(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.Appcontainer}>
      <Button
        title="Add new Goal"
        color={"#0096FF"}
        onPress={StartmodalVisibleHandler}
      />
      <Goalinput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={EndtmodalVisibleHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <Goalitem
                text={itemData.item.text}
                onDeleteItem={DeleteItem}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
    );
}

const styles = StyleSheet.create({
  Appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 8,
  },
  eachGoalsContainer: {
    padding: 10,
    margin: 1,
    backgroundColor: "#0099FF",
    borderRadius: 10,
  },
});
