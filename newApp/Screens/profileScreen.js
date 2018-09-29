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
  Modal
} from "react-native";
import { Avatar, Card, Button, Icon } from "react-native-elements";
import ImageElement from "../components/ImageElement";

class profileScreen extends Component {
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
    ]
  };

  setModalVisible(visible, imageKey) {
    this.setState({ modalImage: this.state.images[imageKey] });
    this.setState({ modalVisible: visible });
  }

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
        <ScrollView
          style={{
            flex: 4
          }}
        >
          <Card
            title="User Name"
            containerStyle={{
              marginBottom: 5,
              alignItems: "stretch",
              justifyContent: "center"
            }}
          >
            <Text>Email:</Text>
            <Text>Password:</Text>
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
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default profileScreen;

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
    backgroundColor: "#fff"
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: "transparent"
  },
  text: {
    color: "black"
  }
});
