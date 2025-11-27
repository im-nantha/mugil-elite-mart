import React from 'react';
import './ImageGrid.scss';

// Default images - same set that was used in index.html
const DEFAULT_IMAGES = [
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-01.jpg',
    alt: 'Food and drink 01',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-02.jpg',
    alt: 'Food and drink 02',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-03.jpg',
    alt: 'Food and drink 03',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-04.jpg',
    alt: 'Food and drink 04',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-05.jpg',
    alt: 'Food and drink 05',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-06.jpg',
    alt: 'Food and drink 06',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-07.jpg',
    alt: 'Food and drink 07',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-08.jpg',
    alt: 'Food and drink 08',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-09.jpg',
    alt: 'Food and drink 09',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-10.jpg',
    alt: 'Food and drink 10',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-11.jpg',
    alt: 'Food and drink 11',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-12.jpg',
    alt: 'Food and drink 12',
  },
];

/**
 * ImageGrid component
 * Props:
 * - images: [{ src, alt }] optional 
 */
function ImageGrid({ images = DEFAULT_IMAGES }) {
  return (
    <div className="image-grid">
      {images.map((img, idx) => (
        <div key={idx} className={`image image${String(idx + 1).padStart(2, '0')}`}>
          <img loading="lazy" src={img.src} alt={img.alt || ''} />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
