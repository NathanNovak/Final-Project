import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
      header: null
    };
  
    render() {
      return (
        <View>
         <Text>Sign In Screen</Text> 
        </View>
      );
    }
  }