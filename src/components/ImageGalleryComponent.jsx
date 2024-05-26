import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState, useEffect } from "react";

const ImageGalleryComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageList = [];
        for (let i = 1; i <= 10; i++) {
          const imageSrc = await import(`../Assets/Artworks/${i}.jpg`);
          imageList.push({
            original: imageSrc.default,
            thumbnail: imageSrc.default,
            description: `Image ${i}`,
            originalAlt: `Image ${i}`,
          });
        }
        // Update state with the fetched images
        setImages(imageList);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    // Call the fetchImages function
    fetchImages();
  }, []);

  return (
    <div
      style={{
        paddingTop: "70px",
        paddingBottom: "70px",
        backgroundColor: " rgba(248, 237, 235, 0.863)",
      }}
    >
      <h1 className="main-name heading-name">
        <b>SHOWCASE</b>
      </h1>
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
};

export default ImageGalleryComponent;
