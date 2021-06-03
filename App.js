/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LoginScreen from './src/components/auth/login/LoginScreen';
import RegisterScreen from './src/components/auth/register/RegisterScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './src/components/screens/dashboard/Dashboard';
import ListUser from './src/components/screens/Users/ListUser';
import ReduxInfoScreen from './src/components/screens/redux/ReduxInfoScreen';
import Ressource from './src/components/screens/ressource/Ressource';
import UserDetail from './src/components/screens/Users/UserDetail';
import AddUser from './src/components/screens/Users/AddUser';

const Stack = createStackNavigator();

const Tabs = createBottomTabNavigator();

function barTabs() {
  return (
    <Tabs.Navigator initialRouteName="Dashboard">
      <Tabs.Screen name="Dashboard" component={Dashboard} />
      <Tabs.Screen name="Ressource" component={Ressource} />
      <Tabs.Screen name="Users" component={ListUser} />
      <Tabs.Screen name="AddUser" component={AddUser} />
      <Tabs.Screen name="Redux" component={ReduxInfoScreen} />
    </Tabs.Navigator>
  );
}

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="home"
          component={barTabs}
          options={{
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            headerLeft: () => null,
          }}
        />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="userDetail" component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
