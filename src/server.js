const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const vntUtil = require("./vntUtil");

const profileRoutes = require("./profile/routes");
const loginRoutes = require("./login/routes");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(vntUtil.CONN_STRING, {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function () {
    console.log(`MongoDB database connection established successfully`);
})

app.use(vntUtil.PROFILE_API_PREFIX, profileRoutes);
app.use(vntUtil.USER_API_PREFIX, loginRoutes);

app.listen(process.env.PORT || vntUtil.PORT, function () {
    console.log("Server is running on Port: " + vntUtil.PORT);
});