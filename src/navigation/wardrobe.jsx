import { AlleatoryLook, Home } from '../components';
import { LookDetailScreen, LookListScreen, NewLookScreen } from '../screens';
import { Text, TouchableOpacity, View } from 'react-native'

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from 'react'
import StackNavigator from './stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const WardrobeNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name={focused ? "home" : "home-outline"} size={22} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewLook")}>
              <MaterialCommunityIcons name="plus-circle-outline" size={25} />
            </TouchableOpacity>
          ),
        })}
      /> */}
      <Stack.Screen
        name="Looks"
        component={LookListScreen}
        options={({ navigation }) => ({
          title: "Looks",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "dice-multiple" : "dice-multiple-outline"}
              size={22}
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewLook")}>
              <MaterialCommunityIcons name="plus-circle-outline" size={25} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="NewLook"
        component={NewLookScreen}
        options={{ title: "Nuevo look" }}
      />
      <Stack.Screen
        name="LookDetail"
        component={LookDetailScreen}
        options={{ title: "Detalles del look" }}
      />
      {/* <Stack.Screen
        name="Stack"
        component={StackNavigator}
      /> */}
    </Stack.Navigator>
  )
}

export default WardrobeNavigator