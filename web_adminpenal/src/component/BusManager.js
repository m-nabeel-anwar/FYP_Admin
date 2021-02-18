import React, { Component } from 'react'
import Styles from './css/stylebox.module.css';
import './css/script.js';
import {Link} from 'react-router-dom';
import Layout from './Layout'
import Footer from './Footer'

 class BusManager extends Component {
    render() {
      
    
 
        return (
          <div>
          <Layout/>
            <div className={Styles.bbody}>
                      <div className={Styles['boxes-wrapper']} >

                          <Link to="/AddBus">
                        <div className={Styles.col} >      
                          {/* <div class="hover-box first"> */}
                          <div className={`${Styles['hover-box']} ${Styles.first}`} style={{backgroundColor:'#97BC62FF'}}>

                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-edit"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>ADD BUS</h3>
                            </div>
                          {/*  <!-- /.hover-icon -->*/}
                            <div className={Styles['hover-caption']}>
                              <h3>Add Bus</h3>
                              <p>Admin will be able to add new  busses here by using there palte number and bus name</p>
                            </div>
                          {/*  <!-- /.hover-caption -->*/}
                          </div>
                        {/*  <!-- /.hover-box -->*/}
                        </div>
                      {/* <!-- /.col -->*/}
                      </Link>

                        <Link to="/DeleteBus">
                        <div className={Styles.col}>
                          {/* <div class="hover-box second"> */}
                          <div className={`${Styles['hover-box']} ${Styles.second}`} style={{backgroundColor:'#2C5F2D'}}>
                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-android-delete"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>DELETE BUS</h3>
                            </div>
                          {/*  <!-- /.hover-icon -->*/}
                            <div className={Styles['hover-caption']}>
                              <h3>DELTE BUS</h3>
                              <p>Admin will be able to delete   busses here by using there bus name</p>
                            </div>
                          {/* <!-- /.hover-caption -->*/} 
                          </div>
                        {/* <!-- /.hover-box -->*/}
                        </div>
                      {/* <!-- /.col -->*/}
                      </Link>
                        <Link to="/UpdateBusList">
                        <div className={Styles.col}>
                          {/* <div class="hover-box third"> */}
                          <div className={`${Styles['hover-box']} ${Styles.third}`} style={{backgroundColor:'#97BC62FF'}}>
                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-upload"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>UPDATE BUS</h3>
                            </div>
                          {/* <!-- /.hover-icon -->*/}
                            <div className={Styles['hover-caption']}>
                              <h3>UPDATE BUS</h3>
                              <p>Admin will be able to update busses here by using there  bus name</p>
                            </div>
                          {/* <!-- /.hover-caption -->*/} 
                          </div>
                        {/* <!-- /.hover-box -->*/}
                        </div>
                      {/*<!-- /.col -->*/} 
                      </Link>

                        <Link to="/ShowBus">
                        <div className={Styles.col}>
                          {/* <div class="hover-box fourth"> */}
                          <div className={`${Styles['hover-box']} ${Styles.fourth}`} style={{backgroundColor:'#2C5F2D'}}>
                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-search"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>SHOW BUS</h3>
                            </div>
                          {/* <!-- /.hover-icon -->*/}
                            <div className={Styles['hover-caption']}>
                              <h3>SHOW BUS</h3>
                              <p>Admin will be able to see all the buses by bus name.</p>
                            </div>
                          {/* <!-- /.hover-caption -->*/}
                          </div>
                        {/* <!-- /.hover-box -->*/} 
                        </div>
                      {/* <!-- /.col -->*/}
                      </Link>
                        
                        <Link to="/ShowAssignBus">
                        <div className={Styles.col}>
                          {/* <div class="hover-box fifth"> */}
                          <div className={`${Styles['hover-box']} ${Styles.fifth}`} style={{backgroundColor:'#97BC62FF'}}>
                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-map"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>ASSIGN BUS</h3>
                            </div>
                          {/* <!-- /.hover-icon -->*/}
                            <div className={Styles['hover-caption']}>
                              <h3>Assign Bus</h3>
                              <p>Admin can able to see the assign bus to the driver</p>
                            </div>
                          {/* <!-- /.hover-caption -->*/} 
                          </div>
                        {/* <!-- /.hover-box -->*/}
                        </div>
                      {/* <!-- /.col -->*/}
                      </Link>
                        <Link to="/ShowUnassignBus">
                        <div className={Styles.col}>
                          {/* <div class="hover-box sixth"> */}
                          <div className={`${Styles['hover-box']} ${Styles.sixth}`} style={{backgroundColor:'#2C5F2D'}}>
                            
                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-arrow-graph-up-right"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>UNASSIGN BUS</h3>
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

export default BusManager
