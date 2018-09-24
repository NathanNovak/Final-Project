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

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
      header: null
    };
  
    render() {
      return (
        <View>
         <Text>ProfileScreen</Text> 
        </View>
      );
    }
  }