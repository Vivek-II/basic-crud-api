const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// FRONTEND SERVE KARNE KE LIYE
app.use(express.static(path.join(__dirname, "frontend")));

let users = [];
let idCounter = 1;

// CREATE USER
app.post("/users", (req, res) => {
  const user = { id: idCounter++, ...req.body };
  users.push(user);
  res.json({ message: "User added", users });
});

// READ USERS
app.get("/users", (req, res) => {
  res.json(users);
});

// UPDATE USER
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = { id, ...req.body };
  res.json({ message: "User updated", users });
});

// DELETE USER
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(u => u.id !== id);
  res.json({ message: "User deleted", users });
});

// SERVER START
app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
