import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Image, Alert, PermissionsAndroid } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

const apiUrl = 'https://content-causal-cattle.ngrok-free.app/predict'; // Update with your server endpoint

// Requesting camera permission
const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Camera Permission',
                message: 'This app needs access to your camera to take photos.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn(err);
        Alert.alert("Permission Error", "Failed to request camera permission.");
        return false;
    }
};

// Requesting storage permissions
const requestExternalStoragePermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                title: 'Storage Permission',
                message: 'This app needs access to your storage to select photos.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn(err);
        Alert.alert("Permission Error", "Failed to request storage permission.");
        return false;
    }
};

const PredictionScreen = () => {
    const navigation = useNavigation();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [prediction, setPrediction] = useState<{ predicted_class: string; confidence: number; symptoms: string } | null>(null);

    const openCamera = async () => {
        const hasPermission = await requestCameraPermission();
        if (!hasPermission) {
            Alert.alert("Permission Denied", "Camera permission is required to take photos.");
            return;
        }

        launchCamera({ mediaType: 'photo', quality: 1 }, (response) => {
            if (response.assets && response.assets.length > 0) {
                const imageUri = response.assets[0].uri;
                setSelectedImage(imageUri || null);
                sendImageToAPI(imageUri || null);
            }
        });
    };

    const openGallery = async () => {
        const hasPermission = await requestExternalStoragePermission();
        if (!hasPermission) {
            Alert.alert("Permission Denied", "Storage permission is required to select photos.");
            return;
        }

        launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
            if (response.assets && response.assets.length > 0) {
                const imageUri = response.assets[0].uri;
                setSelectedImage(imageUri || null);
                sendImageToAPI(imageUri || null);
            }
        });
    };

    const sendImageToAPI = async (imageUri: string | null) => {
        if (!imageUri) return;

        const formData = new FormData();
        formData.append('file', {
            uri: imageUri,
            type: 'image/jpeg',
            name: 'crop_image.jpg',
        });

        try {
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const result = response.data;
            if (result) {
                setPrediction({
                    predicted_class: result.predicted_class,
                    confidence: result.confidence,
                    symptoms: result.symptoms,
                });
                Alert.alert("Prediction Result", `Class: ${result.predicted_class}\nConfidence: ${result.confidence.toFixed(2)}%`);
            } else {
                Alert.alert("Error", "No prediction received.");
            }
        } catch (error) {
            console.error('Error making prediction:', error);
            Alert.alert("Error", 'Failed to get prediction.');
        }
    };

    return (
        <ImageBackground
            source={require('../assets/images/Cropsfield.jpg')}
            style={styles.backgroundImage}
        >
            {/* Linear Gradient overlay */}
            <LinearGradient
                colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.4)']}
                style={styles.overlay}
            >
                <View style={styles.contentContainer}>
                    {/* Header */}
                    <Text style={styles.headerText}>Predictions</Text>

                    {/* Subheader */}
                    <Text style={styles.subHeaderText}>
                        Upload or capture an image to get crop disease predictions and insights.
                    </Text>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.cardButton} onPress={openGallery}>
                            <Image
                                style={styles.iconImage}
                                source={require('../assets/images/imageprocessing.jpg')}
                            />
                            <Text style={styles.buttonText}>Open Gallery</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.cardButton} onPress={openCamera}>
                            <Image
                                style={styles.iconImage}
                                source={require('../assets/images/imageprocessing.jpg')}
                            />
                            <Text style={styles.buttonText}>Open Camera</Text>
                        </TouchableOpacity> */}
                    </View>

                    {selectedImage && (
                        <View style={styles.imagePreview}>
                            <Image
                                source={{ uri: selectedImage }}
                                style={{ width: 200, height: 200 }}
                            />
                        </View>
                    )}

                    {prediction && (
                        <View style={styles.predictionContainer}>
                            <View >
                                <Text style={styles.predictionText}>Predicted Class: </Text>
                                <Text style={[styles.predictionValue, { color: '#fff', textAlign: 'center' }]}>
                                    {prediction.predicted_class}
                                </Text>
                            </View>
                            <View >
                                <Text style={styles.predictionText}>Confidence:</Text>
                                <Text style={[styles.predictionValue, { color: '#fff', textAlign: 'center' }]}>
                                    {prediction.confidence.toFixed(2)}%
                                </Text>
                            </View>
                            <View style={[styles.predictionRow, { flexDirection: 'column', alignItems: 'center' }]}>
                                <Text style={styles.predictionText}>Symptoms:</Text>
                                <Text style={[styles.predictionValue, { color: '#fff', textAlign: 'center', width: '100%' }]}>
                                    {prediction.symptoms}
                                </Text>
                            </View>
                        </View>
                    )}
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
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerText: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        margin: 20,
    },
    subHeaderText: {
        color: '#ccc', // Lighter text for contrast
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 10, // Add padding for better readability
    },
    buttonRow: {
        flexDirection: 'row',
        width: '100%',
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
    imagePreview: {
        marginTop: 20,
        alignItems: 'center',
    },
    predictionContainer: {
        marginTop: 30,
    },
    predictionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        width: '100%', // Ensure the row spans the full width
    },
    predictionText: {
        color: '#daa520',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5,
    },
    predictionValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff', // Value color
        textAlign: 'center', // Center-align the value
    },

});

export default PredictionScreen;