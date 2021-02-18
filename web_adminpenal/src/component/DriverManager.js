import React, { Component } from 'react';
import Styles from './css/stylebox.module.css';
import './css/script.js';
import {Link} from 'react-router-dom';

import Layout from './Layout'
import Footer from './Footer'
 class DriverManager extends Component {
    render() {
        return (
<div>
  <Layout/>

            <div className={Styles.bbody}>
            <div className={Styles['boxes-wrapper']}>

<Link to="/AddDriver">
              <div className={Styles.col}>      
                {/* <div class="hover-box first"> */}
                <div className={`${Styles['hover-box']} ${Styles.first}`}>

                  <div className={Styles['hover-icon']}>
                    <i class="icon ion-edit"></i>
                    <h3 style={{fontSize:"15px",color:"#fff"}}>ADD DRIVER</h3>
                  </div>
                {/*  <!-- /.hover-icon -->*/}
                  <div className={Styles['hover-caption']}>
                    <h3>Add Driver</h3>
                    <p>Admin will be able to add new  bus driver here by using there information</p>
                  </div>
                {/*  <!-- /.hover-caption -->*/}
                </div>
              {/*  <!-- /.hover-box -->*/}
              </div>
            {/* <!-- /.col -->*/}
              
            </Link>

<Link to="/DeleteDriver">
              <div className={Styles.col}>
                {/* <div class="hover-box second"> */}
                <div className={`${Styles['hover-box']} ${Styles.second}`}>
                  <div className={Styles['hover-icon']}>
                    <i class="icon ion-android-delete"></i>
                    <h3 style={{fontSize:"15px",color:"#fff"}}>DELETE DRIVER</h3>
                  </div>
                {/*  <!-- /.hover-icon -->*/}
                  <div className={Styles['hover-caption']}>
                    <h3>DELTE DRIVER</h3>
                    <p>Admin will be able to delete  bus driver here by using there id or name</p>
                  </div>
                {/* <!-- /.hover-caption -->*/} 
                </div>
              {/* <!-- /.hover-box -->*/}
              </div>
            {/* <!-- /.col -->*/}
              
       </Link>
       <Link to="/UpdateDriverList">
              <div className={Styles.col}>
                {/* <div class="hover-box third"> */}
                <div className={`${Styles['hover-box']} ${Styles.third}`}>
                  <div className={Styles['hover-icon']}>
                    <i class="icon ion-upload"></i>
                    <h3 style={{fontSize:"15px",color:"#fff"}}>UPDATE DRIVER</h3>
                  </div>
                {/* <!-- /.hover-icon -->*/}
                  <div className={Styles['hover-caption']}>
                    <h3>UPDATE DRIVER</h3>
                    <p>Admin will be able to update buss driver here by using there name or id</p>
                  </div>
                {/* <!-- /.hover-caption -->*/} 
                </div>
              {/* <!-- /.hover-box -->*/}
              </div>
            {/*<!-- /.col -->*/} 
            </Link>
            <Link to="/ShowDriver">
              <div className={Styles.col}>
                {/* <div class="hover-box fourth"> */}
                <div className={`${Styles['hover-box']} ${Styles.fourth}`}>
                  <div className={Styles['hover-icon']}>
                    <i class="icon ion-search"></i>
                    <h3 style={{fontSize:"15px",color:"#fff"}}>SHOW DRIVER</h3>
                  </div>
                {/* <!-- /.hover-icon -->*/}
                  <div className={Styles['hover-caption']}>
                    <h3>SHOW DRIVER</h3>
                    <p>Admin will be able to see all the bus driver by bus name</p>
                  </div>
                {/* <!-- /.hover-caption -->*/}
                </div>
              {/* <!-- /.hover-box -->*/} 
              </div>
            {/* <!-- /.col -->*/}

            </Link>
              <Link to="/ShowAssignDriver">
              <div className={Styles.col}>
                {/* <div class="hover-box fifth"> */}
                <div className={`${Styles['hover-box']} ${Styles.fifth}`}>
                  <div className={Styles['hover-icon']}>
                    <i class="icon ion-map"></i>
                    <h3 style={{fontSize:"15px",color:"#fff"}}>ASSIGN DRIVER</h3>
                  </div>
                {/* <!-- /.hover-icon -->*/}
                  <div className={Styles['hover-caption']}>
                    <h3>BUS DRIVER</h3>
                    <p>Admin can able to see the assign bus driver by there names..</p>
                  </div>
                {/* <!-- /.hover-caption -->*/} 
                </div>
              {/* <!-- /.hover-box -->*/}
              </div>
            {/* <!-- /.col -->*/}
            </Link>

            <Link to="/ShowUnassignDriver">
              <div className={Styles.col}>
                {/* <div class="hover-box sixth"> */}
                <div className={`${Styles['hover-box']} ${Styles.sixth}`}>
                  
                  <div className={Styles['hover-icon']}>
                    <i class="icon ion-arrow-graph-up-right"></i>
                    <h3 style={{fontSize:"15px",color:"#fff"}}>UNASSIGN DRIVER</h3>
                  </div>
                {/* <!-- /.hover-icon -->*/}
                  <div className={Styles['hover-caption']}>
                    <h3>Caption flip</h3>
                    <p>Admin can able to see the assign bus driver by there names.</p>
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

export default DriverManager
