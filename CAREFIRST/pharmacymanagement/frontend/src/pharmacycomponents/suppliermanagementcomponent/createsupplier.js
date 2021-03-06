import React,{ Component } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import '../suppliermanagementcomponent/supplier.css';

export default class  SupplierCreate extends Component {
    constructor(props){
        super(props);
        this.state={
      
            sid: "",
            suppliername: "",
            supplieremail: "",
            supplieraddress: "",
            add_date: "",
            tpno: ""
        }
    }
        // this.changeItemIDHandler = this.changeItemIDHandler.bind(this);
        // this.changeMedicineNameHandler = this.changeMedicineNameHandler.bind(this);
        // this.changeMedicineTypeHandler = this.changeMedicineTypeHandler.bind(this);
        // this.changeMedicineDescriptionHandler = this.cchangeMedicineDescriptionHandler.bind(this);
    
        // this.changeMedcineManufacturerHandler = this.changeMedcineManufacturerHandler.bind(this);
        // this.changeStockitemIntialQtyHandler = this.changeStockitemIntialQtyHandler.bind(this);
        // this.changeStockitemAvailableQtyHandler = this.changeStockitemAvailableQtyHandler.bind(this);
        // this.changeUnitPriceHandler = this.changeUnitPriceHandler.bind(this);

        // this.saveStock = this.saveStock.bind(this);


        handleInputSupplierChange=(sp)=>{
            const {name,value} = sp.target;
    
            this.setState({
                ...this.state,
                [name]:value
                
                
            })
        }
/************************************************Create Supplier*******************/
        onSupplierSave=(sp)=>{
            sp.preventDefault();
    
            const {sid,suppliername, supplieremail, supplieraddress,add_date,tpno}=this.state;
    
            const spdata={
        
                sid:sid,
                suppliername:suppliername,
                supplieremail: supplieremail,
                supplieraddress:supplieraddress,
                add_date:add_date,
                tpno:tpno
            }
            console.log(spdata)
    
            axios.post("http://localhost:8000/supplier/save",spdata).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                      
                        sid:"",
                        suppliername:"",
                        supplieremail:"",
                        supplieraddress:"",
                        add_date:"",
                        tpno:"",
                    }
                )
            }
                this.props.history.push('/');
        })
    }   
    cancel(){
        this.props.history.push('/');
    }















     
    render() {

      




        return (
            <div>
                  <Sidebar/>
            <div style={{ 
              marginLeft:"250px"}}
           >
   
          <div >
              <div className = "container2">   
                  <div className = "row">
                      
                      <div className = "card col-md-6 offset-md-3 offset-md-3" >
                      <br></br> <h3 className="text-center" ></h3> <br></br>
                      
                      <div className="viewback2">
                            <div className="card-body"> 
                              <form >
                              
                                  <div className = "form-group">
                                  <label></label>
                                  <input required={true} placeholder="Supplier ID" name="sid" className="form-control" 
                                         value={this.state.sid} onChange={this.handleInputSupplierChange}/>
                                  </div>
              
                                  <div className = "form-group">
                                  <label></label>
                                  <input required={true} placeholder="Full Name" name="suppliername" className="form-control" 
                                         value={this.state.suppliername} onChange={this.handleInputSupplierChange} />
                                         
                                  </div>
                                
                                  <div className = "form-group">
                                  <label></label>
                                  <input required={true} placeholder="e-mail" name="supplieremail" className="form-control" 
                                          value={this.state.supplieremail} onChange={this.handleInputSupplierChange}/>
                                         
                                  </div>
                                  <div className = "form-group">
                                  <label></label>
                                  <input required={true}   placeholder="Address" name="supplieraddress" className="form-control" 
                                   
                                       value={this.state.supplieraddress}   onChange={this.handleInputSupplierChange}/>
                                         
                                  </div>
                                  <div className = "form-group">
                                  <label></label>
                                  <input required={true} placeholder="Date Joined" name="add_date" className="form-control" 
                                       value={this.state.add_date}   onChange={this.handleInputSupplierChange}/>
                                         
                                  </div>
                               
                                  <div className = "form-group">
                                  <label></label>
                                  <input required={true} pattern="[0-9]{0,5}" title="This field should consist only numerical values." placeholder="Telephone Number" name="tpno" className="form-control" 
                                       value={this.state.tpno}   onChange={this.handleInputSupplierChange}/>
                                         
                                  </div>
                               
                                  
                                  <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSupplierSave}>
                   <i className="far fa-check-square"></i>&nbsp;Insert
             </button>
             <button className="btn btn-danger" onClick={this.cancel.bind(this)} style= {{marginLeft: "20px", marginTop:"15px"}}> Cancel</button>
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
          </div></div>
          </div> <br></br><br></br><br></br><br></br></div>
        );
    }
}

