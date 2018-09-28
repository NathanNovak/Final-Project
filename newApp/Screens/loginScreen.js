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

class loginScreen extends Component {
  state = {
    isVisible: true,
    emailaddress: "",
    password: ""
  };

  static navigationOptions = {
    header: null
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
              placeholder="Email"
              rightIcon={<Icon name="user" size={24} color="black" />}
              keyboardType="email-address"
              value={this.state.emailaddress}
              onChangeText={emailaddress => this.setState({ emailaddress })}
            />
            <PasswordInputText
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            <Button
              icon={<Icon name="sign-in" size={15} color="white" />}
              title="LOG IN"
              onPress={() => this.props.navigation.navigate("Home")}
              buttonStyle={{
                borderRadius: 5,
                width: 200,
                alignSelf: "center",
                margin: 5
              }}
            />
            <Button
              title="REGISTER USER"
              onPress={() => this.props.navigation.navigate("UserReg")}
              buttonStyle={{
                borderRadius: 5,
                width: 200,
                alignSelf: "center",
                margin: 5
              }}
            />
            <Button 
              title="REGISTER BREWERY"
              onPress={() => this.props.navigation.navigate("BrewReg")}
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

export default loginScreen;

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
