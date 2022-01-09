import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/DiscoverScreen'
import BrowseScreen from './screens/BrowseScreen'
import SettingsScreen from './screens/SettingsScreen'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Discover') {
              iconName = focused
                ? 'compass'
                : 'compass-outline';
            } else if (route.name === 'Browse') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'More') {
              iconName = focused ? 'cog' : 'cog';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Discover" component={HomeScreen}  />
        <Tab.Screen name="Browse" component={BrowseScreen} />
        <Tab.Screen name="More" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}