import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { SearchBar, Card, ListItem, Button, Header } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createStackNavigator } from "react-navigation";

class homeScreen extends Component {
  state = {
    search: "",
    brewers: [
      "Crooked Tooth",
      "Pueblo Vida",
      "Button Brew House",
      "1055 Brewery and Sausage House",
      "Dragoon"
    ]
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
        <Header
          outerContainerStyles={{
            backgroundColor: "#d3d3d3",
            height: 75,
            paddingTop: 15,
            opacity: 0.7
          }}
          leftComponent={<Icon name="close" size={30} color="black" />}
          centerComponent={<Icon name="beer" size={30} color="black" />}
          rightComponent={<Icon name="home" size={30} color="black" />}
        />
        <KeyboardAwareScrollView keyboardDismissMode="on-drag" ref="scrollView">
          <Card
            title="Brewery News"
            titleStyle={{ fontSize: 20 }}
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
                containerStyle={{
                  width: 250,
                  backgroundColor: "#d3d3d3",
                  opacity: 0.7
                }}
              >
                <View>
                  <Text>
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
            title="Saved Breweries"
            titleStyle={{ fontSize: 20 }}
            containerStyle={{ backgroundColor: "#d3d3d3", opacity: 0.7 }}
          >
            <View>
              <View
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
                  Brewery A
                </Text>
                <Button
                  title="Profile"
                  onPress={() => this.props.navigation.navigate("Profile")}
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
            </View>
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
