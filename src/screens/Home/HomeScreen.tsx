import React from 'react';
import {View, Text, Button, useColorScheme, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../config/redux/store';
import {increment, decrement} from '../../config/redux/store/counterSlice';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { Card, Header, HistoryCard } from '../../components/molecules';
import { CircleProfile } from '../../components/atoms';

/* TODO 1 - Implement the Home screen as shown in the design. (the image in spec)
  
  1. Add the UI elements
  2. Display the data from the redux store
  3. Get creative on the "add transaction" UI (You can use a modal or a new screen.. feel free!)
  4. Add the redux actions to the buttons
  5. Make My circle section scrollable horizontally
  6. Add a smooth animation to the header when the user scrolls through the history section, leading to picture B (the image in spec)
*/

// PS - The design elements are living inside "./components/".

const HomeScreen: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <Header />
      <View style={{marginTop: 10}}/>
      <Card />
      <View style={{marginTop: 10}}/>
      <HistoryCard title='Paypal' date="Today" amount={120} isIncome icon={require("./../../assets/png/paypal.png")} />
      <View style={{marginTop: 10}}/>
      <CircleProfile />
      
      <Text style={styles.counterText}>Count: {count}</Text>
      <Button title="Increase" onPress={() => dispatch(increment())} />
      <Button title="Decrease" onPress={() => dispatch(decrement())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default HomeScreen;
