import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const WheatDisease = () => {
    const navigation = useNavigation();

    const maizeDiseases = [
        {
            name: 'Wheat Healthy:',
            detail: 'Wheat Healthy" refers to a wheat crop that is not affected by any diseases or pests. Healthy wheat plants exhibit normal growth patterns with vibrant green leaves, sturdy stems, and well-developed grain heads. A healthy wheat crop is crucial for optimal yield and high-quality grains.',
            navigate: 'WheatHealthyDisease',
        },
        {
            name: 'Wheat Brown Rust:',
            detail: 'Brown Rust, also known as leaf rust, is a fungal disease caused by the pathogen Puccinia triticina. It primarily affects the leaves of wheat plants, resulting in brownish-orange pustules. This disease can significantly reduce wheat yield if not controlled.',
            navigate: 'WheatBrownDisease',
        },
        {
            name: 'Wheat Yellow Rust:',
            detail: 'Yellow Rust, also known as stripe rust, is caused by the fungus Puccinia striiformis. This disease appears in cooler, moist conditions and can severely damage wheat plants, leading to reduced grain quality and yield.',
            navigate: 'WheatYellowDisease',
        },
    ];

    return (
        <ImageBackground
            source={require('../assets/images/Cropsfield.jpg')}
            style={styles.backgroundImage}
        >
            <LinearGradient colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.4)']} style={styles.overlay}>
                <View style={styles.contentContainer}>
                    {/* Header */}
                    <Text style={styles.headerText}>Wheat Diseases</Text>

                    {/* Subheader */}
                    <Text style={styles.subHeaderText}>Select a disease to learn more</Text>

                    {/* Disease list */}
                    <FlatList
                        data={maizeDiseases}
                        contentContainerStyle={styles.listContainer}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.diseaseContainer}
                                onPress={() => navigation.navigate(item.navigate)}
                            >
                                <Text style={styles.diseaseName}>{item.name}</Text>
                                <Text style={styles.diseaseDetail}>{item.detail}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.navigate}
                    />
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
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    contentContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
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
    subHeaderText: {
        color: '#d1e8d1',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 30,
    },
    listContainer: {
        alignItems: 'center',
        paddingBottom: 60,
    },
    diseaseContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginVertical: 10,
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    diseaseName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    diseaseDetail: {
        fontSize: 16,
        color: '#d1e8d1',
        textAlign: 'justify',
        lineHeight: 22,
    },
});

export default WheatDisease;
