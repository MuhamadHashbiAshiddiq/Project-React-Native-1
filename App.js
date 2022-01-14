import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);

  return <View style={styles.container}>{focusSubject ? <Text>Here is where im going to build a timer</Text> : <Text>Here i want to build an input for a subject</Text>}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
});
