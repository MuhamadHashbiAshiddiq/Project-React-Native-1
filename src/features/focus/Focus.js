import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";
import {
  fontSize,
  paddingSizes,
  spacing,
} from "../../utils/sizes";
import { colors } from "../../utils/colors";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>
          What would you like to focus on?
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md }}
            onChange={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
              // console.log("subject value set " + subject);
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              // console.log("value passed!");
              addSubject(subject);
              // console.log(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },

  innerContainer: {
    flex: 0.5,
    padding: paddingSizes.md,
    justifyContent: "center",
  },

  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSize.lg,
  },

  inputContainer: {
    paddingTop: paddingSizes.md,
    flexDirection: "row",
    alignItems: "center",
  },
});
