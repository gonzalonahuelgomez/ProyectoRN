import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import RecipesNavigator from './recipes';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RecipesNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
