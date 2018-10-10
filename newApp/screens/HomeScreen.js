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
            source={{
              uri:
                "data:image/jpeg;base64,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"
            }}
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
