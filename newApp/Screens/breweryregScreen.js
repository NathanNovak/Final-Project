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
              placeholder="Enter Brewery Name"
              placeholderTextColor="black"
              keyboardType="default"
              value={this.state.breweryname}
              onChangeText={breweryname => this.setState({ breweryname })}
            />
            <Input
              placeholder="Enter Street Address"
              placeholderTextColor="black"
              keyboardType="default"
              value={this.state.streetaddress}
              onChangeText={streetaddress => this.setState({ streetaddress })}
            />
            <Input
              placeholder="Enter City"
              placeholderTextColor="black"
              keyboardType="default"
              value={this.state.city}
              onChangeText={city => this.setState({ city })}
            />
            <Input
              placeholder="Enter State"
              placeholderTextColor="black"
              keyboardType="default"
              value={this.state.st}
              onChangeText={st => this.setState({ st })}
            />
            <Input
              placeholder="Enter Zipcode"
              placeholderTextColor="black"
              keyboardType="numeric"
              value={this.state.zipcode}
              onChangeText={zipcode => this.setState({ zipcode })}
            />
            <Input
              placeholder="Enter Phonenumber"
              placeholderTextColor="black"
              keyboardType="numbers-and-punctuation"
              value={this.state.phonenumber}
              onChangeText={phonenumber => this.setState({ phonenumber })}
            />
            <Input
              placeholder="Enter Hours of Operation"
              placeholderTextColor="black"
              keyboardType="numbers-and-punctuation"
              value={this.state.hours}
              onChangeText={hours => this.setState({ hours })}
            />
            <Input
              placeholder="Enter Email "
              placeholderTextColor="black"
              keyboardType="email-address"
              value={this.state.emailaddress}
              onChangeText={emailaddress => this.setState({ emailaddress })}
            />
            <PasswordInputText
              placeholder="Password"
              placeholderTextColor="black"
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
    fontSize: 28,
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
  },
  inputStyle: {}
});
