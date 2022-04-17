const mongoose= require('mongoose');

const supplierSchema= new mongoose.Schema({

    sid:{
        type:String,
        required:true
    },
    suppliername:{
        type:String,
        required:true
    },
    supplieremail:{
        type:String,
        required:true
    },
    supplieraddress:{
        type:String,
        required:true
    },
    add_date:{
        type:String,
        required:true
    },
    tpno:{
        type:Number,
        required:true
    }

});

module.exports=mongoose.model('Suppliers',supplierSchema);