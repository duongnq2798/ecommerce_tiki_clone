import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PersonalScreen from '../../screens/PersonalScreen';

const PersonalStack = createStackNavigator();

const PersonalStackScreen = () => {
  return (
    <PersonalStack.Navigator initialRouteName="Personal">
      <PersonalStack.Screen
        name="Personal"
        component={PersonalScreen}
        options={{headerShown: false}}
      />
    </PersonalStack.Navigator>
  );
};

export default PersonalStackScreen;
