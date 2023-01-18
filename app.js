const express = require('express')
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const path = require("path");
const UserRoutes = require("./routes/userRoutes")
// const DB = "mongodb+srv://anurag2002:1915010@minorprojectg9.cxzyv.mongodb.net/?retryWrites=true&w=majority";
const DB = "mongodb+srv://harry2:12345678aA@cluster0.j2p6aoh.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(DB);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use("/", UserRoutes);
// app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname)));
app.set('views', path.join(__dirname, ''));

//Rendering Embedded JavaScript
app.get("/", (req, res) => res.render("index"))
app.get("/register", (req, res) => res.render("registration_page"))
app.get("/home", (req, res) => res.render("home"))
app.get("/1984", (req, res) => res.render("1984"))
app.get("/chamber_of_secret", (req, res) => res.render("chamber_of_secret"))
app.get("/diary_of_a_young_girl", (req, res) => res.render("diary_of_a_young_girl"))
app.get("/dune", (req, res) => res.render("dune"))
app.get("/eclipse_review", (req, res) => res.render("eclipse_review"))
app.get("/harrypotter_sorcerer_stone", (req, res) => res.render("harrypotter_sorcerer_stone"))
app.get("/list_of_books", (req, res) => res.render("list_of_books"))
app.get("/order_of_phoneix", (req, res) => res.render("order_of_phoneix"))
app.get("/philosopher's_stone", (req, res) => res.render("philosopher's_stone"))
app.get("/relativity", (req, res) => res.render("relativity"))
app.get("/twilight_review", (req, res) => res.render("twilight_review"))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
