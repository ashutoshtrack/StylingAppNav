import React from "react";
import { Text, View, Button, AsyncStorage } from "react-native";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    console.log("constructor");
  }

  state = {
    temval: null
  };

  async componentWillMount() {
    console.log("Component will Mount");
    try {
      const value = await AsyncStorage.getItem("saman");
      if (value !== null) {
        // We have data!!
        console.log(JSON.parse(value));
        // this.setState({ temval: value });
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = this.props.navigation;

    console.log(this.props);

    const name = navigation.getParam("name", "String");
    const city = navigation.getParam("city", "String");
    const fruits = navigation.getParam("fruits", "String");
    console.log(name);
    return (
      <View>
        <Text>
          Profile {name} {city} {fruits[1]}
        </Text>
        <Button title="Go back" onPress={() => navigate("Home", null)} />
      </View>
    );
  }
}

export default Profile;
