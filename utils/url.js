const { default: slugify } = require("slugify");

const generalSlug = (title) => {
    const options = {
        lower: true,
    };

    return slugify(title, options);
};

const addTailSlug = (slug, tail) => {
    return `${slug}-${tail}`;
};

module.exports = {
    generalSlug,
    addTailSlug,
};
