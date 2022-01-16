import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import { RoundedButton } from "../../components/RoundedButton";
import { Countdown } from "../../components/Countdown";
import { colors } from "../../utils/colors";
import { paddingSizes } from "../../utils/sizes";

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} />
      </View>
      <View style={{ paddingTop: paddingSizes.xxl }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.buttonWrapper}>
      {isStarted ? (
        <RoundedButton
          title="pause"
          onPress={() => setIsStarted(false)}
        />
      ) : (
        <RoundedButton
          title="start"
          onPress={() => setIsStarted(true)}
        />
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: "center",
  },
  task: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    padding: paddingSizes.md,
    justifyContent: "center",
    alignItems: "center",
  }
});
