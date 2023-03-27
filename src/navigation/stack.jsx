import { LookDetailScreen, LookListScreen, NewLookScreen } from '../screens';

import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>     
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
      <Stack.Screen
        name="Looks"
        component={LookListScreen}
        options={{
          title: "Looks",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "dice-multiple" : "dice-multiple-outline"}
              size={22}
            />
          ),
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator