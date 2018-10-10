import React, { Component } from "react";
import API from "../utils/API";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Card, ListItem, Button, Header } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AwesomeAlert from "react-native-awesome-alerts";

class brewerList extends Component {
  state = {
    showAlert: false,
    search: "",
    brewers: []
  };

  componentDidMount() {
    this.loadBrewers();
  }

  loadBrewers = () => {
    API.loadBrewer().then(response => {
      // console.log(response)
      this.setState({ brewers: response });
      // console.log(this.state.brewers);
    });
  };

  addFavBrewer = id => {
    console.log(id);
    let favObject = {
      BrewerId: id,
      UserId: this.props.screenProps.currentUser.id
    };

    API.addFavBrewer(favObject);
    this.showAlert();
  };

  brewerProfile = id => {
    console.log(id);
    API.loadBrewerById(id).then(brewer => {
      console.log("Brewer from Id", brewer);
      this.props.screenProps.currentBrewer = brewer;
      this.props.navigation.navigate("UserBrewer");
    });
  };

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  static navigationOptions = {
    header: null
  };

  brewers() {
    return this.state.brewers.map((brewers, key) => {
      return (
        <View
          key={key}
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            marginTop: 5,
            marginBottom: 5
          }}
        >
          <Text
            style={{
              flexDirection: "column",
              flex: 2,
              fontSize: 16,
              alignSelf: "flex-start"
            }}
          >
            {brewers.BreweryName}
          </Text>
          <Button
            title="Profile"
            id={brewers.id}
            onPress={() => this.brewerProfile(brewers.id)}
            buttonStyle={{
              backgroundColor: "black",
              width: 60,
              height: 30,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              marginLeft: 10
            }}
            titleStyle={{
              fontSize: 12
            }}
          />
          <Button
            title="Favorite"
            onPress={() => this.addFavBrewer(brewers.id)}
            buttonStyle={{
              backgroundColor: "black",
              width: 60,
              height: 30,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              marginLeft: 10
            }}
            titleStyle={{
              fontSize: 12
            }}
          />
        </View>
      );
    });
  }

  render() {
    const { showAlert } = this.state;

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
              <Icon name="chevron-left" size={30} color="black" />
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
              <Icon name="sign-out" size={30} color="black" />
            </TouchableOpacity>
          }
        />
        <KeyboardAwareScrollView keyboardDismissMode="on-drag" ref="scrollView">
          <View />
          <Card
            title="Breweries in Your Area"
            titleStyle={{ fontSize: 20, color: "black" }}
            containerStyle={{
              backgroundColor: "#d3d3d3",
              opacity: 0.7,
              marginLeft: 0,
              marginRight: 0
            }}
          >
            {this.brewers()}

            <View />
          </Card>
        </KeyboardAwareScrollView>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Favorite Brewer Saved"
          // message="Thank You For Registering!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          // cancelText="No, cancel"
          confirmText="Return"
          confirmButtonColor="black"
          // onCancelPressed={() => {
          //   this.hideAlert();
          // }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      </ImageBackground>
    );
  }
}

export default brewerList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  buttons: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: 50
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 20,
    alignSelf: "center",
    margin: 10
  }
});
