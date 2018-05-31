import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "red",
    height: 60,
    paddingTop: 15,
    elevation: 7,
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },

  textStyle: {
    fontSize: 30,
    color: "white"
  }
};

export default Header;
