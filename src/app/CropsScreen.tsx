import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type MaizeDisease = {
    name: string;
    navigate: string;
    image: any;
};

const CropsScreen = () => {
    const navigation = useNavigation();
    const maizeDiseases: MaizeDisease[] = [
        { name: 'Corn / Maize', navigate: 'CornDisease', image: require('../assets/images/Corn.jpg') },
        { name: 'Rice', navigate: 'RiceDisease', image: require('../assets/images/Rice.jpg') },
        { name: 'Wheat', navigate: 'WheatDisease', image: require('../assets/images/Wheat.jpg') },
    ];

    const renderDiseaseCard = ({ item }) => (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(item.navigate)}
            style={styles.diseaseContainer}
        >
            <Image source={item.image} style={styles.diseaseImage} />
            <Text style={styles.diseaseName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <ImageBackground source={require('../assets/images/Cropsfield.jpg')} style={styles.backgroundImage}>
            <LinearGradient colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.4)']} style={styles.overlay}>
                <View style={styles.contentContainer}>
                    {/* Header */}
                    <Text style={styles.headerText}>Explore Crops</Text>

                    {/* Subheader */}
                    <Text style={styles.subHeaderText}>Select a crop to view diseases</Text>

                    {/* Vertical List */}
                    <FlatList
                        data={maizeDiseases}
                        contentContainerStyle={styles.listContainer}
                        renderItem={renderDiseaseCard}
                        keyExtractor={(item) => item.navigate} // Assign unique keys to each item
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </LinearGradient>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    // Background image
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },

    // Gradient overlay
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    // Content container
    contentContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    // Header text
    headerText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },

    // Subheader text
    subHeaderText: {
        color: '#d1e8d1',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 30,
    },

    // List container for vertical alignment
    listContainer: {
        alignItems: 'center',
        paddingBottom: 60,
    },

    // Crop card container
    diseaseContainer: {
        flexDirection: 'column', // Stack items vertically
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically
        marginBottom: 20,
        width: 200,
        height: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 15,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },

    // Crop card image
    diseaseImage: {
        height: 100,
        width: 100,
        borderRadius: 10,
        marginBottom: 10, // Space between the image and text
    },

    // Crop card text
    diseaseName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});

export default CropsScreen;
