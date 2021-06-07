import React, { Component } from 'react'
import Styles from './css/stylebox.module.css';
import './css/script.js';
import {Link} from 'react-router-dom';
import Layout from './Layout'
import Footer from './Footer'

 class SalaryManager extends Component {
    render() {
        return (
            <div>
            <Layout/>
           
                      <div className={Styles.bbody}>
                                <div className={Styles['boxes-wrapper']} >
          
                                    <Link to="/updatesalaryrate">
                                  <div className={Styles.col} >      
                                    {/* <div class="hover-box first"> */}
                                    <div className={`${Styles['hover-box']} ${Styles.first}`} style={{backgroundColor:'#606060FF'}}>
          
                                      <div className={Styles['hover-icon']}>
                                        <i class="icon ion-edit"></i>
                                        <h3 style={{fontSize:"15px",color:"#fff"}}>UPDATE PAYMENT RATE</h3>
                                      </div>
                                    {/*  <!-- /.hover-icon -->*/}
                                      <div className={Styles['hover-caption']}>
                                        <h3>UPDATE RATE</h3>
                                        <p>Admin will be able to update the payment rate which is payed by the bus arriver team</p>
                                      </div>
                                    {/*  <!-- /.hover-caption -->*/}
                                    </div>
                                  {/*  <!-- /.hover-box -->*/}
                                  </div>
                                {/* <!-- /.col -->*/}
                                </Link>
          
                                  <Link to="/paysalary">
                                  <div className={Styles.col}>
                                    {/* <div class="hover-box second"> */}
                                    <div className={`${Styles['hover-box']} ${Styles.second}`} style={{backgroundColor:'#F4D03F'}}>
                                      <div className={Styles['hover-icon']}>
                                        <i class="icon ion-bag"></i>
                                        <h3 style={{fontSize:"15px",color:"#fff"}}>PAY SALARY</h3>
                                      </div>
                                    {/*  <!-- /.hover-icon -->*/}
                                      <div className={Styles['hover-caption']}>
                                        <h3>PAY SALARY</h3>
                                        <p>Admin will be able to pay the driver services salary accoriding to there service time</p>
                                      </div>
                                    {/* <!-- /.hover-caption -->*/} 
                                    </div>
                                  {/* <!-- /.hover-box -->*/}
                                  </div>
                                {/* <!-- /.col -->*/}
                                </Link>
                                  <Link to="/payeddriver">
                                  <div className={Styles.col}>
                                    {/* <div class="hover-box third"> */}
                                    <div className={`${Styles['hover-box']} ${Styles.third}`} style={{backgroundColor:'#606060FF'}}>
                                      <div className={Styles['hover-icon']}>
                                        <i class="icon ion-android-cloud-circle"></i>
                                        <h3 style={{fontSize:"15px",color:"#fff"}}>DRIVER PAYMENT LIST</h3>
                                      </div>
                                    {/* <!-- /.hover-icon -->*/}
                                      <div className={Styles['hover-caption']}>
                                        <h3>PAYMENT LIST</h3>
                                        <p>Admin will be able to see the driver payment lis</p>
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

export default SalaryManager
