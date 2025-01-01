import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const HomePage = () => {
    const navigation = useNavigation();

    return (
<ImageBackground
    source={require('../assets/images/Cropsfield.jpg')}
    style={styles.backgroundImage}
>
    <LinearGradient
        colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.4)']}
        style={styles.overlay}
    >
        <View style={styles.contentContainer}>
            {/* Updated Header */}
            <Text style={styles.headerText}>Welcome to Crops Care</Text>

            {/* Subheader */}
            <Text style={styles.subHeaderText}>
                Analyze and Protect Your Crops with AI Assistance
            </Text>

            {/* Functional Buttons */}
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.cardButton}
                    onPress={() => navigation.navigate('PredictionScreen')}
                >
                    <Image
                        source={require('../assets/images/leaf.png')}
                        style={styles.iconImage}
                    />
                    <Text style={styles.buttonText}>Disease Predictions</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cardButton}
                    onPress={() => navigation.navigate('CropsScreen')}
                >
                    <Image
                        source={require('../assets/images/lines.png')}
                        style={styles.iconImage}
                    />
                    <Text style={styles.buttonText}>Crops Field</Text>
                </TouchableOpacity>
            </View>
        </View>
    </LinearGradient>
</ImageBackground>

    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerText: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    subHeaderText: {
        color: '#d1e8d1',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 30,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    cardButton: {
        width: 150,
        height: 150,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    iconImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HomePage;
