const getDifferenceMinutes = (today, unixTime) => {
  const setToday = new Date(new Date(today * 1000).toUTCString());
  const setUnixTime = new Date(new Date(unixTime * 1000).toUTCString());

  const diffInMs = setToday - setUnixTime;
  return Math.ceil(diffInMs / (1000 * 60));
};

module.exports = getDifferenceMinutes;
