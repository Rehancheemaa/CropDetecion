import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Splash = () => {
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
                    {/* Logo */}
                    <Image
                        source={require('../assets/images/CropLogo.jpg')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    
                    {/* Header Text */}
                    <Text style={styles.headerText}>AI Based Crop Disease Detection</Text>
                    <Text style={styles.subHeaderText}>Empowering Farmers with AI</Text>

                    {/* Home Button */}
                    <TouchableOpacity
                        style={styles.cardButton}
                        onPress={() => navigation.navigate('HomePage')}
                    >
                        <Text style={styles.buttonText}>Go to Home</Text>
                    </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    contentContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
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
    cardButton: {
        width: 200,
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Splash;
