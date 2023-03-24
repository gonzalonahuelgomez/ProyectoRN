import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import WardrobeNavigator from './wardrobe';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <WardrobeNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
