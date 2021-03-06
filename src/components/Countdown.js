import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import { paddingSizes, fontSize } from "../utils/sizes";
import { colors } from "../utils/colors";

const minutesToMills = (min) => min * 1000 * 60;
const formatTime = (time) =>
  time < 10 ? `0${time}` : time;

export const Countdown = ({
  minutes = 0.1,
  isPaused,
  onProgress,
  onEnd,
}) => {
  const interval = React.useRef(null);

  const countDown = () => {
    setMills((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMills(minutesToMills(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(mills / minutesToMills(minutes));
    if (mills === 0) {
      onEnd();
    }
  }, [mills]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const [mills, setMills] = useState(
    minutesToMills(minutes)
  );

  const minute = Math.floor(mills / 1000 / 60) % 60;
  const seconds = Math.floor(mills / 1000) % 60;
  return (
    <View>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.xl2,
    fontWeight: "bold",
    color: colors.white,
    padding: paddingSizes.lg,
    backgroundColor: "rgba(94, 132, 226,0.3)",
  },
});
