const express=require('express');
const Suppliers=require('../models/suppliers')

const router= express.Router();


//save posts
    router.post('/supplier/save',(req,res)=>{

        let newSupplier=new Suppliers(req.body);

        newSupplier.save((err)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                     success:"Supplier saved succesfully"
            });
        });
     });

//get posts

     router.get('/suppliers/',(req,res)=>{
         Suppliers.find().exec((err,suppliers)=>{
             if(err){
                 return res.status(400).json({
                       error:err
                 });
             }
             return res.status(200).json({
                       success:true,
                       existingSuppliers:suppliers
             });
         });
     });


//update  employee


    router.put('/supplier/update/:id',(req,res)=>{
        Suppliers.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            (err,Suppliers)=>{
                if(err){
                    return res.status(400).json({error:err})
                }
                return res.status(200).json({
                    success:"updated successfully"
                });
            }
        );
    });

    //delete employee

    router.delete('/suppliers/delete/:id',(req,res)=>{
        Suppliers.findByIdAndRemove(req.params.id).exec((err,deletedSupplier)=>{
            if(err) return res.status(400).json({
                 message:'deleted unsuccessful',err
            });

            return res.json({
                message:"deleted succesfull",deletedSupplier
            });
        });
    }
    );








     module.exports=router;