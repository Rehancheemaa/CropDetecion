import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity, Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { useNavigation } from '@react-navigation/native'; // Add navigation hook
import LinearGradient from 'react-native-linear-gradient';

const CornGrayLeafDisease = () => {

    const [visible, setVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const getImageUrl = (imageSource: any) => {
        const { uri } = Image.resolveAssetSource(imageSource);
        return uri;
    };

    const images = [
        require("../assets/images/Corn_Gray_Spot.jpg"),
        require("../assets/images/Corn_Gray_Spot1.jpg"),
        require("../assets/images/Corn_Gray_Spot2.jpg"),
        require("../assets/images/Corn_Gray_Spot3.jpg"),
        require("../assets/images/Corn_Gray_Spot4.jpg"),
        require("../assets/images/Corn_Gray_Spot5.jpg"),
    ];

    const handleImageClick = (imageSource: any) => {
        setCurrentImage(getImageUrl(imageSource));
        setVisible(true);
    };

    return (
        <ImageBackground
            source={require("../assets/images/Cropsfield.jpg")}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <LinearGradient colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.4)']} style={styles.overlay}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>Corn Gray Leaf</Text>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    <View style={styles.imageContainer}>
                        {images.map((image, index) => (
                            <TouchableOpacity key={index} onPress={() => handleImageClick(image)}>
                                <Image
                                    source={image}
                                    style={styles.image}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        ))}
                    </View>

                    {visible && (
                        <Modal
                            visible={visible}
                            transparent={true}
                            onRequestClose={() => setVisible(false)}
                        >
                            <ImageViewer
                                imageUrls={[{ url: currentImage }]}
                                onSwipeDown={() => setVisible(false)}
                                enableSwipeDown
                            />
                        </Modal>
                    )}
                </ScrollView>
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
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    scrollViewContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 30,
    },
    header: {
        marginVertical: 20,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 15,
        margin: 10,
        borderWidth: 2,
        borderColor: '#daa520',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
});

export default CornGrayLeafDisease;
