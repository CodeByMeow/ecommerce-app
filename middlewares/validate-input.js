const ajv = require("ajv");

module.exports = (schema) => (req, res, next) => {
    const validator = new ajv({
        allErrors: true,
    });

    const validateFn = validator.compile(schema);
    const isValid = validateFn(req.body);
    if (!isValid) {
        return res.status(400).json(validateFn.errors);
    }

    next();
};
