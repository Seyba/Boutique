const mongoose = require('mongoose')

const databaseConnection = () => {
    //* connecting to the database
    mongoose.connect(process.env.MONGO_URI)

    //* check for a connection
    const db = mongoose.connection
    

    db.on("error", (err) => console.log(`${err.message} is MongoD not running?`))
    db.on("open", () => console.log(`Mongo successfully connected`))
    db.on("close", () => console.log("mongo disconnected"))
}

module.exports = databaseConnection
// module.exports = function connectDB(){
//     //* connecting to the database
//     mongoose.connect(process.env.MONGO_URI)

//     //* check for a connection
//     const db = mongoose.connection
    

//     db.on("error", (err) => console.log(`${err.message} is MongoD not running?`))
//     db.on("open", () => console.log(`Mongo successfully connected`))
//     db.on("close", () => console.log("mongo disconnected"))
// }