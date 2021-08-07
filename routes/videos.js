const express = require('express');
const router = express.Router();
const upload_image = require("../handleUploads/image_upload");
const upload_video = require("../handleUploads/video_upload");

// Image POST handler.
router.post("/image_upload", function (req, res) {
    upload_image(req, function (err, data) {

        if (err) {
            return res.status(404).end(JSON.stringify(err));
        }

        res.send(data);
    });
});

// Video POST handler.
router.post("/video_upload", function (req, res) {
    upload_video(req, function (err, data) {

        if (err) {
            return res.status(404).end(JSON.stringify(err));
        }

        res.send(data);
    });
});

module.exports = router;