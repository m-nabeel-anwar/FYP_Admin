import React, { Component } from 'react'
import axios from 'axios'
// import Background from './assets/images/b4.jpg'
import {Link ,Redirect} from 'react-router-dom';
import Styles from './css/overall.module.css';
import md5 from 'md5'

 class Login extends Component {
     constructor(props)
     {
         super(props)
         this.state={
             Email:'',
             Password:''

         }
     }

     onchange(e)
     {
        this.setState({
            [e.target.name]: e.target.value,
          });
     }


     admin_login(e) {
     
    
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
    // alert("Login")
    localStorage.setItem('Login',response.data.uid)
    this.props.history.push('/Home')

    this.setState({Email:'',Password:''})
            }
            else{
                alert("Email or Password are incorrect..!")
                // console.log(response.data)
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
    




    render() {
        return (
            <div style={{backgroundImage: "url(./assets/images/bm.jpg)" }} >
            <div className={Styles.bodyy} style={{padding:72}} >
        
            <div className={Styles.container} >
            
              <form
                id={Styles.contact}
                action=""
                method="post"
                 onSubmit={this.admin_login.bind(this)}
              >
                 
                <h3 style={{textAlign:'center'}}>Login</h3>
                <h4></h4>
                <fieldset>
                  <input
                    placeholder="Email"
                    type="text"
                    tabindex="1"
                    name="Email"
                    maxLength="30"
                    value={this.state.Email}
                    onChange={this.onchange.bind(this)}
                    required
                    autofocus
                  />
                </fieldset>
                <fieldset>
                  <input
                    placeholder="Password"
                    type="password"
                    tabindex="2"
                    name="Password"
                    value={this.state.Password}
                    maxLength="16"
                    onChange={this.onchange.bind(this)}
                    required
                  />
                </fieldset>
              
    
                <fieldset>
                  <button
                    name="submit"
                    type="submit"
                    id={Styles["contact-submit"]}
                    data-submit="...Sending" 
                  >
                    Login
                  </button>
                </fieldset>
              
           <fieldset style={{color:'red',marginLeft:'180px',fontSize:20,fontFamily:'monospace'}}> <Link to="/ForgetPassword">Forget Password?</Link> </fieldset>   
       {/* <fieldset style={{color:'black',marginLeft:'220px',fontSize:'20px'}}><Link to="/Register">Register Here</Link></fieldset> */}
              </form>
    
            </div>
            </div>
          </div>
         
        )
    }
}

export default Login
