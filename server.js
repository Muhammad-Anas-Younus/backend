import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import productRoutes from "./routes/products.js"
import orderRoutes from "./routes/orders.js"


const app = express()

app.get("/", (req,res) => {
    res.send("working baby")
})

const PORT = process.env.PORT || 4000

//middlewares
dotenv.config()
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use("/uploads", express.static("uploads"))

mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true}).then(() => console.log("sever si running" + PORT)).catch(err => console.log(err))

app.use("/products", productRoutes)
app.use("/orders", orderRoutes)

app.listen(PORT, () => {
    console.log("working")
})