import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BannerNavigationScreen } from '../views/Banner';
import Services from '../views/Services';
import Profile from '../views/Profile';

const Navigator = () => {
  const TabNavigator = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ color, size }) => {
              let iconName;
              switch (route.name) {
                case 'Home':
                  iconName = 'home';
                  break;
                case 'Services':
                  iconName = 'room-service-outline';
                  break;
                case 'Profile':
                  iconName = 'face-man-profile';
                  break;
                default:
                  iconName = 'home';
                  break;
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            headerShown: false,
          };
        }}
      >
        <TabNavigator.Screen name="Home" component={BannerNavigationScreen} />
        <TabNavigator.Screen name="Services" component={Services} />
        <TabNavigator.Screen name="Profile" component={Profile} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
