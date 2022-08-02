import { Pressable, StyleSheet, Text, View } from "react-native";

function Goalitem(props) {
  return (
    <View style={styles.eachGoalsContainer}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={({pressed})=> pressed && styles.pressedItem}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text
          style={{
            fontSize: 16,
            color: "white",
            fontWeight: "600",
            padding: 10,
          }}
        >
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
}

export default Goalitem;

const styles = StyleSheet.create({
  eachGoalsContainer: {
    margin: 1,
    backgroundColor: "#0096FF",
    borderRadius: 10,
  },
  pressedItem: {
    opacity: 0.6,
    backgroundColor: "#ffff"
  }
});
