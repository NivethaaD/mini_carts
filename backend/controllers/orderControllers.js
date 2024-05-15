const orderModel= require('../models/orderModel');

//create order -/api/v1/order

exports.createOrder = async(req,res,next)=>{

    const cartItems = req.body;
    const amount =Number(cartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed(2);
    const status ='pending';
    console.log(amount)
    const order =await  orderModel.create({cartItems,amount,status});

    //console.log(req.body);

        res.json({
        success: true,
        order
    })
}

