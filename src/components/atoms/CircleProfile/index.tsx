import {View, StyleSheet, Image} from 'react-native';

const CircleProfile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/png/man.png')}
        style={{width: 62, height: 62}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 62,
    height: 62,
    overflow: 'hidden',
    borderRadius: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default CircleProfile;
