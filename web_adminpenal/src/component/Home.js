import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import  Styles from'./css/home.module.css'

import Layout from './Layout'
import Footer from './Footer'
 class Home extends Component {
    render() {
        return (
<div>
  <Layout/>

           <div className={Styles.boddy}>
             
                <div className={Styles.mainn}>
                           {/*
                           <!--cards -->*/}
                           
                           <div className={Styles.cardd}>

                           <div className={Styles.imagee}>
                              <img src="./assets/img/images(1).jpg" alt="Adddriver"/> 
                           </div>
                           <div className={Styles.title}>
                           <h1 style={{fontSize:'20px'}}>
                           Add Driver</h1>
                           </div>
                           <div className={Styles.des}>
                           <p>You can register new driver here...</p>
                           <Link to="/AddDriver">
                           <button>Click here</button>
                           </Link>
                           </div>
                           </div>
                           {/*
                           <!--cards -->*/}


                           <div className={Styles.cardd}>

                           <div className={Styles.imagee}>
                              <img src="./assets/img/4.jpg"/>
                           </div>
                           <div className={Styles.title}>
                           <h1 style={{fontSize:'20px'}}>Add Bus</h1>
                           </div>
                           <div className={Styles.des}>
                           <p>You can register new bus here...</p>
                           <Link to="/AddBus">
                           <button>Click Here</button>
                           </Link>
                           </div>
                           </div>
                           {/*
                           <!--cards -->*/}


                           <div className={Styles.cardd}>

                           <div className={Styles.imagee}>
                              <img src="./assets/img/addroute ki image.jpg" alt="add route"/>
                           </div>
                           <div className={Styles.title}>
                           <h1 style={{fontSize:'20px'}}>
                           Add Route</h1>
                           </div>
                           <div className={Styles.des}>
                           <p>You can add bus route here...</p>
                           <Link to="/AddRoute">
                           <button>Click Here</button>
                           </Link>
                           </div>
                           </div>
                           {/*
                           <!--cards -->*/}


                           <div className={Styles.cardd}>

                           <div className={Styles.imagee}>
                              <img src="./assets/img/rouutee.jpg"/>
                           </div>
                           <div className={Styles.title}>
                           <h1 style={{fontSize:'20px'}}>
                           Assign Bus</h1>
                           </div>
                           <div className={Styles.des}>
                           <p>You can assign bus here...</p>
                           <Link to="/AddAssignBus">
                           <button>Click Here</button>
                           </Link>
                           </div>
                           </div>
                           {/*
                           <!--cards -->*/}


                           <div className={Styles.cardd}>

                           <div className={Styles.imagee}>
                              <img style={{height:'150px'}}  src="./assets/img/download (2).png"/>
                           </div>
                           <div className={Styles.title}>
                           <h1 style={{fontSize:'20px'}}>
                           User Info</h1>
                           </div>
                           <div className={Styles.des}>
                           <p>You can view user info here...</p>
                           <Link to="/UserInfo">
                           <button>Click Here</button>
                           </Link>
                           </div>
                           </div>
                           {/*
                           <!--cards -->*/}

                           <div className={Styles.cardd}>

                           <div className={Styles.imagee}>
                              <img style={{height:'150px'}} src="./assets/img/images (7).jpg"/>
                           </div>
                           <div className={Styles.title}>
                           <h1 style={{fontSize:'20px'}}>
                           Show Bus</h1>
                           </div>
                           <div className={Styles.des}>
                           <p>You can see all assign buses here...</p>
                           <Link to="/ShowAssignBus">
                           <button>Click Here</button>
                           </Link>
                           </div>
                           </div>
                           {/*
                           <!--cards -->*/}

                           <div className={Styles.cardd}>

                           <div className={Styles.imagee}>
                              <img style={{height:'150px'}} src="./assets/img/payment-of-confirmation-fees-for-applicants.jpg"/>
                           </div>
                           <div className={Styles.title}>
                           <h1 style={{fontSize:'20px'}}>
                           Payment Info</h1>
                           </div>
                           <div className={Styles.des}>
                           <p>You can view driver payment here...</p>
                           <Link to="/PaymentInfo">
                           <button>Click Here</button>
                           </Link>

                           </div>
                           </div>
                           {/*
                           <!--cards -->*/}


                           <div className={Styles.cardd}>

                           <div className={Styles.imagee}>
                              <img style={{height:'130px'}}src="./assets/img/amazon_feedback.jpg"/>
                           </div>
                           <div className={Styles.title}>
                           <h1 style={{fontSize:'20px'}}>
                           Feedback</h1>
                           </div>
                           <div className={Styles.des}>
                           <p>You can see customer feedback here...</p>
                           <Link to="/FeedBack">
                           <button>Click Here</button>
                           </Link>
                           </div>
                           </div>
                              
                 </div>
         </div>
         <Footer/>
</div>
        
        )
    }
}

export default Home
