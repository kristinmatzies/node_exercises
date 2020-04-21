import { Router } from "express"
import mongoose from "mongoose"

const router = Router()
mongoose.connect("mongodb://localhost:27017/product")

const products = mongoose.model('product',{
    name: {
        type: String
    },
    articlenumber: {
        type: Number
    },
    color: {
        type: String
    },
})

router.post('/product',(request, response) =>{
products.create({name:request.body.name, articlenumber:request.body.articlenumber, color:request.body.color})
.then(() => response.json({created:true}))
.catch(() => response.json({created:false}))
})

router.get('/', (request, response) => {
products.find().then(data => {
    response.json(data)
})
})

export default router