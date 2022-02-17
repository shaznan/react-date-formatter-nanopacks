const useDateFormatter = () => {
  const formatDate = (date, dateString, customSeperator = "") => {
    const dateObject = new Date(date);
    const day = dateObject.getUTCDate();
    const month = dateObject.getUTCMonth() + 1;
    const year = dateObject.getUTCFullYear();

    const dateFormat = dateString
      .replace("dd", day)
      .replace("mm", month)
      .replace("yyyy", year);

    if (customSeperator.length) {
      return dateFormat.split("/").join(customSeperator);
    } else {
      return dateFormat;
    }
  };

  return [formatDate];
};

export default useDateFormatter;
