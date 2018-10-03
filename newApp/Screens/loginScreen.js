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
import { Input, Button, Overlay, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import RF from "react-native-responsive-fontsize";

class loginScreen extends Component {
  state = {
    isVisible: true,
    user: "",
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
        <View>
          <Text
            style={styles.header}
            containerStyle={{ backgroundColor: "#d3d3d3", opacity: 0.7 }}
          >
            S P E N T G R A I N S
          </Text>

          <Card
            style={styles.overlayContainer}
            containerStyle={{ backgroundColor: "#d3d3d3", opacity: 0.7 }}
            isVisible={this.state.isVisible}
          >
            <Input
              style={styles.inputStyle}
              placeholderTextColor="black"
              placeholder="Email"
              rightIcon={<Icon name="user" size={24} color="black" />}
              keyboardType="email-address"
              value={this.state.user}
              onChangeText={user => this.setState({ user })}
            />
            <PasswordInputText
              placeholder="Password"
              placeholderTextColor="black"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            <Button
              buttonStyle={{
                backgroundColor: "black",
                borderRadius: 5,
                width: 200,
                alignSelf: "center",
                margin: 5,
              }}
              icon={<Icon name="sign-in" size={15} color="white" />}
              title="LOG IN"
              onPress={() => this.props.navigation.navigate("Home")}
            />
            <Button
              buttonStyle={{
                backgroundColor: "black",
                borderRadius: 5,
                width: 200,
                alignSelf: "center",
                margin: 5,
              }}
              title="REGISTER USER"
              onPress={() => this.props.navigation.navigate("UserReg")}
            />
            <Button
              buttonStyle={{
                backgroundColor: "black",
                borderRadius: 5,
                width: 200,
                alignSelf: "center",
                margin: 5,
                zIndex: 1
              }}
              title="REGISTER BREWERY"
              onPress={() => this.props.navigation.navigate("BrewReg")}
            />
          </Card>
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
  header: {
    textAlign: "center",
    color: "black",
    padding: 20,
    fontSize: RF(4),
    borderColor: "black",
    borderWidth: 2,
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "20%",
    backgroundColor: "#d3d3d3"
  },
  overlayContainer: {
    color: "black",
    alignItems: "center",
    height: "50%",
    backgroundColor: "#d3d3d3"
  }
});
