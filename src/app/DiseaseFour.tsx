import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity, Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const DiseaseFour = () => {

    const [visible, setVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const getImageUrl = (imageSource: any) => {
        const { uri } = Image.resolveAssetSource(imageSource);
        return uri;
    };

    const images = [
        require("../assets/images/CornHealth.jpg"),
        require("../assets/images/CornHealth1.jpg"),
        require("../assets/images/CornHealth2.jpg"),
        require("../assets/images/CornHealth3.jpg"),
        require("../assets/images/CornHealth4.jpg"),
        require("../assets/images/CornHealth5.jpg"),
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
            <View style={styles.header}>
                <Text style={styles.text}>Crop Disease </Text>
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
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'center',

    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    imageContainer: {
        paddingVertical: 5,
        backgroundColor: 'rgba(1,1,1,0.6)',
        padding:50
    },
    image: {
        borderWidth: 3,
        borderRadius: 20,
        borderColor: '#daa520',
        marginBottom: 10,
        justifyContent:'center'
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',

    },
    header: {
        backgroundColor: '#2e8b57',
        paddingVertical: 30,

    },
});

export default DiseaseFour;
