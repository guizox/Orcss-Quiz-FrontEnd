const requestCardsAction = () => ({
  type: "REQUEST_CARDS"
});

const fullFillCardsAction = (data = [{ name: "História", id: 1 }]) => ({
  type: "FULLFILL_CARDS",
  payload: data
});

export default { requestCardsAction, fullFillCardsAction };
