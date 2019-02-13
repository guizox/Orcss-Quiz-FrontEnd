const defaultState = {
  cards: [],
  isLoading: false
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  (({
    REQUEST_CARDS: {
      ...state,
      isLoading: true
    },
    FULLFILL_CARDS: {
      ...state,
      isLoading: false,
      cards: payload
    }
  }[type] || state)());
};
