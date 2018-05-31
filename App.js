import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  DrawerLayoutAndroid
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "./src/component/Header";
import { Button, SearchBar } from "react-native-elements";
import { StackNavigator, createBottomTabNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./Profile";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

/*
const App = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    headerMode: "none"
  }
);
*/

const App = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 20
      },
      style: {
        backgroundColor: "#f3e5f5"
      }
    }
  }
);

export default App;
