import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from './PhotoCard';
import styles from './Gallery.module.css';

const Gallery = ({ cards }) => (
  <ul className={styles.gallery}>
    {cards.map(card => (
      <li className={styles.galleryItem} key={card.id} id={card.id}>
        <PhotoCard {...card} />
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Gallery;
