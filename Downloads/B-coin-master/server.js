const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./route/route")(app)
const Port = 4000;
const path = require("path");

app.use(express.json());
app.use(bodyParser.json());
app.use('/',express.static(path.join(__dirname, '/app/')));
app.use((req, res) => res.status(500).send({ success: false }));
app.listen(`${Port}`,()=>{
    console.log(`App is running on port ${Port}`);
});

