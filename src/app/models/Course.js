const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
// soft delete
const mongooseDelete = require('mongoose-delete');
// id tự động tăng
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        _id: { type: Number },
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        slug: { type: String, slug: `name`, unique: true },
        videoId: { type: String },
        level: { type: String },
    },
    {
        _id: false,
        timestamps: true,
    },
);

// Add plugin
mongoose.plugin(slug);
Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

const model = mongoose.model('Course', Course);
module.exports = model;
