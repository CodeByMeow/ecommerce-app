const checkMissing = (...args) => {
    return args.some((element) => !element);
};

module.exports = {
    checkMissing,
};
