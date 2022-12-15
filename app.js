const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Post = require("./post_model");

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://sa:MetaEdge123456@cluster0.iphtqbn.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlparser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connected Atlas");
  })
  .catch((e) => {
    console.log(err);
  });

//middleware
app.use(express.static("public"));
app.use(express.static("public/pic"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/post", async (req, res) => {
  let { name, email, subject, word } = req.body;
  let newPost = new Post({ name, email, subject, word });
  await newPost
    .save()
    .then(() => {
      res.send("訊息傳送成功!");
    })
    .catch((e) => {
      res.send("姓名與訊息為必填欄位!");
    });
});

app.get("*", (req, res) => {
  res.status(404);
  console.log(res.statusCode);
  res.render("error.ejs");
});

app.listen(3000, () => {
  console.log("Server is running");
});
