const express = require("express");
const app = express();

app.set("port", 3000);
app.set("view engine", "jsx");
app.set("views", __dirname + "/views");
app.engine("jsx", require("express-react-views").createEngine({transformViews: false}));

require("babel/register")({
    ignore: false
});

app.use("/", function (req, res) {
    res.render("index", "");
});

app.listen(app.get("port"), function () {
});