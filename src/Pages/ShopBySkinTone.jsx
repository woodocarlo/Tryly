import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import './ShopBySkinTone.css';

const ShopBySkinTone = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [imageCaptured, setImageCaptured] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [stream, setStream] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    try {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        setStream(null);
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log("Media stream obtained:", mediaStream);

      const assignStream = () => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          console.log("Video srcObject set:", videoRef.current.srcObject);
          videoRef.current.play()
            .then(() => console.log("Video playback started"))
            .catch((err) => console.error("Error playing video:", err));
        } else {
          console.warn("videoRef.current is null, retrying...");
          setTimeout(assignStream, 100);
        }
      };

      assignStream();
      setStream(mediaStream);
      setCameraActive(true);
      setCurrentStep(1);
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access camera. Please check permissions.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
    setCameraActive(false);
  };

  const captureImage = () => {
    console.log("Attempting to capture image...");
    console.log("videoRef.current:", videoRef.current);
    console.log("canvasRef.current:", canvasRef.current);

    if (videoRef.current && canvasRef.current) {
      if (videoRef.current.readyState >= 2) {
        const context = canvasRef.current.getContext('2d');
        const { videoWidth, videoHeight } = videoRef.current;
        console.log("Video dimensions:", videoWidth, videoHeight);
        if (videoWidth && videoHeight) {
          canvasRef.current.width = videoWidth;
          canvasRef.current.height = videoHeight;
          context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);
          setImageCaptured(true);
          setCurrentStep(3);
          setTimeout(stopCamera, 200);
        } else {
          console.error("Invalid video dimensions:", videoWidth, videoHeight);
          alert("Failed to capture image. Please try again.");
        }
      } else {
        console.error("Video not ready, readyState:", videoRef.current.readyState);
        alert("Camera not ready. Please try again.");
      }
    } else {
      console.error("Video or canvas ref not available", {
        videoRef: videoRef.current,
        canvasRef: canvasRef.current,
      });
      alert("Capture failed. Please ensure camera is active and try again.");
    }
  };

  const retakePhoto = () => {
    setImageCaptured(false);
    setPredictionResult(null);
    setCurrentStep(1);
    startCamera();
  };

  const proceedToUpload = async () => {
    if (canvasRef.current) {
      try {
        // Convert canvas to blob
        const dataUrl = canvasRef.current.toDataURL('image/jpeg');
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const formData = new FormData();
        formData.append('image', blob, 'captured_image.jpg');

        // Send image to Flask backend
        const predictResponse = await fetch('http://localhost:5000/predict', {
          method: 'POST',
          body: formData,
        });

        if (!predictResponse.ok) {
          throw new Error('Failed to get prediction from server');
        }

        const result = await predictResponse.json();
        setPredictionResult(result);
        setCurrentStep(3); // Stay on step 3 to show results
      } catch (err) {
        console.error("Error uploading image:", err);
        alert("Failed to process image. Please try again.");
      }
    } else {
      alert("No image captured.");
    }
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  return (
    <>
      <Navbar />
      <Header />
      <div className="shop-by-skin-container">
        <div className="image-container">
          <img
            src="https://i.postimg.cc/s2CPFZh7/Add-a-heading-2.jpg"
            alt="Shop By Skin Tone"
            className="shop-by-skin-image"
          />
          <div className="text-overlay">
            <h1 className="highlight-title">Shop By Skin Tone</h1>
            <p className="section-description">Find the color made for you.</p>
          </div>
        </div>

        <div className="content-container">
          <div className="steps-section">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Click a photo of your face: </h3>
                <p>Make sure the face is completely in frame and proper lighting is there</p>
              </div>
            </div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Upload the image</h3>
                <p>Select the captured image for analysis</p>
              </div>
            </div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Get your skin tone</h3>
                <p>Our system will analyze your skin tone</p>
                {predictionResult && (
                  <div className="prediction-result">
                    <p><strong>Predicted Skin Tone:</strong> {predictionResult.skin_tone}</p>
                    <p><strong>Dominant Color (BGR):</strong> {predictionResult.dominant_color.join(', ')}</p>
                    <p><strong>Recommended Colors (RGB):</strong></p>
                    <ul>
                      {predictionResult.recommended_colors.map((color, index) => (
                        <li key={index}>{color.join(', ')}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Shop by your skin tone</h3>
                <p>Discover products that match your skin tone</p>
              </div>
            </div>
          </div>

          <div className="camera-section">
            <div className="camera-placeholder">
              <button onClick={startCamera} className="action-button">
                Turn On Camera
              </button>
              <canvas ref={canvasRef} className="captured-image" style={{ display: imageCaptured ? 'block' : 'none' }}></canvas>
              {cameraActive && !imageCaptured ? (
                <div className="camera-active">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="camera-feed"
                    muted
                  ></video>
                  <div className="camera-controls">
                    <button onClick={captureImage} className="capture-button">
                      Capture Photo
                    </button>
                    <button onClick={stopCamera} className="stop-button">
                      Turn Off Camera
                    </button>
                  </div>
                </div>
              ) : imageCaptured ? (
                <div className="image-preview">
                  <div className="preview-controls">
                    <button onClick={proceedToUpload} className="action-button">
                      Use This Photo
                    </button>
                    <button onClick={retakePhoto} className="retake-button">
                      Retake Photo
                    </button>
                  </div>
                </div>
              ) : (
                <img src="https://i.postimg.cc/qq0Qz6F7/2.png" alt="Camera placeholder" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopBySkinTone;