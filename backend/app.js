const express = require("express")
const cors = require("cors")
const signupRouter = require("./routers/signup_router")
const bodyParser = require('body-parser');
const loginRouter = require('./routers/login_router')
const mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

app.use('/signup', signupRouter);
app.use('/login', loginRouter);

const uri = "mongodb+srv://acelmargallo04:MkfhoIf8tNp0yB7u@cluster0.yw4ydrg.mongodb.net/?retryWrites=true&w=majority";
const port = 5000;

// app.use(cors({
//     origin: ["https://elementary-suggested.vercel.app",
//         "https://backend-tjgb.onrender.com"]
// }));

app.use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://elementary-suggested.vercel.app"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
    res.setHeader("Access-Control-Max-Age", 7200);
  
    next();
  });

  
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