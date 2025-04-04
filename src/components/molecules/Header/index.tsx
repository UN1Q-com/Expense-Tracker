import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Good afternoon,</Text>
                <Text style={styles.name}>High Doe</Text>
            </View>
            <View>
                <Image 
                    source={require('../../../assets/png/bell.png')} 
                    style={{ width: 20, height: 20 }} 
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 24,
    },
    greeting: {
        fontSize: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;