// Include required libs
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const api = require("./routes/videos");


app.use(express.static(__dirname + "/"));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "../frontend/src/app.js");
});
app.use('/', api);

// Create folder for uploading files.
var filesDir = path.join(path.dirname(require.main.filename), "uploads");

if (!fs.existsSync(filesDir)){
  fs.mkdirSync(filesDir);
}

// Init server.
app.listen(3000, () => {
    console.log('Server is up on port ' + 3000)
})
