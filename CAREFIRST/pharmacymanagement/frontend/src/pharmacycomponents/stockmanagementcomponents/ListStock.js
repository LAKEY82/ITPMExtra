import React,{ Component } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

export default class ListStock extends Component{

  constructor(props){
      super(props);

      this.state={
          stockitems:[]
      }
      this.addStock = this.addStock.bind(this);
  }

  componentDidMount(){
    this.retrieveStockitems();
  }

  addStock() {
    this.props.history.push('/addstockitems');
}
 retrieveStockitems(){
       axios.get(`http://localhost:8000/stockitems`).then((res)=>{
        if(res.data.success){
            this.setState({
                stockitems:res.data.existingStockitems
            });

           

            console.log(this.state.stockitems);
        }
    });
}


onDeleteStockItem = (sitemid)=>{

    

    axios.delete(`http://localhost:8000/stockitem/delete/${sitemid}`).then((res)=>{
      
      this.retrieveStockitems();
    })
  }


  filterstockitem(stockitems,sechStockItemKey){
    const stockitemResult=stockitems.filter((stockitem)=>

         stockitem.stockitemId.toLowerCase().includes(sechStockItemKey) ||
         stockitem.medicineName.toUpperCase().includes(sechStockItemKey) ||
         stockitem.medicineDescription.toLowerCase().includes(sechStockItemKey)
            
    )

    this.setState({stockitems : stockitemResult})
  }

  handleStockItemSearchArea=(stk)=>{
    const sechStockItemKey = stk.currentTarget.value;

    axios.get("http://localhost:8000/stockitems").then(res=>{
      if(res.data.success){
           this.filterstockitem(res.data.existingStockitems,sechStockItemKey)
      }
    });

  }
  render(){

   
    return (
      <div>
      <Sidebar/>
     <div style={{marginLeft:"250px"}}>
       <ul class="nav nav-tabs">
          <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="/StockItemHome">Manage Stock Items</a>
          </li>
          
          <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="/outofstockitems">Out Of Stock Items</a>
          </li>

          <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="/stockitemdetails">Manage Orders</a>
          </li>

       </ul>

    </div>
    <div className='container' style={{marginLeft:"250px"}}>

       {/* {
         this.state.stockitems.map(stockitems =>(

        <div>
          <p>All Medicines</p>
          <p>{stockitems.stockitemId}</p>
          <p>{stockitems.medicineName}</p>
          <p>{stockitems.medicineType}</p>
          <p>{stockitems.medicineDescription}</p>
          <p>{stockitems.medicineManufacturer}</p>
          <p>{stockitems.stockitemInitialQty}</p>
          <p>{stockitems.stockitemAvailableQty}</p>
          <p>{stockitems.stockitemunitPrice}</p>

        </div>
         ))
       } */}

<div className="row" style={{marginRight:"100px"}}>
          <div className="col-lg-9 mt-2 mb-2">
            
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input 
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleStockItemSearchArea}></input>
          </div>
        </div>


                    <br></br><br></br>
                <b>    <h4 className="text-center" style={{fontFamily:"Franklin Gothic Medium"}}>MEDICINE LIST</h4></b>
                   
                    <div>
                        <button class="btn btn-success" onClick={this.addStock} >Add Item</button>
                 
                    <br></br><button class="btn btn-success" 
                    style={{ marginLeft: "1000px"}}>Generate Stock Report</button>   </div><br></br>
                    <div className="row"> <div>
                        
                    </div>


                        <br />
                        <br />
                      
                        <table style={{ backgroundColor: "rgba(214, 188, 129, 0.4)",width:"90%",boxshadow: "-1px 8px 15px 0px rgba(0, 0, 0, 0.44)"}} className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                 
                                    <th>Medicine Name</th>
                                    <th>Medicine Type</th>
                                    <th>Medicine Description</th>

                                    <th>Medicine Manufacturer</th>
                                    <th> Medicine Image</th>
                                    <th>Availabile Quantity</th>
                                    <th>Unit Price(Rs.)</th>
                                    <th >Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.stockitems.map((stockitems,index) =>(
                                        <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                       
                                        <td>
                                            <a href={`/stockitems/${stockitems._id}`} style={{textDecoration:'none'}}>
                                            {stockitems.medicineName}
                                            </a>
                                        </td>
                                           
                                                 <td>{stockitems.medicineType}</td>
                                                
                                                <td>{stockitems.medicineDescription}</td>
                                                <td >{stockitems.medicineManufacturer}</td>
                                                <td> <img style={{width:"100px", height:"100px"}} src={stockitems.stockitemImage} ></img> </td>
                                                <td>{stockitems.stockitemAvailableQty}</td>
                                                <td>{stockitems.stockitemunitPrice}</td>
                                                
                                                <td ><div class="btn-group" role="group" >

                                                <a className="btn btn-warning" href={`/editstockitems/${stockitems._id}`}>
                                                <i className="fas fa-edit"></i>
                  </a>    &nbsp;&nbsp;&nbsp;
                  <a className="btn btn-danger" href="#"
                  
                  
                  onClick={() => {
                    const confirmBox = window.confirm(
                        "Do you really want to delete this record?"
                    )
                    if (confirmBox === true) {
                      this.onDeleteStockItem(stockitems._id)
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