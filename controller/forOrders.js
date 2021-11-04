import Order from "../models/orders.js"

export const createOrder = async (req, res) => {
	const order = new Order({
		cart: req.body.cart,
		total: req.body.total,
		customerDetails: req.body.customerDetails
	})
	try{
		await order.save()
		res.status(201).json(order)
	}catch(err){
		res.status(401).json({error: err.message})
	}
}

export const getOrders = async (req, res) => {
	try{
		const orders = await Order.find()
		res.status(200).json(orders)
	}catch(err){
        res.status(404).json({error: err.message})
    }
}

export const getOrder = async (req, res) => {
	const {id} = req.query
	try{
		const order = await Order.findOne({_id: id})
		res.status(200).json(order)
	}catch(err){
        res.status(404).json({error: err.message})
    }
}