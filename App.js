import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './Redux/store';
import {LogBox} from 'react-native';
// Custom
import ScreenNotTab from './navigation/ScreenNotTab';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ScreenNotTab />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
