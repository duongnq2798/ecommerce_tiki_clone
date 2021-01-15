import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SurfingScreen from '../screens/SurfingScreen';
import NotificationScreen from '../screens/NotificationScreen';

// Import Stack
import HomeStackScreen from './Stacks/HomeStack';
import CategoryStackScreen from './Stacks/CategoryStack';
import PersonalStackScreen from './Stacks/PersonalStack';

LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'md-home';
          } else if (route.name === 'Category') {
            iconName = 'md-apps';
          } else if (route.name === 'SurfingScreen') {
            iconName = 'md-flame';
          } else if (route.name === 'NotificationScreen') {
            iconName = 'md-notifications';
          } else if (route.name === 'PersonalScreen') {
            iconName = 'md-person';
          }
          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3871ab',
        inactiveTintColor: 'gray',
        style: {},
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{tabBarBadge: 2}}
      />
      <Tab.Screen name="Category" component={CategoryStackScreen} />
      <Tab.Screen name="SurfingScreen" component={SurfingScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="PersonalScreen" component={PersonalStackScreen} />
    </Tab.Navigator>
  );
};

export default Main;
