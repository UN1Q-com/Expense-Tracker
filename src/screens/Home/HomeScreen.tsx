import React from 'react';
import { View, Text, Button, useColorScheme } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../config/redux/store';
import { increment, decrement } from '../../config/redux/store/counterSlice';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1, // Use flex instead of height: '100%'
    justifyContent: 'center',
    alignItems: 'center' as const,
  };

  return (
    <View style={backgroundStyle}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Count: {count}</Text>
      <Button title="Increase" onPress={() => dispatch(increment())} />
      <Button title="Decrease" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default HomeScreen;