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
import {
  SearchBar,
  Card,
  ListItem,
  Button,
  Header
} from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createStackNavigator } from "react-navigation";

class homeScreen extends Component {
  state = {
    search: "",
    brewers: [],
    modalVisible: false
  };

  static navigationOptions = {
    header: null
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  componentDidMount() {
    this.loadFavBrewers();
  }

  loadFavBrewers = () => {
    API.loadFavBrewers(this.props.screenProps.currentUser).then(response => {
      this.setState({ brewers: response });
      console.log("state " + response);
    });
  };

  favorites = () => {
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
            onPress={() => this.props.navigation.navigate("Brewer")}
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
            title="Remove"
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
            <TouchableOpacity
              onPress={() => {
                this.props.screenProps.logoutUser(this.state).then(x => {
                  // console.log(x);
                  this.props.navigation.navigate("Login");
                });
              }}
            >
              <Icon name="sign-out" size={30} color="black" />
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
            title="Brewery News"
            titleStyle={{ fontSize: 20, color: "black" }}
            containerStyle={{ backgroundColor: "#d3d3d3", opacity: 0.7 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "stretch",
                justifyContent: "center"
              }}
            >
              <Card
                title="Brewery A"
                titleStyle={{
                  color: "black"
                }}
                containerStyle={{
                  width: 250,
                  backgroundColor: "#d3d3d3",
                  opacity: 0.7
                }}
              >
                <View>
                  <Text
                    textStyle={{
                      color: "black"
                    }}
                  >
                    The Hefeweizen over a power drill drink ruminates, and a
                    bullfrog brew near a Corona Extra gets stinking drunk;
                    however, a seldom molten Sierra Nevada teaches a bud light.
                    Furthermore, a Fraoch Heather Ale behind the jersey cow
                    daydreams, and the miller light behind a milwakees best
                    slyly is a big fan of a Pilsner living with a Heineken.
                    Another Octoberfest of the monkey bite operates a small bar
                    with the PBR. Indeed, the Strohs from a miller has a change
                    of heart about the bud light toward the Sam Adams.
                  </Text>
                </View>
              </Card>
            </View>
          </Card>
          <Card
            title="Favorite Breweries"
            titleStyle={{ fontSize: 20, color: "black" }}
            containerStyle={{
              backgroundColor: "#d3d3d3",
              opacity: 0.7,
              marginBottom: 300
            }}
          >
            {this.favorites()}
          </Card>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

export default homeScreen;

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
