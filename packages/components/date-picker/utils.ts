export const formatTime = (t: Date) => {
  let date = new Date(t);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  return {
    year,
    month,
    day
  };
};
