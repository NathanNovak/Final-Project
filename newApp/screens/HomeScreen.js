import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import { WebBrowser } from "expo";
import { Input, Button } from "react-native-elements";
import PasswordInputText from "react-native-hide-show-password-input";
import Icon from "react-native-vector-icons/FontAwesome";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    user: "",
    password: ""
  };

  render() {
    return (
      <View>
        <Input
          placeholder="Email or Username"
          rightIcon={<Icon name="user" size={24} color="black" />}
          keyboardType="email-address"
          value={this.state.user}
          onChangeText={user => this.setState({ user })}
        />
        <PasswordInputText
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <Button
          icon={<Icon name="sign-in" size={15} color="white" />}
          title="LOG IN"
          onPress={() => {
            Alert.alert(this.state.user, this.state.password);
          }}
          buttonStyle={{
            borderRadius: 5,
            width: 200,
            alignSelf: "center",
            margin: 5
          }}
        />
      </View>
    );
  }
}
