import React, { Component } from 'react'
import Styles from './css/stylebox.module.css';
import './css/script.js';
import {Link} from 'react-router-dom';
import Layout from './Layout'
import Footer from './Footer'

 class AssignBus extends Component {
    render() {
        return (

          <div>
  <Layout/>
 
            <div className={Styles.bbody}>
                      <div className={Styles['boxes-wrapper']} >

                          <Link to="/AddAssignBus">
                        <div className={Styles.col} >      
                          {/* <div class="hover-box first"> */}
                          <div className={`${Styles['hover-box']} ${Styles.first}`} style={{backgroundColor:'#9CC3D5FF'}}>

                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-edit"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>ASSIGN BUS</h3>
                            </div>
                          {/*  <!-- /.hover-icon -->*/}
                            <div className={Styles['hover-caption']}>
                              <h3>Add Bus</h3>
                              <p>Admin will be able to assign  unassign bus to the drivers</p>
                            </div>
                          {/*  <!-- /.hover-caption -->*/}
                          </div>
                        {/*  <!-- /.hover-box -->*/}
                        </div>
                      {/* <!-- /.col -->*/}
                      </Link>

                        <Link to="/DeleteAssignBusList">
                        <div className={Styles.col}>
                          {/* <div class="hover-box second"> */}
                          <div className={`${Styles['hover-box']} ${Styles.second}`} style={{backgroundColor:'#2E86C1'}}>
                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-android-delete"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>DELETE ASSIGN BUS</h3>
                            </div>
                          {/*  <!-- /.hover-icon -->*/}
                            <div className={Styles['hover-caption']}>
                              <h3>DELTE BUS</h3>
                              <p>Admin will be able to delete assign bus to the driver</p>
                            </div>
                          {/* <!-- /.hover-caption -->*/} 
                          </div>
                        {/* <!-- /.hover-box -->*/}
                        </div>
                      {/* <!-- /.col -->*/}
                      </Link>
                        <Link to="/UpdateAssignBusList">
                        <div className={Styles.col}>
                          {/* <div class="hover-box third"> */}
                          <div className={`${Styles['hover-box']} ${Styles.third}`} style={{backgroundColor:'#9CC3D5FF'}}>
                            <div className={Styles['hover-icon']}>
                              <i class="icon ion-upload"></i>
                              <h3 style={{fontSize:"15px",color:"#fff"}}>UPDATE ASSIGN BUS</h3>
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

                        
                      </div>

        </div>

        <Footer/>
</div>

        )
    }
}

export default AssignBus
