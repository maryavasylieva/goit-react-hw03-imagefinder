import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';
import Modal from './Modal';
// import mapper from './mapper';

class PhotoCard extends Component {
  static dafaultProps = {
    tags: 'image card',
  };

  static propTypes = {
    smallImage: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  };

  state = {
    openModal: false,
  };

  handleModalShow = () => {
    this.setState({ openModal: true });
  };

  handleModalHide = () => {
    this.setState({ openModal: false });
  };

  handleOverlayClick = e => {
    const { current } = this.modalOverlay;

    if (current && e.target !== current) return;

    this.handleClose();
  };

  render() {
    const { openModal } = this.state;

    const {
      smallImage,
      largeImage,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = this.props;

    return (
      <>
        <div className={styles.photoCard}>
          <img src={smallImage} alt={tags} />

          <div className={styles.stats}>
            <p className={styles.statsItem}>
              <i className="material-icons">thumb_up</i>
              {likes}
            </p>
            <p className={styles.statsItem}>
              <i className="material-icons">visibility</i>
              {views}
            </p>

            <p className={styles.statsItem}>
              <i className="material-icons">comment</i>
              {comments}
            </p>

            <p className={styles.statsItem}>
              <i className="material-icons">cloud_download</i>
              {downloads}
            </p>
          </div>

          <button
            type="button"
            className={styles.fullscreenButton}
            onClick={this.handleModalShow}
          >
            <i className="material-icons">zoom_out_map</i>
          </button>
        </div>
        {openModal && (
          <Modal
            url={largeImage}
            tags={tags}
            handleModalHide={this.handleModalHide}
            handleModalShow={this.handleModalShow}
          />
        )}
      </>
    );
  }
}

export default PhotoCard;
