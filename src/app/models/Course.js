const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
const { TRUE } = require('node-sass');

mongoose.plugin(slug);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        slug: { type: String, slug: `name`, unique: true },
        videoId: { type: String },
        level: { type: String },
    },
    {
        timestamps: true,
    },
);

const model = mongoose.model('Course', Course);
module.exports = model;
