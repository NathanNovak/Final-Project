import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView
} from "react-native";
import { SearchBar, Card, ListItem, Button, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class homeScreen extends Component {
  state = {
    search: ""
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
          <SearchBar
            darkTheme 
            round
            searchIcon={{ size: 24 }}
            //onChangeText={someMethod}
            //onClear={someMethod}
            placeholder="Search"
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
                containerStyle={{ width: 250, backgroundColor: "#d3d3d3", opacity: 0.7  }}
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

  searchStyle: {
    marginTop: "25%"
  }
});
