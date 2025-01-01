// api.tsx
import axios from 'axios';

// Define the API URL
const API_URL = ' https://content-causal-cattle.ngrok-free.app/predict'; // Replace <your-server-ip> with your actual server IP

// Define an interface for the image data
interface ImageData {
    uri: string;
    name: string;
    type: string;
}

// Define an interface for the prediction response
interface PredictionResponse {
    predicted_class: string;
    confidence: number;
}

// Function to send image to the Flask API for prediction
export const predict = async (imageData: ImageData): Promise<PredictionResponse> => {
    const formData = new FormData();
    formData.append('file', {
        uri: imageData.uri, // URI of the image
        name: imageData.name, // Filename of the image
        type: imageData.type, // MIME type of the image (e.g., 'image/jpeg')
    });

    try {
        const response = await axios.post<PredictionResponse>(API_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; // Return the prediction result
    } catch (error: any) {
        console.error('Error making prediction:', error.message || error);
        throw error;
    }
};
