from io import BytesIO
import numpy as np
from flask import Flask, request, jsonify
from PIL import Image
import tensorflow as tf
from flask_cors import CORS
# Load the model and class names

MODEL = tf.keras.models.load_model('../models/DiseaseClassifier.keras')
class_names = [
    'Corn___Blight',
    'Corn___Common_Rust',
    'Corn___Gray_Leaf_Spot',
    'Corn___Healthy',
    'Rice___Brown_Spot',
    'Rice___Healthy',
    'Rice___Leaf_Blast',
    'Wheat___Brown_Rust',
    'Wheat___Healthy',
    'Wheat___Yellow_Rust'
]

# Initialize Flask app
app = Flask(__name__)
CORS(app)

@app.route('/ping', methods=['GET'])
def ping():
    return "Hello"

def read_file_as_image(data) -> np.ndarray:
    img = Image.open(BytesIO(data))
    img_1 = np.array(img)

    if img_1.shape[-1] == 3:  # Check if the image is RGB
        img_1 = tf.image.rgb_to_grayscale(img_1)  # Convert RGB to grayscale
    image_2 = tf.image.resize(img_1, (28, 28))  # Resize image to 28x28
    image_3 = tf.squeeze(image_2)  # Remove the channel dimension added by grayscale conversion
    img = image_3.numpy().reshape(1, 784).astype('float32') / 255  # Normalize image
    return img


# Function to preprocess image
def preprocess_image(img):
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0  # Normalize if needed
    return img_array

# Function to predict the class of an image
def predict(model,img):
    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0) # Create a batch
    predictions = model.predict (img_array)
    predicted_class = class_names[np.argmax(predictions[0])]
#     confidence = round(np.max(predictions[0]),2)
    confidence = round(100*(np.max(predictions[0])),2)

    return predicted_class, confidence

@app.route('/predict', methods=['POST'])
def predict_route():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    try:
        img = Image.open(BytesIO(file.read()))
        img_array = np.array(img)
        predicted_class,confidence = predict(MODEL, img_array)

        return jsonify({
            "predicted_class": predicted_class,
            "confidence": confidence
        })
    except Exception as e:
        print(f"Error during prediction: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='localhost', port=8000)