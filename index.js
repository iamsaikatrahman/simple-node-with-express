const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("WOW From  Ever node express with node mone");
});

const users = [
  { id: 0, name: "Jhone", email: "jhone@gmail.com" },
  { id: 1, name: "Dhone", email: "dhone@gmail.com" },
  { id: 2, name: "Phone", email: "phone@gmail.com" },
  { id: 3, name: "Thone", email: "thone@gmail.com" },
  { id: 4, name: "Chone", email: "chone@gmail.com" },
  { id: 5, name: "Khone", email: "khone@gmail.com" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  // res.send(JSON.stringify(newUser))
  res.send(newUser);
});
app.listen(port, () => {
  console.log("listentin to port", port);
});
