const mongoose = require("mongoose");
const slugify = require("slugify");
const paginate = require("mongoose-paginate-v2");
/**
 * @swagger
 *   components:
 *       schemas:
 *           Category:
 *               type: object
 *               required:
 *                   - title
 *               properties:
 *                   title:
 *                       type: string
 *                       description: The category title.
 *                       example: Samsung
 *                   sortDesc:
 *                       type: string
 *                       description: The category's sort description.
 *                       example: The brands of Korean
 *                   longDesc:
 *                       type: string
 *                       description: The category's long description.
 *                       example: Samsung Electronics constantly reinvents the future. We explore the unknown to discover technologies to help people all over the world lead happier, healthier lives.
 *                   isDeteled:
 *                       type: boolean
 *                       description: mark the category is not available.
 *                       default: false
 *                       readOnly: true
 *                   slug:
 *                       type: string
 *                       description: The category slug.
 *                       example: samsung
 *                       readOnly: true
 *                   image_url:
 *                       type: string
 *                       description: The category image.
 *                       example: https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60
 */
const categorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        sortDesc: {
            type: String,
        },
        longDesc: {
            type: String,
        },
        isDeteled: {
            type: Boolean,
            default: false,
        },
        slug: {
            type: String,
            default: function () {
                return slugify(this.title);
            },
        },
        image_url: {
            type: String,
        },
    },
    { timestamps: true }
);

categorySchema.plugin(paginate);

module.exports = mongoose.model("category", categorySchema);
