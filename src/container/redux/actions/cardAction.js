export const requestCardsAction = () => {
  return { type: "REQUEST_CARDS" };
};

export const fullFillCardsAction = (data = [{ name: "História", id: 1 }]) => ({
  type: "FULLFILL_CARDS",
  payload: data
});
