const express = require('express');
const cors = require("cors");
const jwt = require('jsonwebtoken');


const app = express();
app.use(express.json());
app.use(cors());

////connction database////
const mongoose = require("mongoose");

const uri = "mongodb://localhost/Brief_Lupin";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection is done");
});

///routes///



const checkoutRoutes = require("./routes/Checkout");
app.use('/checkout', checkoutRoutes);

const UserRouter = require("./routes/userRoute");
app.use("/user", UserRouter);

const AdminRouter = require("./routes/AdminRoute");
app.use("/admin", AdminRouter);

const produitRouter = require("./routes/produitRoute");
app.use("/produit",produitRouter );

app.listen(2029, () => console.log('Server started on port 1010'));