const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    return hashPassword;
};

const comparePassword = async (password, hash) => {
    const match = await bcrypt.compare(password, hash);
    if (match) return true;

    return false;
};

module.exports = {
    hashPassword,
    comparePassword,
};
