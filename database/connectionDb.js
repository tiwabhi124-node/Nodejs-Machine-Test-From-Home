const  Mongoose  = require("mongoose");

Mongoose.connect('mongodb://localhost:27017/studentScores',{
    
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true 

})