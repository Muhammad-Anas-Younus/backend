import { error } from "console"
import mongoose from "mongoose"
import Product from "../models/products.js"

export const getProducts = async (req, res) => {
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }catch(err){
        res.status(404).json({error: err.message})
    }
}

export const createProduct = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        productImage: req.file.path
    })
    try{
        await product.save()
        res.status(201).json(product)
    }catch(err){
        res.status(409).json({error: err.message})
    }
}

export const getProduct = async (req,res) => {
    const id = req.query.id
    try{
        const product = await Product.findOne({_id: id})    
        res.status(200).json(product)
    }catch(err){
        res.status(404).json({error: err.message})
    }

}

export const updateProduct = async (req,res) => {
    const {id} = req.query
    const {name, price, description} = req.body
    const image = req.file.path
    try{
        const product = await Product.findByIdAndUpdate(id, {
            name,
            price,
            description,
            productImage: image
        }, {new: true})
        res.status(200).json(product)
    }catch(err){
        res.json({error: err.message})
    }
}

export const deleteProduct = async (req,res) => {
    const {id} = req.query
    try{
        const product = await Product.findByIdAndDelete(id)
        res.json(product)
    }catch(err){
        res.json({error: err.message})
    }
}