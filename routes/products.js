import express from "express"
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from "../controller/forProducts.js"
import multer from "multer"

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "./uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({storage: storage})

const router = express.Router()

router.get('/getProducts', getProducts)
router.post('/createProduct', upload.single("productImage"), createProduct)
router.get("/getProductById", getProduct)
router.put("/updateProduct", upload.single("productImage") ,updateProduct)
router.delete("/deleteProduct", deleteProduct)

export default router