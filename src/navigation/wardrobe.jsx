import { AlleatoryLook, Home } from '../components';
import { Text, TouchableOpacity, View } from 'react-native'

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { NewLookScreen } from '../screens';
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const WardrobeNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
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
      />
      <Tab.Screen
        name="Random Look"
        component={AlleatoryLook}
        options={{
          title: "Random Look",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "dice-multiple" : "dice-multiple-outline"}
              size={22}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="NewLook"
        component={NewLookScreen}
        options={{ title: "Nuevo look" }}
      />
    </Tab.Navigator>
  )
}

export default WardrobeNavigator