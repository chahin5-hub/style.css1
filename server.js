const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// اتصال بقاعدة البيانات
mongoose.connect("mongodb://127.0.0.1:27017/mywebsite");

// نموذج مستخدم
const User = mongoose.model("User", {
  username: String,
  password: String,
});

// تسجيل حساب
app.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("تم إنشاء الحساب");
});

// تسجيل الدخول
app.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (user) res.send("تم تسجيل الدخول");
  else res.send("خطأ");
});

// API مثال (طقس)
app.get("/api/data", (req, res) => {
  res.json({ message: "بيانات من السيرفر 🔥" });
});

app.listen(3000, () => console.log("Server running"));
