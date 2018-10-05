import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Constants, Icons } from "expo";

class NavBar extends Component {
  render() {
    return (
      <View>
        <View style={styles.statusBar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#d3d3d3",
    height: Constants.statusBarHeight,
    paddingTop: 80,
    opacity: 0.7
  }
});

export default NavBar;
