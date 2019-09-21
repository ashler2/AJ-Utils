module.exports = formatNumber = (num, prefix) => {
  return !prefix
    ? num
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        .replace(/(\...)/gim, "")
    : `${prefix}` + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
