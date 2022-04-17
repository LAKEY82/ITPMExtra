import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './Sidebar.css';
import headerImg from "./headerLogo.png";


const Side = props => {
   

    return (
        <div class="main-wrapper">
      
        
                <div class="header-container fixed-top">
                    <header class="header  navbar navbar-expand-sm expand-header">
                        <div class="header-left d-flex">
                          <img src={headerImg} style={{height:60}} alt="" />
                          <div class="logo">
                               CAREFIRST 
                            </div>
                          </div>
                       
                    </header>
                </div>
                
       
        
         <br></br>  <br></br> 
        
                
    
        
                <div class="left-menu">
                    <div class="menubar-content">
                        <nav class="animated bounceInDown">
                            <ul id="sidebar">
                                <li class="active">
                                    <a href="#"><i class="fas fa-home"></i>Dashboard</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-cc-amazon-pay"></i>Payments</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fas fa-capsules"></i>Supplier</a>
                                </li>
                                <li>
                                    <a href="/"><i class="fas fa-box-open"></i>Stock</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-id-badge"></i>Employees</a>
                                </li>
                               
                            </ul>
                        </nav>
                    </div>
                </div>
              </div>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar