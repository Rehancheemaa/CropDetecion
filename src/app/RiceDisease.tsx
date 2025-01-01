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

const RiceDisease = () => {
    const navigation = useNavigation();

    const riceDiseases = [
        {
            name: 'Rice Healthy:',
            detail: 'Healthy rice plants exhibit strong, upright growth with vibrant green leaves. The plants have well-formed tillers and uniform grain development. Adequate sunlight, water, and nutrient levels promote healthy growth, minimizing the risk of diseases. A balanced ecosystem and pest management practices help in maintaining rice health.',
            navigate: 'RiceHealthyDisease',
        },
        {
            name: 'Rice Neck Blast:',
            detail: 'Rice neck blast is a fungal disease caused by Magnaporthe oryzae. It attacks the neck of the panicle, leading to grain sterility and yield loss. The disease thrives in high humidity and warm temperatures, often during the heading stage of the crop. Symptoms include lesions at the base of the panicle, causing the affected part to turn white and break. Effective management includes using resistant varieties, proper fertilization, and applying fungicides at appropriate growth stages.',
            navigate: 'RiceNickBlast',
        },
        {
            name: 'Rice Gray Leaf Spot:',
            detail: 'Gray leaf spot in rice is caused by Cercospora oryzae. It appears as small, grayish lesions on the leaves, which later enlarge and merge, forming patches that reduce photosynthetic activity. It typically affects older leaves and can result in significant yield loss if not controlled. The disease is favored by humid, warm conditions. Managing the disease involves crop rotation, avoiding waterlogged conditions, and using fungicides when necessary. Resistant rice varieties can also help in controlling the spread.',
            navigate: 'RiceGrayLeafDisease',
        },
    ];

    const renderDiseaseCard = ({ item }) => (
        <TouchableOpacity
            style={styles.diseaseContainer}
            onPress={() => navigation.navigate(item.navigate)}
        >
            <View style={styles.cardWrapper}>
                <Text style={styles.diseaseName}>{item.name}</Text>
                <Text style={styles.diseaseDetail}>{item.detail}</Text>
            </View>
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
                    <Text style={styles.headerText}>Rice Diseases</Text>

                    {/* Subheader */}
                    <Text style={styles.subHeaderText}>Select a disease to learn more</Text>

                    {/* List */}
                    <FlatList
                        data={riceDiseases}
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
        alignItems: 'center',
        paddingBottom: 60,
    },

    // Disease card container
    diseaseContainer: {
        marginBottom: 20,
        borderRadius: 15,
        overflow: 'hidden', // Ensures rounded corners for shadows
    },

    // Shadow wrapper
    cardWrapper: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 15, // Matches diseaseContainer
    },

    // Disease name text
    diseaseName: {
        fontSize: 20,
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

export default RiceDisease;
