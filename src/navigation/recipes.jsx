import { Text, View } from 'react-native'

import { Home } from '../components';
import Ionicons from "@expo/vector-icons/Ionicons";
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const RecipesNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={22} />
          ),
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name=""
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "square" : "square-outline"} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name=""
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "checkbox" : "checkbox-outline"}
              size={22}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  )
}

export default RecipesNavigator