const express = require('express');
const app = express();
const connectDb = require("./configs/dbConnection")
const cors = require("cors");
require('dotenv').config();
const cookieParser = require("cookie-parser");
// Middleware

connectDb();

app.use(cors({
  origin: process.env.ORIGIN,
  credentials: true
}));


app.use(express.json());
app.use(cookieParser());



//ROUTES

app.use("/api/auth",require("./routes/authenticationRoutes"));
app.use("/api/reading-test",require("./routes/readingExamRoutes"))
//
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
