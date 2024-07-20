require("dotenv").config();
let http = require("http");
let express = require("express");
let app = express();
let cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConnect = require("./db/dbConnect");
let routes=require("./routes")

//cookie-parser
app.use(cookieParser());

//cors
app.use(
   cors({
      origin: "*"
   })
)

app.set("view engine", "ejs");

//body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/v1",routes)

app.get("/", (req, res) => {
   res.render("index");
});

//Database connection:-
dbConnect();

//Server setupo:-
http.createServer(app).listen(process.env.PORT, () => {
   console.log(`Server started on port ${process.env.PORT}`);
})