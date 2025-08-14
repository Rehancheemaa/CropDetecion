# 🌾 AI-Based Crop Disease Detection (Mobile App)
<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-0.73-blue?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/Python-3.10-yellow?logo=python" />
  <img src="https://img.shields.io/badge/Flask-2.3-green?logo=flask" />
  <img src="https://img.shields.io/badge/License-MIT-purple" />
</p>

## 📖 Overview

> An **AI-driven mobile application** designed to accurately **identify and diagnose diseases in Rice, Wheat, and Corn crops** through advanced image analysis.

🚀 **Core Concept**  
This app leverages the power of **Machine Learning** and **Convolutional Neural Networks (CNNs)** to process leaf images and:  
- 🩺 Detect visible disease patterns.  
- 🧪 Classify the specific disease type.  
- 📋 Display comprehensive details including **symptoms, causes, and recommended next steps**.  

💡 **Why it matters**  
By enabling **real-time, on-device detection**, the system empowers:
- 👨‍🌾 **Farmers** to take immediate preventive or corrective measures.  
- 🌱 **Agronomists** to quickly assess large-scale crop health.  
- 📊 **Researchers** to gather accurate field data without manual inspections.

📈 **Impact**  
- Minimize yield losses through **early detection**.  
- Reduce dependency on traditional, time-consuming diagnostic methods.  
- Provide actionable insights to guide **efficient crop management**.

---

## 📌 Features
- 📱 **Cross-platform mobile app** built with React Native & TypeScript.
- 🌾 Detects diseases for:
  - **Rice** (e.g., Nick Blast, Brown Spot, Gray Leaf Spot, Healthy)
  - **Wheat** (e.g., Brown Rust, Yellow Rust, Healthy)
  - **Corn** (e.g., Common Rust, Blight, Gray Leaf Spot, Healthy)
- 🤖 **AI Model** trained using Google Colab (Python) with **Convolutional Neural Networks (CNNs)** for image processing.
- 🔍 Shows **predicted disease name** and **detected symptoms**.
- 🌐 **Backend API** with Flask, accessed via **ngrok** tunnel.

---

## 🛠️ Tech Stack

### **Frontend**
- React Native (TypeScript)
- JavaScript
- Objective-C / Objective-C++ (for iOS native modules)
- Ruby (CocoaPods for iOS build)

### **Backend**
- Python (Flask API)
- Ngrok (tunnel for backend access from mobile)

### **Model Training**
- Google Colab (Python)
- TensorFlow / Keras
- NumPy, Pandas
- **Convolutional Neural Networks (CNNs)** for feature extraction and disease classification.

---

## 📂 Folder Structure
```
📦 CropDiseaseDetectionApp
┣ 📂 android/                # Native Android code
┣ 📂 ios/                    # Native iOS code
┣ 📂 src/                    # Main app source
┃ ┣ 📂 Navigation/           # Navigation setup
┃ ┣ 📂 api/                  # API call functions
┃ ┣ 📂 app/                  # App screens & components
┃ ┗ 📂 assets/images/        # Images used in the app
┣ 📂 tests/                  # Test files
┣ 📜 App.tsx                 # Main App entry point
┣ 📜 index.js                # React Native entry point
┣ 📜 package.json            # Project dependencies
┣ 📜 tsconfig.json           # TypeScript configuration
┣ 📜 README.md               # Documentation
┣ 📜 babel.config.js         # Babel setup
┣ 📜 metro.config.js         # Metro bundler setup
┣ 📜 .eslintrc.js            # ESLint rules
┣ 📜 .prettierrc.js          # Prettier rules
┣ 📜 Gemfile                 # iOS gem dependencies
┣ 📜 yarn.lock / package-lock.json
```

---

## ⚙️ How It Works
1. **Model Training**
   - Trained in **Google Colab** using a labeled dataset of rice, wheat, and corn leaf images.
   - Model saved and integrated into the Flask backend.

2. **Backend API**
   - Python Flask server loads the trained model.
   - Receives image from the mobile app, processes it, predicts the disease, and returns:
     - Disease name
     - Symptoms

3. **Mobile App**
   - Built in React Native with TypeScript.
   - Allows users to capture/upload an image.
   - Sends the image to backend API via **ngrok**.
   - Displays prediction results and symptoms.

---

## 🚀 Setup & Run

### Backend (Python + Flask)
```bash
# Install dependencies
pip install -r requirements.txt

# Run Flask API
python app.py
```

### Expose Backend with Ngrok
```bash
ngrok http 8000
# Copy the https URL from ngrok into your app's API config
```

### Mobile App (React Native + TypeScript)
```bash
# Install dependencies
yarn install

# Run the app
yarn start
```

---

## 🎯 Purpose
The goal of this project is to:
- **Assist farmers** in early disease detection.
- **Prevent crop losses** by identifying symptoms quickly.
- Provide **clear disease-specific information** to guide treatment.



## 🧑‍💻 Author
**Rehan Cheema**  
📧 Email: *rehancheemaa@gmail.com*

---

## 📜 License
Licensed under the **MIT License**.
