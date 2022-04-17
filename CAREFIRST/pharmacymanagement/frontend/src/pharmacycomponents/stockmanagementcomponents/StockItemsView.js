import React, { Component } from 'react';
import axios from 'axios';
import './viewMod.css';
import Sidebar from './Sidebar';
import Grid from '@material-ui/core/Grid';

export default class StockItemsView extends Component{

    constructor(props){
        super(props);

        this.state={
            stockitem:{}
        };
    }

    componentDidMount(){
        const sitemid=this.props.match.params.id;

        axios.get(`http://localhost:8000/stockitem/${sitemid}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    stockitem:res.data.stockitem
                });
                console.log(this.state.stockitem);
            }
        });
    }
    cancel(){
        this.props.history.push('/');
    }
  render(){

    const {stockitemId,medicineName,medicineType,medicineDescription,medicineManufacturer,stockitemImage,stockitemAvailableQty,stockitemunitPrice}=this.state.stockitem;
    return (
        <div>
        <Sidebar/>
       <div style={{marginLeft:"250px"}}>


<Grid container spacing={2} justify="center">
<br></br><br></br>
<header class="section">
<section class="full-width ">
<div className="row">

<center><div style={{marginBottom: "20px",color:"#808000",fontWeight:"400",fontSize:"25px", textTransform: "uppercase"}}>  Details of the Medicine </div></center>

<div class="containerViewADM" >

    <img src={stockitemImage} alt="img" />

    <div class="containerViewHeadingADM ">
        <div class="containerViewH1ADM ">
            {medicineName} 
        </div>

        <div class="containerViewSubHeadADM">
                             Item Code : {stockitemId}  
                        </div>
                        <br></br>
                        <div class="pViewADM">
                            
                        <div className="view"> 
                             <p>    Medicine Type :- {medicineType} </p>
                             <p>    Medicine Description :- {medicineDescription} </p>
                             <p>    medicineManufacturer :- {medicineManufacturer} </p>
                             <p>    Availabile Quantity :- {stockitemAvailableQty} </p>
                             <p>    Unit Price(Rs.) :- {stockitemunitPrice} </p>
                            
                            
                        </div>  <br></br>
                        <div className="btnBack">
                            <button onClick={this.cancel.bind(this)} style={{marginLeft: "50px"}}>Back</button>
                        </div>
                        </div>
    </div>
</div>
</div>
</section>
</header></Grid>
</div> <br></br><br></br> <br></br><br></br><br></br> <br></br><br></br> <br></br><br></br><br></br></div>
     
    )
  }
}
