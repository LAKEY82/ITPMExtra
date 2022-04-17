import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import medImg from "./medicines.jpg";

class StockItemsEdit extends Component {

    constructor(props){
        super(props);
        this.state={
            
          
            medicineName: "",
            medicineType: "",
            medicineDescription: "",
            medicineManufacturer: "",
            stockitemImage: "",
            stockitemAvailableQty: "",
            stockitemunitPrice: ""

        }
    }
      
      


        handleInputStockChange=(stk)=>{
            const {name,value} = stk.target;
    
            this.setState({
                ...this.state,
                [name]:value
                
                
            })
        }

        onStockItemSave=(stk)=>{
     
            stk.preventDefault();
            const sitemid=this.props.match.params.id;
            const {medicineName,medicineType, medicineDescription, medicineManufacturer,stockitemImage,stockitemAvailableQty,stockitemunitPrice}=this.state;
    
            const stkdata={
                
                medicineName:medicineName,
                medicineType:medicineType,
                medicineDescription: medicineDescription,
                medicineManufacturer:medicineManufacturer,
                stockitemImage:stockitemImage,
                stockitemAvailableQty:stockitemAvailableQty,
                stockitemunitPrice:stockitemunitPrice
            }
            console.log(stkdata)
    
            axios.put(`http://localhost:8000/stockitem/update/${sitemid}`,stkdata).then((res)=>{
                if(res.data.success){
                  alert(`${medicineName},'s Details Updated Successfully.`)
                this.setState(
                    {
                        
                        medicineName:"",
                        medicineType:"",
                        medicineDescription:"",
                        medicineManufacturer:"",
                        stockitemImage:"",
                        stockitemAvailableQty:"",
                        stockitemunitPrice:""
                    }
                )
            }
            this.props.history.push('/');
        })
    }   


    componentDidMount(){
        const itemid=this.props.match.params.id;
    
        axios.get(`http://localhost:8000/stockitem/${itemid}`).then((res)=>{
            if(res.data.success){
                this.setState({
             
                  medicineName:res.data.stockitem.medicineName,
                  medicineType:res.data.stockitem.medicineType,
                  medicineDescription:res.data.stockitem.medicineDescription,
                  medicineManufacturer:res.data.stockitem.medicineManufacturer,
                  //itemaddedDate:moment(`${res.data.stockitem.itemaddedDate}`).format("MMM Do YY"),
                  stockitemImage:res.data.stockitem.stockitemImage,
                  stockitemAvailableQty:res.data.stockitem.stockitemAvailableQty,
                  stockitemunitPrice:res.data.stockitem.stockitemunitPrice
                });
                console.log(this.state.stockitem);
            }
        });
    }

    render() {

      


return(

        <div>
        <Sidebar/>
        <div style={{ 
             marginLeft:"250px"
        }}>
        
        <div >
              <div className = "container">
                  <div className = "row">
                      
                      <div className = "card col-md-6 offset-md-3 offset-md-3" >
                      <br></br> <h3 className="text-center" >EDIT MEDICINE DETAILS</h3> <br></br>
                      <img src={medImg} alt="medicines"/>
                      <div className="viewback2">
                            <div className="card-body"> 
                              <form >
                                  

                                  <div className = "form-group">
                                  <label>Medicine Name</label>
                                  <input required={true} placeholder="item description" name="medicineName" className="form-control" 
                                         value={this.state.medicineName} onChange={this.handleInputStockChange}/>
                                  </div>

                                  <div className="form-group ">
                                  <label>Medicine Type</label>
                                              <select name="medicineType" className="form-control" onChange={this.handleInputStockChange} value={this.state.medicineType} required>
                                                   <option value="" disabled={true}>------------Select Category------------</option>
                                                  <option value="Syrup">Syrup</option>
                                                  <option value="Tablet">Tablet</option>
                                                  <option value="Capsules">Capsules</option>
                                                  <option value="Drops">Drops </option>
                                                  <option value="Inhalers">Inhalers</option>
                                                  <option value="Injections">Injections</option>
                                              </select>
                                          </div>

              
                                  <div className = "form-group">
                                  <label>Medicine Description</label>
                                  <input required={true} placeholder="black" name="medicineDescription" className="form-control" 
                                         value={this.state.medicineDescription} onChange={this.handleInputStockChange} />
                                         
                                  </div>
                                
                                  <div className = "form-group">
                                  <label>Medicine Manufacturer</label>
                                  <input required={true} placeholder="additional note" name="medicineManufacturer" className="form-control" 
                                          value={this.state.medicineManufacturer} onChange={this.handleInputStockChange}/>
                                         
                                  </div>
                                  <div className = "form-group">
                                  <label>medicine Image</label>
                                  <input required={true}  pattern="[0-9]{0-5}" title="please provide a price in number format"
                                   placeholder="Rs 300.00" name="stockitemImage" className="form-control" 
                                   
                                       value={this.state.stockitemImage}   onChange={this.handleInputStockChange}/>
                                         
                                  </div>
                                  <div className = "form-group">
                                  <label>Available Quantity</label>
                                  <input required={true} placeholder="instock or out of stock" name="stockitemAvailableQty" className="form-control" 
                                       value={this.state.stockitemAvailableQty}   onChange={this.handleInputStockChange}/>
                                         
                                  </div>
                               
                                  <div className = "form-group">
                                  <label>Unit Price</label>
                                  <input required={true} placeholder="instock or out of stock" name="stockitemunitPrice" className="form-control" 
                                       value={this.state.stockitemunitPrice}   onChange={this.handleInputStockChange}/>
                                         
                                  </div>
                               
                                  
                                  <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onStockItemSave}>
                   <i className="far fa-check-square"></i>&nbsp; Update
             </button>
                                  {/* <button className="btn btn-dark" style={{marginLeft: "300px", width:"20%"}}
                                  onClick={() => {
                                                          const confirmBox = window.confirm(
                                                              "Do you really want to cancel adding this item?"
                                                          )
                                                          if (confirmBox === true) {
                                                              {this.cancel.bind(this)}
                                                          }
                                                      }}>Cancel</button> */}


                                  
                        

                              </form>   <br></br>
                          </div>
                      </div>  
                  </div>   
              </div>
          </div>
          </div>
          </div> <br></br><br></br> <br></br><br></br><br></br></div>
        );
    }
}

export default StockItemsEdit;