import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from "./Container/Screen/Search/FirstScreen";
import AddCitizen from "./Container/Screen/AddCitizen/AddCitizen";
const RootStack = createStackNavigator()

export default class AppContainer extends React.PureComponent<{}>{

  render() {
      return (
          <NavigationContainer>
            <RootStack.Navigator headerMode="FirstScreen">
            <RootStack.Screen name="FirstScreen" component={FirstScreen} />
            <RootStack.Screen name="AddCitizen" component={AddCitizen} />
            </RootStack.Navigator>
          </NavigationContainer>
      );
  }
};
