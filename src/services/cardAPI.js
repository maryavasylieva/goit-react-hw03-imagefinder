import axios from 'axios';

/* eslint-disable-next-line */
export const getCards = (query, page = 1) =>
  axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=12869339-9564296521435086f3a1c30fc`,
    )
    .then(({ data }) => data.hits);
