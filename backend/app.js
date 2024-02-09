const express = require("express")
const cors = require("cors")
const signupRouter = require("./routers/signup_router")
const bodyParser = require('body-parser');
const loginRouter = require('./routers/login_router')
const mongoose = require("mongoose")

const app = express()

app.use(cors());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

app.use('/signup', signupRouter);
app.use('/login', loginRouter);

const uri = "mongodb+srv://acelmargallo04:MkfhoIf8tNp0yB7u@cluster0.yw4ydrg.mongodb.net/?retryWrites=true&w=majority";
const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection connected"))
  .catch((error) => console.error("MongoDB connection failed:", error));