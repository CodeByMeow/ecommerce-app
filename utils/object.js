const validObject = (obj) => {
    for (const key in obj) {
        if (obj[key] === undefined) {
            delete obj[key];
        }
    }

    return obj;
};

module.exports = {
    validObject,
};
