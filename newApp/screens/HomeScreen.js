import React, { Component } from "react";
import API from "../utils/API";
import {
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  Alert,
  Dimensions,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Avatar, Card, Button, Header } from "react-native-elements";
import ImageElement from "../components/ImageElement";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class homeScreen extends Component {
  state = {
    modalVisible: false,
    modalImage: require("../assets/beer1.jpg"),
    images: [
      require("../assets/beer1.jpg"),
      require("../assets/beer2.jpg"),
      require("../assets/beer3.jpg"),
      require("../assets/beer4.jpg"),
      require("../assets/beer5.jpg"),
      require("../assets/beer6.jpg")
    ],

    search: "",
    brewers: [],
    modalVisible: false
  };

  static navigationOptions = {
    header: null
  };

  setModalVisible(visible, imageKey) {
    this.setState({ modalImage: this.state.images[imageKey] });
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

  brewerProfile = id => {
    console.log(id);
    API.loadBrewerById(id).then(brewer => {
      console.log("Brewer from Id", brewer);
      this.props.screenProps.currentBrewer = brewer;
      this.props.navigation.navigate("UserBrewer");
    });
  };

  favorites = () => {
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

  getImage() {
    return this.state.modalImage;
  }

  render() {
    let images = this.state.images.map((val, key) => {
      return (
        <TouchableWithoutFeedback
          key={key}
          onPress={() => this.setModalVisible(true, key)}
        >
          <View style={styles.imageWrap}>
            <ImageElement imgsource={val} />
          </View>
        </TouchableWithoutFeedback>
      );
    });
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "center",
            marginTop: 50
          }}
        >
          <Avatar
            size="xlarge"
            rounded
            title="CR"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>
        <KeyboardAwareScrollView
          keyboardDismissMode="on-drag"
          ref="scrollView"
          style={{
            flex: 4
          }}
        >
          <Card
            title={`${this.props.screenProps.currentUser.firstName} ${
              this.props.screenProps.currentUser.lastName
            }`}
            containerStyle={{
              marginBottom: 5,
              alignItems: "stretch",
              justifyContent: "center",
              marginLeft: 0,
              marginRight: 0,
              backgroundColor: "#d3d3d3",
              opacity: 0.7
            }}
            titleStyle={{
              color: "black"
            }}
          >
            <Text>Email: {this.props.screenProps.currentUser.email}</Text>
          </Card>
          <Card
            title="Favorite Breweries"
            titleStyle={{ fontSize: 20, color: "black" }}
            containerStyle={{
              backgroundColor: "#d3d3d3",
              opacity: 0.7,
              marginBottom: 60,
              marginLeft: 0,
              marginRight: 0
            }}
          >
            {this.favorites()}
          </Card>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              flexDirection: "row",
              alignItems: "stretch",
              justifyContent: "center"
            }}
          >
            <Modal
              style={styles.modal}
              animationType={"fade"}
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {}}
            >
              <View style={styles.modal}>
                <Text
                  style={styles.text}
                  onPress={() => {
                    this.setModalVisible(false);
                  }}
                >
                  Close
                </Text>
                <ImageElement imgsource={this.state.modalImage} />
              </View>
            </Modal>
            {images}
          </ScrollView>
          <Button
            title="TAKE A PHOTO"
            //onPress={() => this.props.navigation.navigate("Camera")}
            buttonStyle={{
              backgroundColor: "black",
              borderRadius: 5,
              width: 200,
              alignSelf: "center",
              margin: 5
            }}
          />
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
  images: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  imageWrap: {
    margin: 2,
    padding: 2,
    height: Dimensions.get("window").height / 3 - 12,
    width: Dimensions.get("window").width / 2 - 4,
    backgroundColor: "#d3d3d3"
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: "transparent"
  },
  text: {
    color: "black"
  },
  header: {
    backgroundColor: "#d3d3d3"
  }
});
