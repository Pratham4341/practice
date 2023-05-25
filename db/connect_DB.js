const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/PRACTICEPORTAL'
const live_url = 'mongodb+srv://prathamsharma4341:pratham1234@cluster0.upelc76.mongodb.net/admisionportal?retryWrites=true&w=majority'

const connectDB=()=>{
    return mongoose.connect(live_url)

.then(()=>{
    console.log("Connected Successfully")
})

.catch((error)=>{
    console.log(error)
})
}

module.exports=connectDB