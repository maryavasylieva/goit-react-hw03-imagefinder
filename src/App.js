import React, { Component } from 'react';
import Gallery from './Components/Gallery';
import mapper from './Components/mapper';
import { getCards } from './services/cardAPI';
// import * as cardAPI from './services/cardAPI';
import SearchForm from './Components/SearchForm';
import Button from './Components/Button';

class App extends Component {
  state = { cards: [], category: '', page: 2 };

  componentDidMount() {
    const { category } = this.state;
    getCards(category).then(cards => this.setState({ cards: mapper(cards) }));
  }

  componentDidUpdate() {
    const { cards } = this.state;
    if (cards.length > 12) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleGetInfo = category => {
    getCards(category).then(cards =>
      this.setState({ cards: mapper(cards), category, page: 2 }),
    );
  };

  handleLoadMore = () => {
    const { category, page } = this.state;
    getCards(category, page).then(cards =>
      this.setState(state => ({
        cards: [...state.cards, ...mapper(cards)],
        page: state.page + 1,
      })),
    );
  };

  render() {
    const { cards } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.handleGetInfo} />
        {cards.length > 0 && (
          <>
            <Gallery cards={cards} />
            <Button onLoadMore={this.handleLoadMore} />
          </>
        )}
      </>
    );
  }
}

export default App;
