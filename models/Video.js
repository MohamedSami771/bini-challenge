const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    video: {
        type: String,
    }
});

const Video = mongoose.model('Video', videoSchema)
module.exports = Video;