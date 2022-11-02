const { default: slugify } = require("slugify");

const generalSlug = (title) => {
    return slugify(title);
};

const addTailSlug = (slug, tail) => {
    return `${slug}-${tail}`;
};

module.exports = {
    generalSlug,
    addTailSlug,
};
