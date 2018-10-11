import React, { Component } from "react";
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
import API from "../utils/API";
import Icon from "react-native-vector-icons/FontAwesome";
import { Avatar, Card, Button, Header } from "react-native-elements";
import ImageElement from "../components/ImageElement";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class brewerProfile extends Component {
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
    beers: []
  };

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.loadBeers();
  }

  loadBeers = () => {
    API.loadBeers(this.props.screenProps.currentBrewer).then(response => {
      console.log(response);
      this.setState({ beers: response });
      console.log(this.state.beers);
    });
  };

  setModalVisible(visible, imageKey) {
    this.setState({ modalImage: this.state.images[imageKey] });
    this.setState({ modalVisible: visible });
  }

  getImage() {
    return this.state.modalImage;
  }

  beers() {
    return this.state.beers.map((beers, key) => {
      return (
        <Card
          key={key}
          style={{
            flexDirection: "column",
            alignItems: "stretch"
          }}
        >
          <Text>Beer name: {beers.beerName}</Text>
          <Text>IBUs: {beers.IBU}</Text>
          <Text>ABV: {beers.ABV} %</Text>
          <Text>Tasting Notes: {beers.tastingNotes}</Text>
        </Card>
      );
    });
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
                "http://allaboutbeer.com/wp-content/uploads/2014/05/Mark-Carpenter-Anchor-Brewing-Co.jpg"
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
            title={this.props.screenProps.currentBrewer.BreweryName}
            titleStyle={{
              color: "black"
            }}
            containerStyle={{
              marginBottom: 5,
              alignItems: "stretch",
              justifyContent: "center",
              marginLeft: 0,
              marginRight: 0,
              backgroundColor: "#d3d3d3",
              opacity: 0.7
            }}
          >
            <Text>
              <Text style={styles.titleText}>Email:</Text> <Text>{this.props.screenProps.currentBrewer.email}</Text></Text>
            <Text>
              <Text style={styles.titleText}>Phone Number:</Text><Text>{this.props.screenProps.currentBrewer.phone}</Text></Text>
            <Text>
              <Text style={styles.titleText}>Address:</Text>
              <Text>
              {" "}
              {`${this.props.screenProps.currentBrewer.address} ${
                this.props.screenProps.currentBrewer.city
              }, ${this.props.screenProps.currentBrewer.state} ${
                this.props.screenProps.currentBrewer.zip
              }`}
              </Text>
            </Text>
            <Text>
              <Text style={styles.titleText}>Description:</Text> <Text>{this.props.screenProps.currentBrewer.description}</Text>
            </Text>
          </Card>
          <Card
            title="Beer List"
            titleStyle={{
              color: "black"
            }}
            containerStyle={{
              marginBottom: 5,
              alignItems: "stretch",
              justifyContent: "center",
              marginLeft: 0,
              marginRight: 0,
              backgroundColor: "#d3d3d3",
              opacity: 0.7
            }}
          >
            {this.beers()}
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

export default brewerProfile;

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
  titleText: {
    fontSize: 15,
    fontWeight: "bold", 
  },
  header: {
    backgroundColor: "#d3d3d3"
  }
});