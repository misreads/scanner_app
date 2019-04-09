import React from "react"
import { View, StatusBar } from "react-native"

import { Footer, FooterTab, Button, Icon, Text } from "native-base"

import {
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  BottomTabBar
} from "react-navigation"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import PruebaScreen from "./screens/PruebaScreen/PruebaScreen"

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Prueba: PruebaScreen
  },
  {
    headerMode: "none",
    initialRouteName: "Home",
    tabBarComponent: props => {
      // console.log("los propsus", props.navigation.state)
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigation.state.index === 0}
              onPress={() => props.navigation.navigate("Home")}
            >
              <Icon name="home" />
              <Text>Home</Text>
            </Button>

            <Button
              vertical
              active={props.navigation.state.index === 1}
              onPress={() => props.navigation.navigate("Prueba")}
            >
              <Icon name="document" />
              <Text>Pruebas</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    })
    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />
    }
    return <AppContainer />
  }
}
