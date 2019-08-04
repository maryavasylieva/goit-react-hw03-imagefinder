const mapper = arr => {
  return arr.map(
    ({ webformatURL: smallImage, largeImageURL: largeImage, ...el }) => ({
      smallImage,
      largeImage,
      ...el,
    }),
  );
};

export default mapper;
