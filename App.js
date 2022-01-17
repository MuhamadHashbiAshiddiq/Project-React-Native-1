import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Focus } from "./src/features/focus/Focus";
import { Timer } from "./src/features/timer/Timer";
import { colors } from "./src/utils/colors";
import { paddingSizes } from "./src/utils/sizes";

export default function App() {
  const [focusSubject, setFocusSubject] = useState();
  const [focusHistory, setFocusHistory] = useState([]);

  useEffect(() => {
    if (focusSubject) {
      setFocusHistory([...focusHistory, , focusSubject]);
    }
  }, [focusSubject]);

  console.log(focusHistory);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            setFocusSubject(null);
          }}
          clearSubject={() => setFocusSubject(null)}
        />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:
      Platform.OS === "ios"
        ? paddingSizes.md
        : paddingSizes.lg,
    backgroundColor: colors.darkBlue,
  },
});
