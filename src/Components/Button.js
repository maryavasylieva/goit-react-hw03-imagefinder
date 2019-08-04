import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';

const Button = ({ onLoadMore }) => (
  <div className={styles.buttonLoad}>
    <button type="button" onClick={onLoadMore} className={styles.button}>
      Load More
    </button>
  </div>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
export default Button;
