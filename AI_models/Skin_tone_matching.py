import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from mtcnn import MTCNN
from sklearn.cluster import KMeans
import csv
import os

model = load_model('model.h5')
classes = ['Fair_Light', 'Medium_Tan', 'Dark_Deep']
descriptive_labels = {
    'Fair_Light': 'Fair / Light',
    'Medium_Tan': 'Medium / Tan',
    'Dark_Deep': 'Dark / Deep'
}
mtcnn = MTCNN()

def load_dataset(file_path):
    dataset = []
    with open(file_path, mode="r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            skin_tone = [int(row["Skin_Tone_R"]), int(row["Skin_Tone_G"]), int(row["Skin_Tone_B"])]
            suited_colors = [
                [int(value) for value in color.split(",")]
                for color in row["Suited_Colors"].split(";")
            ]
            dataset.append({"skin_tone": skin_tone, "suited_colors": suited_colors})
    return dataset

dataset = load_dataset("AI_models/dataset for skin tone.csv")

def kmeans_dominant_color(image, k=3):
    pixels = image.reshape(-1, 3)
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(pixels)
    dominant_color = kmeans.cluster_centers_[np.argmax(np.bincount(kmeans.labels_))]
    return dominant_color.astype(int)

def find_closest_skin_tones(detected_rgb, threshold=30):
    close_tones = []
    for entry in dataset:
        skin_tone = np.array(entry["skin_tone"])
        distance = np.linalg.norm(skin_tone - detected_rgb)
        if distance <= threshold:
            close_tones.append({"skin_tone": entry["skin_tone"], "suited_colors": entry["suited_colors"], "distance": distance})
    return sorted(close_tones, key=lambda x: x["distance"])

def predict_skin_tone(image_path):
    result = {"skin_tone": None, "dominant_color": None, "recommended_colors": []}
    try:
        image = cv2.imread(image_path)
        if image is None:
            raise ValueError("Image could not be read.")

        faces = mtcnn.detect_faces(image)
        if len(faces) > 0:
            largest_face = max(faces, key=lambda f: f['box'][2] * f['box'][3])
            x, y, w, h = largest_face['box']
            detected_face = image[y:y + h, x:x + w]
            resized_face = cv2.resize(detected_face, (120, 90))
            preprocessed_face = tf.keras.applications.mobilenet_v2.preprocess_input(resized_face[np.newaxis, ...])
            predictions = model.predict(preprocessed_face)
            predicted_class_idx = np.argmax(predictions)
            predicted_class = classes[predicted_class_idx]
            result["skin_tone"] = descriptive_labels[predicted_class]

            kmeans_color = kmeans_dominant_color(detected_face)
            result["dominant_color"] = kmeans_color.tolist()
            kmeans_square = np.full((100, 100, 3), kmeans_color, dtype=np.uint8)
            kmeans_path = os.path.join("color_result", "kmeans_dominant_color.jpg")
            os.makedirs("color_result", exist_ok=True)
            cv2.imwrite(kmeans_path, kmeans_square)

            detected_rgb = kmeans_color[::-1]
            close_tones = find_closest_skin_tones(detected_rgb, threshold=40)
            if close_tones:
                all_recommendations = set()
                for tone in close_tones:
                    for color in tone["suited_colors"]:
                        all_recommendations.add(tuple(color))
                result["recommended_colors"] = [list(color) for color in all_recommendations]
        else:
            result["error"] = "No face detected in the uploaded image."
    except Exception as e:
        result["error"] = f"Error processing the image: {e}"
    return result

if __name__ == "__main__":
    image_path = input("Enter the path to the image file: ")
    result = predict_skin_tone(image_path)
    print(f"Predicted Skin Tone: {result['skin_tone']}")
    print(f"Dominant Color (BGR): {result['dominant_color']}")
    print("Recommended Colors (RGB):")
    for color in result['recommended_colors']:
        print(color)