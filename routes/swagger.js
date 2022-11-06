const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.3",
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
        components: {
            securitySchemes: {
                ApiKeyAuth: {
                    type: "apiKey",
                    in: "header",
                    name: "x-token",
                },
            },
            responses: {
                404: {
                    description: "The server not found any resources.",
                    contents: "application/json",
                },
                401: {
                    description: "Unauthorized",
                    contents: "application/json",
                },
            },
        },
        security: [{ ApiKeyAuth: [] }],
    },
    apis: ["./routes/*.js", "./models/*.js"],
};

const specs = swaggerJSDoc(options);
router.use(swaggerUi.serve);
router.get("/", swaggerUi.setup(specs));

module.exports = router;
