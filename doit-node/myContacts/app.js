const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(methodOverride("_method"));

app.use("/", require("./routes/loginRoutes"));
app.use("/contacts", require("./routes/contactRoutes"));

dbConnect();

app.listen(3000, () => {
    console.log("서버 실행 중");
});

