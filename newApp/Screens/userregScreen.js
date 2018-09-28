import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Alert
} from "react-native";
import PasswordInputText from "react-native-hide-show-password-input";
import { Input, Button, Overlay } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class userregScreen extends Component {
  state = {
    isVisible: true,
    fname: "",
    lname: "",
    emailaddress: "",
    password: "",
    phonenumber: "",
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/beer-background.jpg")}
        style={styles.container}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <Text style={styles.header}>S P E N T G R A I N S</Text>
          </View>
          <Overlay isVisible={this.state.isVisible}>
          <Input
              placeholder="Enter First Name"
              keyboardType="default"
              value={this.state.fname}
              onChangeText={fname => this.setState({fname})}
            />
            <Input
              placeholder="Enter Last Name"
              keyboardType="default"
              value={this.state.lname}
              onChangeText={lname => this.setState({lname})}
            />
          <Input
              placeholder="Enter Phonenumber"
              keyboardType="numbers-and-punctuation"
              value={this.state.phonenumber}
              onChangeText={phonenumber => this.setState({ phonenumber })}
          />
            <Input
              placeholder="Enter Email "
              keyboardType="email-address"
              value={this.state.emailaddress}
              onChangeText={emailaddress => this.setState({ emailaddress })}
            />
            <PasswordInputText
              placeholder="Create Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            <Button
              title="GO TO PROFILE"
              onPress={() => this.props.navigation.navigate("Profile")}
              buttonStyle={{
                borderRadius: 5,
                width: 200,
                alignSelf: "center",
                margin: 5
              }}
            />
          </Overlay>
        </View>
      </ImageBackground>
    );
  }
}

export default userregScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  overlayContainer: {
    flex: 1
  },
  top: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    color: "black",
    fontSize: 28,
    borderColor: "black",
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "white"
  }
});
