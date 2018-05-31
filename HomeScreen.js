import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  DrawerLayoutAndroid,
  AsyncStorage
} from "react-native";
import Header from "./src/component/Header";
import { Button, SearchBar } from "react-native-elements";

const orders = {
  customer: {
    firstName: "Ashutosh",
    lastName: "Telang"
  }
};

class HomeScreen extends Component {
  state = {
    name: "",
    password: "",
    nameValidate: false
  };
  async componentWillMount() {
    console.log("Component will Homescreen");
    try {
      await AsyncStorage.setItem("saman", JSON.stringify(orders));
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }
  validate = (text, type) => {
    alph = /^[a-zA-z]+$/;
    console.log(text);
    if (type === "username") {
      if (alph.test(text)) {
        this.setState({ nameValidate: false });
      } else {
        this.setState({ nameValidate: true });
      }
    }
  };
  forceUpdateHandler = () => {
    alert("triggered");
    this.forceUpdate();
  };

  fetchData = async () => {
    try {
      const value = await AsyncStorage.getItem("saman");
      if (value !== null) {
        // We have data!!
        value = JSON.parse(value);
        console.log(value.customer.firstName);
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  render() {
    //Side Navigation Drawer
    const { navigate } = this.props.navigation;

    const details = {
      name: "Ashutosh",
      city: "kalyan",
      fruits: ["Apple", "Mango"]
    };

    let navigationView = (
      <View
        style={{ flex: 1, backgroundColor: "#A1887F", alignItems: "center" }}
      >
        <Text
          style={{
            margin: 10,
            fontSize: 15,
            textAlign: "left",
            color: "white"
          }}
        >
          Side Navigation Drawer
        </Text>
        <SearchBar
          round
          containerStyle={{ width: 300 }}
          placeholder="Type Here..."
        />
      </View>
    );

    //Form Validation

    return (
      <View style={styles.container}>
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
        >
          <Header title="Dummy" />
          <View style={styles.contai}>
            <Text style={styles.someText}>First Text</Text>
            <Text style={styles.someText}>Second Text</Text>
          </View>
          <View style={styles.cardSection}>
            <Image
              source={{
                uri:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Bass_logo.svg/170px-Bass_logo.svg.png"
              }}
              style={{
                width: 50,
                height: 60,
                margin: 5,
                paddingBottom: 15
              }}
            />

            <Text style={[styles.someText, styles.extrabold]}>
              Card-Section
            </Text>
          </View>
          <View style={styles.formContent}>
            <TextInput
              type
              style={[styles.textInputStyle, styles.cool]}
              underlineColorAndroid="transparent"
              placeholder="Username!"
              onChangeText={text => this.validate(text, "username")}
            />

            {this.state.nameValidate ? <Text> Error</Text> : null}

            <TextInput
              style={[styles.textInputStyle]}
              underlineColorAndroid="transparent"
              placeholder="Password"
              secureTextEntry
            />
            <Button
              title="POST"
              loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 150,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 50,
                margin: 20
              }}
              onPress={() => navigate("Profile", details)}
            />

            <Button
              title="Fetch Data"
              loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 150,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 50,
                margin: 20
              }}
              onPress={() => this.fetchData()}
            />
          </View>
        </DrawerLayoutAndroid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    flexDirection: "column"
  },
  contai: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  someText: {
    fontSize: 20,
    color: "teal",
    alignItems: "center"
  },

  extrabold: {
    fontSize: 30,
    color: "green",
    marginLeft: 15,
    paddingTop: 10
  },

  cardSection: {
    borderBottomWidth: 1,
    justifyContent: "flex-start",
    borderColor: "blue",
    flexDirection: "row",
    backgroundColor: "#DCDCDC",
    padding: 10,
    marginBottom: 30
  },

  formContent: {
    alignItems: "center"
  },
  textInputStyle: {
    height: 50,
    width: 300,
    backgroundColor: "white",
    color: "orange",
    borderRadius: 15,
    fontWeight: "bold",
    alignContent: "center",
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.3,
    elevation: 7
  },
  cool: {
    borderColor: "green",
    borderWidth: 2
  }
});

export default HomeScreen;
