import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";

import { fontSize, paddingSizes } from "../../utils/sizes";
import { colors } from "../../utils/colors";
import { RoundedButton } from "../../components/RoundedButton";

const HistoryItem = ({ item, index }) => {
  // console.log(item);
  return (
    <Text style={styles.historyItem(item.status)}>
      {item.subject}
      {/* {JSON.stringify(item)} */}
    </Text>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView
        style={{ flex: 0.5, alignItems: "center" }}
      >
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>
              Things we've focused on
            </Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{
                flex: 1,
                alignItems: "center",
              }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? "red" : "green",
    fontSize: fontSize.md,
  }),
  title: {
    color: colors.white,
    fontSize: fontSize.lg,
  },
});
