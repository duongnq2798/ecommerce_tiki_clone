import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Category from '../../screens/Category';
import CategoryDetailt from '../../screens/CategoryDetailt';
import forHorizontalModal from '../forHorizontalModal';
const CategoryStack = createStackNavigator();

const CategoryStackScreen = () => {
  return (
    <CategoryStack.Navigator initialRouteName="Category">
      <CategoryStack.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
      <CategoryStack.Screen
        name="CategoryDetailt"
        component={CategoryDetailt}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
    </CategoryStack.Navigator>
  );
};

export default CategoryStackScreen;
