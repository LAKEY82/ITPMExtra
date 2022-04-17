const express =require('express');
const Stockitems=require('../models/stockitems');
const OutOfStockitems=require('../models/outofstockitems');
const stockrouter = express.Router();
const { json } = require('body-parser');
const { application } = require('express');

//save items
stockrouter.post('/stockitem/save',(req,res)=>{
    let newStockitem =new Stockitems(req.body);
                                          //to access front end data
    newStockitem.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Item saved successfully"
        });
    });
});




//save out of stock items
stockrouter.post('/outofstockitem/save',(req,res)=>{
    let newOutOfStockitem =new OutOfStockitems(req.body);
                                          //to access front end data
    newOutOfStockitem.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Item saved successfully"
        });
    });
});

//get items

stockrouter.get('/stockitems',(req,res)=>{
    Stockitems.find().exec((err,stockitems)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStockitems:stockitems
        });
    });
});



//  stockrouter.get('/stockitems/outofstock', (req, res)=> {

//     const {stockitemAvailableQty} = req.body
//     Stockitems.findOne({stockitemAvailableQty:stockitemAvailableQty}, (err,stockitems) => {
//              if(err){
//                  if(stockitemAvailableQty == '0') {
//                      res.send({existingStockitems:stockitems,success:true})
//                  }else {
//                      res.send({ message: "No Items Found"})
//                  }
    
//              }else {
//                 return res.status(400).json({
//                     error:err
//                 });
//              }
//          })
//      });


    //  stockrouter.get('/stockitem/:stockitemAvailableQty', (req, res)=> {

        
    //     let stockitemAvailableQty = req.params.stockitemAvailableQty;

    //     Stockitems.find(stockitemAvailableQty,(err,stockitem)=>{
    //         if(err){
    //             return res.status(400).json({success:false,err});
    //         }
    //         return res.status(200).json({
    //             success:true,
    //             stockitem
    //         });
    //     });
    // });

   
 
 

stockrouter.get('/outofstockitems',(req,res)=>{
    Stockitems.find().exec((err,outofstockitems)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStockitems:outofstockitems
        });
    });
});



//get a specific item

stockrouter.get('/stockitem/:id',(req,res)=>{
    let stockId = req.params.id;

    Stockitems.findById(stockId,(err,stockitem)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            stockitem
        });
    });
});

//update item
stockrouter.put('/stockitem/update/:id',(req,res)=>{
    Stockitems.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,stockitems)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
        
});

//delete item
stockrouter.delete('/stockitem/delete/:id',(req,res)=>{
    Stockitems.findByIdAndRemove(req.params.id).exec((err,deletedStockitem)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccssfull",err
        });
        return res.json({
            message:"Delete Successfull", deletedStockitem
        });
    });
});



   

module.exports=stockrouter;