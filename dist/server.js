"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
dotenv_1.default.config();
// Create server
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use("/api/products", product_routes_1.default);
// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.DATABASE_URL;
mongoose_1.default
    // .connect("mongodb+srv://<db_user>:<db_password>@ciccc.o8yo3tc.mongodb.net/<db_name>?retryWrites=true&w=majority&appName=<cluster_name>")
    .connect(MONGO_URL)
    .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
})
    .catch((err) => console.error("Failed to connect to MongoDB", err));