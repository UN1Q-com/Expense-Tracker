import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/config/redux/store';
import HomeScreen from './src/screens/Home/HomeScreen';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar barStyle="default" />
      <HomeScreen />
    </Provider>
  );
}

export default App;