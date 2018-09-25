import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";
import {Avatar} from "react-native-elements";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <Text>This works!</Text>
        <Avatar
          size="small"
          rounded
          title="MT"
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      </View>
    );
  }
}
