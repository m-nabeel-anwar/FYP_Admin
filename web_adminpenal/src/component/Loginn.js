
import React, { Component } from 'react'
// import {Link,Router} from 'react-router-dom';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Styles from './css/Loginn.module.css';
// // import Layout from './Layout';
// // import layout from './Layout'
// import Footer from './Footer'
import Links from './Links';
import axios from 'axios'
import md5 from 'md5'

 class Loginn extends React.Component {


    constructor(props) {
        super(props);
        this.state={
            Email:'',
            Password:'',
            ForgetEmail:'',
            ForgetPassword:''
        }



      }

      handelchange(e)
      {
        this.setState({
            [e.target.name]: e.target.value,
          });
      }

      changeforgetemail(e)
      {
        this.setState({
            ForgetEmail: e.target.value,
          });
      }

      changeforgetpassword(e)
      {
          this.setState({ForgetPassword:e.target.value})
      }


admin_login(e) {
    // this.props.history.push('/');
    // return(
    //     <Router>
    //         {/* {console.log('kjdkjfdkjfk')} */}
    //     <Route path="/Links" component={Links}/>
    // </Router>

    // )

    e.preventDefault();

    
    const Email=this.state.Email;
    const Password=md5(this.state.Password);
    if(Email!=='' && Password!=='')
    {
    const data={Email,
        Password
    }
    axios.post("http://127.0.0.1:8000/adminlogin",data)
    .then((response)=>{
        if(response.data.message==="Found")
        {
alert("Login")
this.setState({Email:'',Password:''})
        }
        else{
            alert(response.data)
            console.log(response.data)
            this.setState({Email:'',Password:''})
        }
    })
    .catch((err)=>{
        console.log(err)
    })

    
}
else
{
    alert("Invalid input")
}
    
}


admin_forgetpassword(e)
{
    e.preventDefault();
    const ForgetEmail=this.state.ForgetEmail;
    const ForgetPassword=this.state.ForgetPassword
if(ForgetEmail!=='' && ForgetPassword!=='')
{
if(ForgetPassword.length==16)
{


    const data={ForgetEmail,ForgetPassword}
    axios.post("http://127.0.0.1:8000/adminforgetpassword",data)
    .then((response)=>{
        if(response.data.Check==="True")
        {

alert("Password reset login plz")



this.setState({Email:'',Password:''})
        }
        else{
            alert(response.data.message)
            this.setState({Email:'',Password:''})
        }
    })
    .catch((err)=>{
        console.log(err)
    })


}
else{
    alert("Enter 16 digit password")
}

}
else
{
    alert("Enter valid input")
}

}



    render() {
        // localStorage.setItem("appid",1);
        return (
            
           <div className={Styles.bodye}>
                            <div className={Styles['main-bg']}>
                                {/*
                    <!-- title -->*/}
                    <h1 className={Styles.hh1}>Admin Login</h1>
                    {/*
                    <!-- //title -->*/}
                    <div className={Styles['sub-main-w3']}>
                        <div className={Styles['image-style']}>

                        </div>
                {/*<!-- vertical tabs -->*/}
                        <div className={Styles['vertical-tab']}>
                            <div id="section1" className={Styles['section-w3ls']}>
                                <input type="radio" name="sections" id="option1" checked/>
                                <label for="option1" className={Styles['icon-left-w3pvt']}><span class="fa fa-user-circle" aria-hidden="true"></span>Login</label>
                                <article>


                                    <form method="post" action="" onSubmit={this.admin_login.bind(this)}>
                                        <h3 className={Styles.legend}>Login Here</h3>
                                        <p className={Styles['para-style']}>Enter your email address below and enter a  password  we'll enter you after verification</p>
                                        <div className={Styles.input}>
                                            <span class="fa fa-envelope-o" aria-hidden="true"></span>
                                            <input type="email" placeholder="Email" name="Email"   value={this.state.Email} onChange={this.handelchange.bind(this)} maxLength="25"  required />
                                        </div>
                                        <div className={Styles.input}>
                                            <span class="fa fa-key" aria-hidden="true"></span>
                                            <input type="password" placeholder="Password" name="Password"  value={this.state.Password} onChange={this.handelchange.bind(this)} maxLength="16"  required />
                                        </div>
                                        <button type="submit" className={Styles.submit} >Login</button> {/*yaha change kea hay*/}
                                    {/*  <Link to="#" class="bottom-text-w3ls">Forgot Password?</Link> */} 
                                    </form>



                                </article>
                            </div>
                            <div id="section2" className={Styles['section-w3ls']}>
                                <input type="radio" name="sections" id="option2"/>
                                <label for="option2"className={Styles['icon-left-w3pvt']}><span class="fa fa-pencil-square" aria-hidden="true"></span>Register</label>
                                <article>
                                    <form>
                                        <h3 className={Styles.legend}>Register Here</h3>
                                        
                                        <div className={Styles.input}>
                                            <span class="fa fa-user-o" aria-hidden="true"></span>
                                            <input type="text" placeholder="Username" name="name" required />
                                        </div>
                                        <div className={Styles.input}>
                                            <span class="fa fa-key" aria-hidden="true"></span>
                                            <input type="password" placeholder="Password" name="password" required />
                                        </div>
                                        <div className={Styles.input}>
                                            <span class="fa fa-key" aria-hidden="true"></span>
                                            <input type="password" placeholder="Confirm Password" name="password" required />
                                        </div>
                                        
                                        <button type="submit" className={Styles.submit} >Register</button>
                                    </form>
                                </article>
                            </div>
                            <div id="section3" className={Styles['section-w3ls']}>
                                <input type="radio" name="sections" id="option3"/>
                                <label for="option3" className={Styles['icon-left-w3pvt']}><span class="fa fa-lock" aria-hidden="true"></span>Forgot Password?</label>
                                <article>
                                    <form   method="post" action="" onSubmit={this.admin_forgetpassword.bind(this)}>
                                        <h3 className={Styles.legend} >Reset Password</h3>
                                        <p className={Styles['para-style']}>Enter your email address below and enter a new password  we'll reset your  email with new password
                                        </p>
                                        {/* <!--<p class="para-style-2"><strong>Need Help?</strong> Learn more about how to <a href="#">retrieve an existing
                                                account.</a></p>-->*/}
                                        <div className={Styles.input}>
                                            <span class="fa fa-envelope-o" aria-hidden="true"></span>
                                            <input type="email" placeholder="Email" name="email" value={this.state.ForgetEmail} onChange={this.changeforgetemail.bind(this)} maxLength="30" required />
                                        </div>
                                        <div className={Styles.input}>
                                            <span class="fa fa-key" aria-hidden="true"></span>
                                            <input type="password" placeholder="Password" name="password"  value={this.state.ForgetEmail} onChange={this.changeforgetpassword.bind(this)} maxLength="16" required />
                                        </div>
                                        <button type="submit" className={Styles.submit }  >Reset</button>
                                    </form>
                                </article>
                            </div>
                        </div>
                    {/*	<!-- //vertical tabs -->*/}
                        <div className={Styles.clear}></div>
                    </div>
                {/*<!-- copyright -->*/}
                    <div className={Styles.copyright}>
                        <h2>&copy; FYP 2020 | Nabeel & Zahida </h2>
                        
                    </div>
                {/*	<!-- //copyright -->*/}
                </div>
    </div>
        
        )
    }
}

export default Loginn
