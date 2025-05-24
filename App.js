import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UsersScreen from './screens/UsersScreen';
import PostsScreen from './screens/PostsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Users">
        <Drawer.Screen name="Users" component={UsersScreen} />
        <Drawer.Screen name="Posts" component={PostsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}