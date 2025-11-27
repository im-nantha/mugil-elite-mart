import React from 'react';
import './ImageGrid.scss';

// Default images - same set that was used in index.html
const DEFAULT_IMAGES = [
  {
    src: '/assets/images/about-gallery/1.png',
    alt: 'Certification 01',
  },
  {
    src: '/assets/images/about-gallery/2.png',
    alt: 'Certification 02',
  },
  {
    src: '/assets/images/about-gallery/3.png',
    alt: 'Certification 03',
  },
  {
    src: '/assets/images/about-gallery/4.png',
    alt: 'Certification 04',
  },
  {
    src: '/assets/images/about-gallery/5.png',
    alt: 'Certification 05',
  },
  {
    src: '/assets/images/about-gallery/6.png',
    alt: 'Certification 06',
  },
  {
    src: '/assets/images/about-gallery/7.png',
    alt: 'Certification 07',
  },
  {
    src: '/assets/images/about-gallery/8.png',
    alt: 'Certification 08',
  }
];


/**
 * ImageGrid component
 * Props:
 * - images: [{ src, alt }] optional 
 */
function ImageGrid({ images = DEFAULT_IMAGES }) {
  return (
    <div className="image-grid mugil-container">
      {images.map((img, idx) => (
        <div key={idx} className="image">
          <img loading="lazy" src={img.src} alt={img.alt || ''} />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
