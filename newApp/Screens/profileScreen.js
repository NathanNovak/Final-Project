import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  Alert,
} from "react-native";
import { Avatar, Card, Button, Icon } from "react-native-elements";


state = {
  isImageViewVisible: false
};

class profileScreen extends Component {
  state = {};
  render() {
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
            style={{
              marginBottom: 5
            }}
          >
            <View>
              <Text>Email:</Text>
              <Text>Password:</Text>
              <Button
                onPress={() => this.props.navigation.navigate("Photos")}
                title="VIEW PHOTOS"
              />
            </View>
          </Card>
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
  }
});


