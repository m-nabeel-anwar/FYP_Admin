import React, { Component } from 'react'
import Styles from './css/stylebox.module.css';
import './css/script.js';
import {Link} from 'react-router-dom';
import Layout from './Layout'
import Footer from './Footer'
 class RouteManager extends Component {
    render() {
        return (


<div>
  <Layout/>


            <div className={Styles.bbody}>
                      <div className={Styles['boxes-wrapper']}>

                          <Link to="/AddRoute">
                        <div className={Styles.col}>      
                          {/* <div class="hover-box first"> */}
                          <div className={`${Styles['hover-box']} ${Styles.first}`} style={{backgroundColor:'#CBCE91FF'}}> 

                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-edit"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>ADD ROUTE</h3>
                            </div>
                          {/*  <!-- /.hover-icon -->*/}
                            <div className={Styles['hover-caption']}>
                              <h3>Add Route</h3>
                              <p>Admin will be able to add bus route with there selected stops</p>
                            </div>
                          {/*  <!-- /.hover-caption -->*/}
                          </div>
                        {/*  <!-- /.hover-box -->*/}
                        </div>
                      {/* <!-- /.col -->*/}
                      </Link>

                        <Link to="/DeleteRoute">
                        <div className={Styles.col}>
                          {/* <div class="hover-box second"> */}
                          <div className={`${Styles['hover-box']} ${Styles.second}`}style={{backgroundColor:'#76528BFF'}}>
                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-android-delete"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>DELETE Route</h3>
                            </div>
                          {/*  <!-- /.hover-icon -->*/}
                            <div className={Styles['hover-caption']}>
                              <h3>DELTE ROUTE</h3>
                              <p>Admin will be able to delete   busses route  here by using there bus name and there existing  route</p>
                            </div>
                          {/* <!-- /.hover-caption -->*/} 
                          </div>
                        {/* <!-- /.hover-box -->*/}
                        </div>
                      {/* <!-- /.col -->*/}
                      </Link>
                        <Link to="/UpateRoute">
                        <div className={Styles.col}>
                          {/* <div class="hover-box third"> */}
                          <div className={`${Styles['hover-box']} ${Styles.third}`} style={{backgroundColor:'#CBCE91FF'}}>
                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-upload"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>UPDATE Route</h3>
                            </div>
                          {/* <!-- /.hover-icon -->*/}
                            <div className={Styles['hover-caption']}>
                              <h3>UPDATE BUS</h3>
                              <p>Admin will be able to update busses route here by using there bus name and route</p>
                            </div>
                          {/* <!-- /.hover-caption -->*/} 
                          </div>
                        {/* <!-- /.hover-box -->*/}
                        </div>
                      {/*<!-- /.col -->*/} 
                      </Link>

                        <Link to="/ShowRoute">
                        <div className={Styles.col}>
                          {/* <div class="hover-box fourth"> */}
                          <div className={`${Styles['hover-box']} ${Styles.fourth}`} style={{backgroundColor:'#76528BFF'}}>
                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-search"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>SHOW BUS</h3>
                            </div>
                          {/* <!-- /.hover-icon -->*/}
                            <div className={Styles['hover-caption']}>
                              <h3>SHOW BUS</h3>
                              <p>Admin will be able to see all the buses route by bus name.</p>
                            </div>
                          {/* <!-- /.hover-caption -->*/}
                          </div>
                        {/* <!-- /.hover-box -->*/} 
                        </div>
                      {/* <!-- /.col -->*/}
                      </Link>
                        
                        <Link to="/AddFare">
                        <div className={Styles.col}>
                          {/* <div class="hover-box fifth"> */}
                          <div className={`${Styles['hover-box']} ${Styles.fifth}`} style={{backgroundColor:'#CBCE91FF'}}>
                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-map"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>ADD Fare</h3>
                            </div>
                          {/* <!-- /.hover-icon -->*/}
                            <div className={Styles['hover-caption']}>
                              <h3>Add Fare</h3>
                              <p>Admin can able to add fare of the selected bus using bus name</p>
                            </div>
                          {/* <!-- /.hover-caption -->*/} 
                          </div>
                        {/* <!-- /.hover-box -->*/}
                        </div>
                      {/* <!-- /.col -->*/}
                      </Link>
                        <Link to="#">
                        <div className={Styles.col}>
                          {/* <div class="hover-box sixth"> */}
                          <div className={`${Styles['hover-box']} ${Styles.sixth}`} style={{backgroundColor:'#76528BFF'}}>
                            
                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-arrow-graph-up-right"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>UNASSIGN</h3>
                            </div>
                          {/* <!-- /.hover-icon -->*/}
                            <div className={Styles['hover-caption']}>
                              <h3>Caption flip</h3>
                              <p>Admin can able to see the Unassign bus list to assign the drivers.</p>
                            </div>
                            
                          {/* <!-- /.hover-caption -->*/} 
                          </div>
                        {/*<!-- /.hover-box -->*/}  
                        </div>
                      {/* <!-- /.col -->*/}
                      </Link>
                        
                      </div>

        </div>
        <Footer/>
</div>

        )
    }
}

export default RouteManager
