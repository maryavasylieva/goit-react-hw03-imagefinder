import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { category: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.category);
    this.setState({ category: '' });
  };

  handleChange = e => {
    this.setState({ category: e.target.value });
  };

  render() {
    const { category } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={category}
          placeholder="Search images..."
          autoComplete="off"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchForm;
