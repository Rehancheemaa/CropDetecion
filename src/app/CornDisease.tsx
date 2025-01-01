import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CornDisease = () => {
    const navigation = useNavigation();

    const maizeDiseases = [
        {
            name: 'Corn Healthy:',
            detail: 'A healthy corn plant displays robust growth with deep green leaves. There are no visible signs of disease, such as spots, lesions, or discoloration. Healthy corn plants should have strong stalks, well-developed ears, and optimal leaf coverage for photosynthesis. Proper nutrition, irrigation, and pest control practices help in maintaining plant health and maximizing yields.',
            navigate: 'CornHealthyDisease',
        },
        {
            name: 'Corn Common Rust:',
            detail: 'Puccinia sorghi is the fungus responsible for corn common rust. The disease manifests as small, cinnamon-brown to brick-red pustules on the upper and lower leaf surfaces. Over time, the pustules may become darker. Rust typically thrives in moderate temperatures and moist conditions. While corn common rust is rarely fatal to the plant, it can slow growth and reduce yield if left unchecked. Fungicide application and using resistant hybrids can manage the disease.',
            navigate: 'CornCommonRustDisease',
        },
        {
            name: 'Corn Blight:',
            detail: (
                <>
                  <Text style={{ fontWeight: 'bold' }}>Northern Corn Leaf Blight (NCLB): </Text>
                  <Text>Caused by Exserohilum turcicum, NCLB produces elongated, gray-green lesions on leaves that can expand and turn brown. It thrives in cool, wet conditions and can seriously reduce yield if untreated.{'\n\n'} </Text>
                  <Text style={{ fontWeight: 'bold' }}>Southern Corn Leaf Blight (SCLB): </Text>
                  <Text>Caused by Bipolaris maydis, SCLB presents as small, tan lesions. It prefers warmer, wetter climates and can spread rapidly under favorable conditions. Managing blight often involves planting resistant hybrids, using fungicides, and crop rotation.</Text>
                </>
              ),          
             navigate: 'CornBlightDisease',
        },
        {
            name: 'Corn Gray Leaf Spot:',
            detail: 'Caused by Cercospora zeae-maydis, gray leaf spot appears as small, rectangular, gray to brown lesions on corn leaves, typically aligned with the veins. Over time, these lesions can expand and merge, leading to leaf decay. This disease thrives in warm, humid environments and can significantly reduce photosynthesis, leading to yield losses. Gray leaf spot is best controlled by using resistant corn varieties and implementing crop rotation to reduce fungal spores in the soil.',
            navigate: 'CornGrayLeafDisease',
        },
    ];

    const renderDiseaseCard = ({ item }) => (
        <TouchableOpacity
            style={styles.diseaseContainer}
            onPress={() => navigation.navigate(item.navigate)}
        >
            <Text style={styles.diseaseName}>{item.name}</Text>
            <Text style={styles.diseaseDetail}>{item.detail}</Text>
        </TouchableOpacity>
    );

    return (
        <ImageBackground
            source={require('../assets/images/Cropsfield.jpg')}
            style={styles.backgroundImage}
        >
            <LinearGradient colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.4)']} style={styles.overlay}>
                <View style={styles.contentContainer}>
                    {/* Header */}
                    <Text style={styles.headerText}>Corn Diseases</Text>

                    {/* Subheader */}
                    <Text style={styles.subHeaderText}>Select a disease to learn more</Text>

                    {/* Disease List */}
                    <FlatList
                        data={maizeDiseases}
                        renderItem={renderDiseaseCard}
                        keyExtractor={(item) => item.navigate}
                        contentContainerStyle={styles.listContainer}
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

    // List container
    listContainer: {
        paddingBottom: 60,
    },

    // Disease card
    diseaseContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 20,
        padding: 15,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },

    // Disease name text
    diseaseName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },

    // Disease detail text
    diseaseDetail: {
        fontSize: 16,
        color: '#d1e8d1',
        textAlign: 'justify',
        lineHeight: 22,
    },
});

export default CornDisease;
