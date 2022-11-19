const storeService = {
  convertToHumanDate: (date) => {
    return new Date(date).toLocaleDateString("UTC", {
      year: "numeric",
      month: "long",
    });
  },
  convertToCurrentTime: (time) => {
    // return Date obj
    return new Date(time);
  },
  convertCurrency: (amount, currency) => {
    // Format the price above to USD, INR, EUR using their locales.
    let formatCurrency = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: `${currency}`,
    });
    // return a string => use the replace() method
    return formatCurrency
      .format(amount)
      .replace(/(\.|,)00$/g, "")
      .replace(/₫/g, "");
  },
  validateNumberField: (number) => {
    const numberRegEx = /\-?\d*\.?\d{1,2}/;
    return numberRegEx.test(String(number).toLowerCase());
  },
  textToLowerCase: (str) => {
    return str.toLowerCase().replace(/ /g, "_");
  },
  findItemIndex: (arr, id) => {
    const indx = arr.findIndex(
      (item) => item._id === id
    );
    return indx;
  }
};

export default storeService;
