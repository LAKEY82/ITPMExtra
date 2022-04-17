const mongoose = require('mongoose');

const stockitemSchema = new mongoose.Schema({
    
    stockitemId:{
        type:String,
        required:true
    },
    medicineName:{
        type:String,
        required:true
    },
     medicineType:{
        type:String,
        required:true
    },
    medicineDescription:{
        type:String,
        required:true
    },
    medicineManufacturer:{
        type:String,
        required:true
    },

    stockitemImage:{
        type:String,
        required:true
    },
    stockitemAvailableQty:{
        type:Number,
        required:true
    },
    stockitemunitPrice:{
        type:Number,
        required:true
    }
});
module.exports=mongoose.model('OutOfStockitems',stockitemSchema);
                              //db eke hden name