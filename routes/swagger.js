const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    swaggerDefinition: {
        openapi: "3.0.1",
        info: {
            title: "Ecommerce API",
            version: "1.0.0",
            description: "This is a REST API application made with Express.",
        },
        servers: [
            {
                url: "http://localhost:3001/api/v1",
                description: "Deverlopment server",
            },
        ],
        APIKeyHeader: {
            type: "apikey",
            in: "header",
            name: "x-token",
        },
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(options);
router.use(swaggerUi.serve);
router.get("/", swaggerUi.setup(specs));

module.exports = router;
