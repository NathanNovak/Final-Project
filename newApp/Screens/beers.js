import React, { Component } from "react";
import API from "../utils/API";
import {
  Platform,
  StatusBar,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Alert
} from "react-native";
import { Input, Button, Overlay, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import RF from "react-native-responsive-fontsize";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class beers extends Component {
  state = {
    isVisible: true,
    beerName: "",
    ibu: "",
    abv: "",
    tastingNotes: ""
  };

  static navigationOptions = {
    header: null
  };

  handleClick = beer => {
    // event.preventDefault
    console.log("Test", beer);
    API.saveBeer({
      brewerId: this.props.screenProps.currentBrewer.id,
      beerName: this.state.beerName,
      ibu: this.state.ibu,
      abv: this.state.abv,
      tastingNotes: this.state.tastingNotes
    });
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/beer-background.jpg")}
        style={styles.container}
      >
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
                placeholder="Enter Beer Name"
                placeholderTextColor="black"
                keyboardType="default"
                value={this.state.breweryname}
                onChangeText={beerName => this.setState({ beerName })}
              />
              <Input
                placeholder="Enter IBU's"
                placeholderTextColor="black"
                keyboardType="numbers-and-punctuation"
                value={this.state.ibu}
                onChangeText={ibu => this.setState({ ibu })}
              />
              <Input
                placeholder="Enter ABV"
                placeholderTextColor="black"
                keyboardType="numbers-and-punctuation"
                value={this.state.abv}
                onChangeText={abv => this.setState({ abv })}
              />
              <Input
                placeholder="Enter Tasting Notes"
                placeholderTextColor="black"
                keyboardType="numbers-and-punctuation"
                value={this.state.tastingNotes}
                onChangeText={tastingNotes => this.setState({ tastingNotes })}
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

export default beers;

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
