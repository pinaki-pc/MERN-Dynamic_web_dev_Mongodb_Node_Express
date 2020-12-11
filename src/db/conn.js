const mongoose = require("mongoose");

// creating database
mongoose.connect("mongodb://localhost:27017/dynamicwebdb",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection Successful");
}).catch((error) => {
    console.log(error);
})