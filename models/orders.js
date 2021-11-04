import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
	cart: {
		type: Object,
		required: true
	}, 
	total:{
		type: Number,
		required: true
	},
	customerDetails: {
		type: Object,
		required: true	
	}
}, {timestamps: true})

const Order = mongoose.model("Order", orderSchema)

export default Order