// import { null } from 'mathjs';
import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';
import Styless  from './css/Layout.module.css'
import Login from './Login';
// import image1 from "";


 class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  handellog(e)
  {
    e.preventDefault();
    
    this.props.history.push('/Home')
    // return <Login />;

  }
    render() {
        return (
          <div className={Styless.bboody}>
                        <div id={Styless.wrapper} className={Styless.toggled}>

                        {/*  <!-- Sidebar -->*/}
                          <div id={Styless['sidebar-wrapper']}>
                          {/* <div styleName={Styless['sidebar-wrapper']}> */}
                              <ul className={Styless['sidebar-nav']}>
                                  <li className={Styless['sidebar-brand']}>
                                  <Link to="/Home"><p style={{fontsize:'20px',color:'#2874A6'}}>Admin Panel</p></Link>
                                  </li>

                                  <li>
                                  <Link to="/Home"><p style={{fontSize:'20px'}}>Home</p></Link>
                                  </li>

                                  <li>
                                  <Link to="/DriverManager"><p style={{fontSize:'20px'}}>Driver Manager</p></Link>
                                  </li>
                                  <li>
                                  <Link to="/BusManager"><p style={{fontSize:'20px'}}>Bus Manager</p></Link>
                                  </li>
                                  <li>
                                  <Link to="/RouteManager"><p style={{fontSize:'20px'}}>Route Manager</p></Link>
                                  </li>
                                  <li>
                                  <Link to="/AssignBus"><p style={{fontSize:'20px'}}>AssignBus</p></Link>
                                  </li>
                                  <li>
                                  <Link to="/UserInfo"><p style={{fontSize:'20px'}}>User Info</p></Link>
                                  </li>
                                  <li>
                                  <Link to="/SalaryManager"><p style={{fontSize:'20px'}}>Salary Manager</p></Link>
                                  </li>
                                  
                                  <li>
                                  <Link to="/FeedBack"><p style={{fontSize:'20px'}}>FeedBack</p></Link>
                                  </li>
                                  <li>
                                  <Link to="/AddAdmin"><p style={{fontSize:'20px'}}>Add Admin</p></Link>
                                  </li>

                                  <li>
                                  <Link to="/AdminList"><p style={{fontSize:'20px'}}>Admin List</p></Link>
                                  </li>


                                  <li>
                                  <Link  to="/Logout" ><p style={{fontSize:'20px'}}>Logout</p></Link>
                                  </li>
                                 
                                 
                              </ul>
                          </div>
                          
                          </div>
                      {/*    <!-- /#sidebar-wrapper -->*/}
                  
                        {/* <!-- Page Content  boody-->*/}
{/* <div className={Styless.Styless.bboody> */}

                      <div id={Styless['content-slider']}>
                    <div className={Styless['wrap-slider']}>	
                  
                      
                  {/*
                      <!-- ===== Thumbnail ControlNav ======= -->	*/}		
                      <input type="radio" id={Styless['a-1']} name="a" />			
                      <input type="radio" id={Styless['a-2']} name="a" />			
                      <input type="radio" id={Styless['a-3']} name="a" />
                      <input type="radio" id={Styless['a-4']} name="a" />
                  
                      <nav id={Styless.main}>
                        <label for={Styless['a-1']} className={Styless.first}></label>
                        <label for={Styless['a-2']} className={Styless.first}></label>
                        <label for={Styless['a-3']} className={Styless.first}></label>
                        <label for={Styless['a-4']} className={Styless.first}></label>
                      </nav>
                  {/*
                      <!-- =================================== -->*/}	
                      <nav id={Styless.control}>
                        <label for={Styless['a-1']}></label>
                        <label for={Styless['a-2']}></label>
                        <label for={Styless['a-3']}></label>
                        <label for={Styless['a-4']}></label>
                      </nav>
                    {/* <!-- =================================== -->*/} 
                  {/*
                      <!-- 	IMAGE NAVIGATION pic -->*/}
                      <span id={Styless['b-1']} className={Styless.th} tabindex="10">
                        
                        <div className={Styless['title-1']}>
                          
                        </div>
                      </span>
                  
                      <span id={Styless['b-2']} className={Styless.th} tabindex="11">
                        
                        <div className={Styless['title-2']}>
                          
                        </div>
                      </span>			
                  
                      <span id={Styless['b-3']} className={Styless.th} tabindex="12">
                        
                        <div className={Styless['title-3']}>
                          
                        </div>
                      </span>
                  
                      <span id={Styless['b-4']} className={Styless.th} tabindex="13">
                        
                        <div className={Styless['title-4']}>
                          
                        </div>
                      </span>
                  
                    {/* <!-- ===== IMages ======= -->	*/} 						
                  
                      <div class={Styless.slider}>
                        <div className={Styless.inset}>
                  
                          <figure>
                            <figcaption class='title-1'>
                              <h1>Karachi Buses</h1>
                              <p>Public transport for you</p>  
                            
                              {/* photo-1520442922418-8211a6fe605c.jpg */}

                            </figcaption>
                            <img style={{height:'330px'}} src="./assets/img/photo-1520442922418-8211a6fe605c.jpg" alt="" id='i-1' class='f'/>						
                          </figure>
                  
                          <figure>
                            <figcaption className='title-2'>
                              <h1>Time Saver</h1>
                              <p>Find best route and save your time</p>
                            
                            </figcaption>
                          <img style={{height:'330px'}} src="./assets/img/36490163-coach.jpg" alt="" id='i-1' class='f'/>						
                          </figure>
                  
                          <figure>
                            <figcaption  className='title-3'>
                              <h1>Support for public</h1> 
                              <p>we support you to reduce travel time</p> 
                              
                            </figcaption>
                            <img style={{height:'330px'}} src="./assets/img/photo-1546955870-9fc9e5534349.jpg" alt="" id='i-1' class='f'/>					
                          </figure>
                            <figure>
                            <figcaption  className='title-3'>
                              <h1>Bus Schedule</h1> 
                              <p>Bus follow there route and schedule</p> 
                              
                            </figcaption>
                            <img style={{height:'330px'}} src="./assets/img/photo-1592924087948-2d32f1b82389.jpg" alt="" id='i-1' class='f'/>					
                          </figure>
                  
                  
                  
                            
                        </div>
                      </div>					
                  
                    </div>		
                  </div>
                  </div>
                                  

                      
              // </div>
          
        )
    }
}

export default Layout
