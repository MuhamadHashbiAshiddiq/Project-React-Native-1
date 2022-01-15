import React from "react";
import {
  TouchbableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchbableOpacity style={[styles(size).radius, style]}>
      <Text style={[styles(size).text, textStyle]}>
        {props.title}
      </Text>
    </TouchbableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      borderColor: "#fff",
      borderWidth: 2,
    },
    text: {
      color: "#fff",
      fontSize: size / 3,
    },
  });
  
