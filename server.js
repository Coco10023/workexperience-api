const express = require("express");
const cors = require("cors");
require("dotenv").config();

const workexperienceRoutes = require("./routes/workexperienceRoutes");

const app = express();
const PORT = process.env.PORT || 3306;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API is running" });
}); 

app.use("/api/workexperience", workexperienceRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});