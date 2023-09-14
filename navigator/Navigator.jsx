import { View, Text } from 'react-native';
import React, { createContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BannerNavigationScreen } from '../views/Banner';
import Services from '../views/Services';
import Profile from '../views/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../auth/Login';
import Market from '../views/Market';

const TabNavigator = createBottomTabNavigator();
const Stack = createStackNavigator();

export const Context = createContext();

const Navigator = () => {
  const [user, setUser] = React.useState('');
  return (
    <Context.Provider value={{ user, setUser }}>
      {user ? <SignedInNavigator /> : <SignedOutNavigator />}
    </Context.Provider>
  );
};

const SignedInNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case 'Home':
                  iconName = 'home';
                  break;
                case 'Services':
                  iconName = 'room-service-outline';
                  break;
                case 'Market':
                  iconName = 'shopping';
                  break;
                case 'Profile':
                  iconName = 'face-man-profile';
                  break;
                default:
                  iconName = 'home';
                  break;
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={focused ? size + 5 : size}
                  color={color}
                />
              );
            },
            headerShown: false,
            tabBarActiveTintColor: '#FF0000',
            tabBarInactiveTintColor: '#949494',
            tabBarShowLabel: false,
          };
        }}
      >
        <TabNavigator.Screen name="Home" component={BannerNavigationScreen} />
        <TabNavigator.Screen name="Services" component={Services} />
        <TabNavigator.Screen name="Market" component={Market} />
        <TabNavigator.Screen name="Profile" component={Profile} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

const SignedOutNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
