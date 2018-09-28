import React, { Component } from "react";
import { StyleSheet, ImageBackground } from "react-native";
class photoScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/beer-background.jpg")}
        style={styles.container}
      />
    );
  }
}

export default photoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});
