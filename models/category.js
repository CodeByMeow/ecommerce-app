const mongoose = require("mongoose");
const slugify = require("slugify");
/**
 * @swagger
 *   components:
 *       schemas:
 *           Category:
 *               type: object
 *               required:
 *                   - title
 *               properties:
 *                   _id:
 *                      type: string
 *                      readOnly: true
 *                      description: The automic id of category.
 *                      example: 63675fcb93f5623d2b684b72
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
 *                   isDeleted:
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
 *                   createdAt:
 *                       type: string
 *                       format: date-time
 *                       readOnly: true
 *                   updatedAd:
 *                       type: string
 *                       format: date-time
 *                       readOnly: true
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
        isDeleted: {
            type: Boolean,
            default: false,
        },
        slug: {
            type: String,
            default: function () {
                return slugify(this.title, { lower: true });
            },
        },
        image_url: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("category", categorySchema);
