const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bhavikadynamic",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("server is connecting");
}).catch((error)=>{
    console.log(error);
})