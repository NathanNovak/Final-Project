import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Alert,
  ScrollView
} from "react-native";
import PasswordInputText from "react-native-hide-show-password-input";
import { Input, Button, Overlay, FormLabel, FormInput, FormValidationMessage } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class breweryregScreen extends Component {
  state = {
    isVisible: true,
    
    password: "",
    breweryname: "",
    streetaddress: "",
    emailaddress: "",
    password: "",
    phonenumber:"",
    city:"",
    st:"",
    hours:"",
    zipcode:"",
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
              placeholder="Enter Brewery Name"
              keyboardType="default"
              value={this.state.breweryname}
              onChangeText={breweryname => this.setState({breweryname})}
            />
            <Input
              placeholder="Enter Street Address"
              keyboardType="default"
              value={this.state.streetaddress}
              onChangeText={streetaddress => this.setState({streetaddress})}
            />
            <Input
              placeholder="Enter City"
              keyboardType="default"
              value={this.state.city}
              onChangeText={city => this.setState({city})}
            />
            <Input
              placeholder="Enter State"
              keyboardType="default"
              value={this.state.st}
              onChangeText={st => this.setState({st})}
            />
            <Input
              placeholder="Enter Zipcode"
              keyboardType="numeric"
              value={this.state.zipcode}
              onChangeText={zipcode=> this.setState({zipcode})}
            />
            <Input
              placeholder="Enter Phonenumber"
              keyboardType="numbers-and-punctuation"
              value={this.state.phonenumber}
              onChangeText={phonenumber => this.setState({ phonenumber })}
            />
             <Input
              placeholder="Enter Hours of Operation"
              keyboardType="numbers-and-punctuation"
              value={this.state.hours}
              onChangeText={hours => this.setState({ hours })}
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

export default breweryregScreen;

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
