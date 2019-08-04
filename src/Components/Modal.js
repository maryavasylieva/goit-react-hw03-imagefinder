import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';

class Modal extends Component {
  static defaultProps = {
    tags: 'Cool image',
  };

  static propTypes = {
    url: PropTypes.string.isRequired,
    tags: PropTypes.string,
    handleModalHide: PropTypes.func.isRequired,
    handleModalShow: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseEscape);
  }

  handleOpen = () => {
    this.props.handleModalShow();
  };

  handleClose = () => {
    this.props.handleModalHide();
  };

  handleCloseEscape = e => {
    if (e.code !== 'Escape') return;
    this.handleClose();
  };

  render() {
    const { url, tags } = this.props;

    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <img src={url} alt={tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
