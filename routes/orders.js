import {createOrder, getOrders, getOrder} from "../controller/forOrders.js"
import express from "express"

const router = express.Router()

router.post("/createOrder", createOrder)
router.get("/getOrders", getOrders)
router.get("/getOrder", getOrder)

export default router