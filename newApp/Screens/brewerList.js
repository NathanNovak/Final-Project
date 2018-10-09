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

class brewerList extends Component {
  state = {
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
  };

  brewerProfile = id => {
    console.log(id);
    API.loadBrewerById(id).then(brewer => {
      console.log("Brewer from Id", brewer);
      this.props.screenProps.currentBrewer = brewer;
      this.props.navigation.navigate("Brewer");
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
            alignItems: "stretch",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontSize: 16,
              marginRight: 30
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
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Icon name="close" size={30} color="black" />
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
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Icon name="home" size={30} color="black" />
            </TouchableOpacity>
          }
        />
        <KeyboardAwareScrollView keyboardDismissMode="on-drag" ref="scrollView">
          <View />
          <Card
            title="Breweries in Your Area"
            titleStyle={{ fontSize: 20, color: "black" }}
            containerStyle={{ backgroundColor: "#d3d3d3", opacity: 0.7 }}
          >
            {this.brewers()}
            <View />
          </Card>
        </KeyboardAwareScrollView>
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
