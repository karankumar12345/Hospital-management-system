const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const mongoose_connection = require("./db/connection");

// Routers
const admin_router = require("./router/admin");
const auth_router = require("./router/auth");
const public_router = require("./router/public");
const doctor_router = require("./router/doctor");
const patient_router = require("./router/patient");

const app = express();

// Middleware
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
    res.status(200).json({
        message: 'Karan'
    });
});

// MongoDB Connection
mongoose_connection(app);

// Routes
app.use("/public", public_router);
app.use(auth_router);
app.use(admin_router);
app.use(patient_router);
app.use(doctor_router);

// Start Server
const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
