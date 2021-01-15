import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen';
import SearchScreen from '../screens/SearchScreen';
import ProcessingOrder from '../screens/Manage/ProcessingOrder';
import ManageOrder from '../screens/ManageOrder';
import ProductsPurchasedLater from '../screens/Manage/ProductsPurchasedLater';
import ViewedProducts from '../screens/Manage/ViewedProducts';
import CreateChatRoom from '../screens/CreateChatRoom';
import ChatScreen from '../screens/ChatScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProductDetailt from '../screens/ProductDetailt';
import LoginScreen from '../screens/LoginScreen';
import SettingScreen from '../screens/SettingScreen';
import Main from './Main';
import forHorizontalModal from './forHorizontalModal';

const Root = createStackNavigator();

const ScreenNotTab = () => {
  return (
    <Root.Navigator>
      <Root.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Root.Screen
        name="ProductDetailt"
        component={ProductDetailt}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
      <Root.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
      <Root.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
      <Root.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
      <Root.Screen
        name="ProcessingOrderScreen"
        component={ProcessingOrder}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
      <Root.Screen
        name="ManageOrderScreen"
        component={ManageOrder}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
      <Root.Screen
        name="ProductsPurchasedLaterScreen"
        component={ProductsPurchasedLater}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
      <Root.Screen
        name="ViewedProductsScreen"
        component={ViewedProducts}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
      <Root.Screen
        name="CreateChatRoomScreen"
        component={CreateChatRoom}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
      <Root.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
      <Root.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
      <Root.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
    </Root.Navigator>
  );
};

export default ScreenNotTab;
