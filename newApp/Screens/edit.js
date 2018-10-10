import React, { Component } from "react";
import API from "../utils/API";
import {
  Platform,
  StatusBar,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Alert,
  ScrollView,
  Dimensions,
  findNodeHandle,
  TouchableOpacity
} from "react-native";
import PasswordInputText from "react-native-hide-show-password-input";
import { Input, Button, Overlay, Card, Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import RF from "react-native-responsive-fontsize";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class edit extends Component {
  state = {
    isVisible: true,
    breweryname: "",
    streetaddress: "",
    city: "",
    state: "",
    zipcode: "",
    emailaddress: "",
    phonenumber: "",
    password: "",
    hours: ""
  };

  static navigationOptions = {
    header: null
  };

  handleClick = user => {
    // event.preventDefault
    console.log("Test", user);
    API.saveBrewer({
      breweryname: this.state.breweryname,
      phonenumber: this.state.phonenumber,
      hours: this.state.hours,
      description: this.state.description
    });
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/beer-background.jpg")}
        style={styles.container}
      >
        <Header
          outerContainerStyles={{
            backgroundColor: "#d3d3d3",
            height: 75,
            paddingTop: 15,
            opacity: 0.7
          }}
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-left" size={30} color="black" />
            </TouchableOpacity>
          }
          centerComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Brewers")}
            >
              <Icon name="beer" size={30} color="black" />
            </TouchableOpacity>
          }
          rightComponent={
            <TouchableOpacity
              onPress={() => {
                this.props.screenProps.logoutUser(this.state).then(x => {
                  this.props.navigation.navigate("Login");
                });
              }}
            >
              <Icon name="home" size={30} color="black" />
            </TouchableOpacity>
          }
        />
        <View>
          <KeyboardAwareScrollView
            keyboardDismissMode="on-drag"
            ref="scrollView"
            style={{
              marginBottom: "20%"
            }}
          >
            <Card
              style={styles.overlayContainer}
              containerStyle={{
                backgroundColor: "#d3d3d3",
                opacity: 0.7,
                marginBottom: 300
              }}
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
                placeholder="Enter Phone Number"
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
                placeholder="Enter Description"
                placeholderTextColor="black"
                keyboardType="numbers-and-punctuation"
                value={this.state.description}
                onChangeText={description => this.setState({ description })}
              />
              <Button
                title="SAVE CHANGES"
                // onPress={() => this.props.navigation.navigate("Profile")}
                onPress={this.handleClick}
                buttonStyle={{
                  backgroundColor: "black",
                  borderRadius: 5,
                  width: 200,
                  alignSelf: "center",
                  margin: 5
                }}
              />
              <Button
                title="RETURN TO PROFILE"
                onPress={() => this.props.navigation.navigate("Brewer")}
                buttonStyle={{
                  backgroundColor: "black",
                  borderRadius: 5,
                  width: 200,
                  alignSelf: "center",
                  margin: 5
                }}
              />
            </Card>
          </KeyboardAwareScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default edit;

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
    height: "10%",
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
    backgroundColor: "#d3d3d3",
    marginBottom: "20%"
  },
  inputStyle: {}
});
