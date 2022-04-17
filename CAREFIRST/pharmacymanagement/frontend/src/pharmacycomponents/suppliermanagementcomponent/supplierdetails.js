import React, { Component } from 'react';
import Sidebar from './Sidebar';
 import axios from 'axios';
 import '../suppliermanagementcomponent/supplier.css';
 import CF3 from './CF3.png';
 

 export default class App extends Component {

   constructor(props){
     super(props);

     this.state={
       suppliers:[]
     };
   }
   componentDidMount(){
      this.retrieveSuppliers();
   }

   retrieveSuppliers(){
     axios.get("http://localhost:8000/suppliers").then(res=>{
       if(res.data.success){
         this.setState({
            suppliers:res.data.existingSuppliers
         });

         console.log(this.state.suppliers)
       }
     })
   }

   onDeleteSupplier = (supmid)=>{

    

    axios.delete(`http://localhost:8000/stockitem/delete/${supmid}`).then((res)=>{
      
      this.retrieveSupplier();
    })
  }






   render() {
     return (

       <div >
     
       <Sidebar/>

<div className='container'>
  <div className='sassy'> 
    <div className='tabs'>
        <ul class="nav nav-tabs">
           <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="">Manage Suppliers</a>
           </li>
           
           <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="">Stock Maintenance</a> 
           </li>

        </ul>

    </div> 

  </div> 
    
  <div className="row">
  <div className="col-lg-9 mt-2 mb-2">
    
  </div>
  <div className="col-lg-3 mt-2 mb-2">
    <input 
    className="form-control"
    type="search"
    placeholder="Search"
    name="searchQuery"
    ></input>
  </div>
</div> 




                   <div className='cf'>
                    <br></br><br></br>
                   <img src={CF3} className='logo'/>
                <b>    <h4 className="text-center" style={{fontFamily:"Franklin Gothic Medium"}}>SUPPLIER DETAILS</h4></b>
                </div>

             
                    <div className='buttonclass'>
                    <button class="btn btn-primary" ><a href= "/add" style={{textDecoration:'none',color:'white'}}>Add Employee</a></button>
                    <br></br><button class="btn btn-success" 
                    style={{ marginLeft: "1000px"}}>Get Report</button>   
                    
                  
                    </div>


                    <div className="row"> <div>
                        
                    </div>


                        <br />
                        <br />
                      
                        <table style={{ backgroundColor: "#EDEFF1",boxshadow: "-1px 8px 15px 0px rgba(0, 0, 0, 0.44)"}} className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                    <th>Supplier Id</th>
                                    <th>Supplier Name</th>
                                    <th>E-mail</th>
                                    <th>Add Date</th>

                                    <th>Address</th>
                                    <th>Contact</th>
                        
                                    
                                     
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.suppliers.map((suppliers,index) =>(
                                        <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{suppliers.sid}</td>
                                        
                                           
                                                 <td>{suppliers.suppliername}</td>
                                                
                                                <td>{suppliers.supplieremail}</td>
                                                <td >{suppliers.add_date}</td>
                                                 
                                                <td>{suppliers.supplieraddress}</td>
                                                <td>{suppliers.tpno}</td>
                                                
                                                <td ><div class="float-rght" role="group" >

                                                <a className="btn btn-warning" href={''}>
                                                <i className="fas fa-edit"></i>
                  </a>    &nbsp;&nbsp;&nbsp;
                  <a className="btn btn-danger" href="#"
                  
                  
                  onClick={() => {
                    const confirmBox = window.confirm(
                        "Do you really want to delete this record?"
                    )
                   if (confirmBox === true) {
                     this.onDeleteSupplier(suppliers._id)
                   }
                  
                  
                  
                  
                  
                  
               }} >
                    <i className="far fa-trash-alt"></i>
                  </a>

                                                   

                                                </div></td>

                                            </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    </div>     
                </div>
            
  
     
     )
   }
 }