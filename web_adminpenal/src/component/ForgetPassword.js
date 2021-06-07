import React, { Component } from 'react'
import Styles from './css/overall.module.css';
import axios from 'axios'
import md5 from 'md5'
import {Link ,Redirect} from 'react-router-dom';
// import Background from './assets/images/b4.jpg'
 class ForgetPassword extends Component {
     constructor(props)
     {
         super(props)
         this.state={
             Email:'',
             Password:'',
             ConformPassword:'',
             passwordShown:false,
             conformpasswordShown:false
         }
     }


     onchange(e)
     {
        this.setState({
            [e.target.name]: e.target.value,
          });
     }



     admin_forgetpassword(e)
{
    e.preventDefault();

    const Email=this.state.Email;
    const Password=md5(this.state.Password)


if(Email!=='' && Password!=='')
{
   if(this.state.Password === this.state.ConformPassword)
   {
        if(this.state.Password.length === 16)
        {
            

                            const data={Email,Password}
                            // alert(data.Email)
                            // alert(data.Password)

                axios.post("http://127.0.0.1:8000/adminforgetpassword",data)
                .then((response)=>{
                    if(response.data.Check==="True")
                    {

                alert("Your Password is reset please go to login")
                this.setState({Email:'',Password:'',ConformPassword:''})


                    }
                    else{
                        alert("This email are not registered")
                        this.setState({Email:'',Password:'',ConformPassword:''})
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })



        }
        else
        {
          alert("Please enter 16 digites Password")
        }





   }
   else
   {
     alert("Password and confrom Password are not same")
   }






}
else
{
    alert("Enter valid input")
}

}


togglePasswordVisiblity (e) {

  // setPasswordShown(passwordShown ? false : true);
  
  if(this.state.passwordShown)
  {
    
this.setState({passwordShown:false})
  }
  else if(this.state.passwordShown!=true)
  {
   
    this.setState({passwordShown:true})
  }
};

togglePasswordVisiblity2(e) {

  // setPasswordShown(passwordShown ? false : true);
  
  if(this.state.conformpasswordShown)
  {
    
this.setState({conformpasswordShown:false})
  }
  else if(this.state.conformpasswordShown!=true)
  {
   
    this.setState({conformpasswordShown:true})
  }
};

    render() {
        return (
<div  style={{backgroundImage: "url(./assets/images/bm.jpg)" }}>

            <div className={Styles.bodyy}style={{padding:72}}>
            
               
            <div className={Styles.container} >
              <form
                id={Styles.contact}
                action=""
                method="post"
                onSubmit={this. admin_forgetpassword.bind(this)}
              >
                <h3 style={{textAlign:'center'}}>Forget Password</h3>
                <h4></h4>
            
                <fieldset>
                  <input
                    placeholder="Email"
                    type="email"
                    tabindex="2"
                    name="Email"
                    value={this.Email}
                    maxLength="30"
                    onChange={this.onchange.bind(this)}
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    placeholder="NewPassword"
                    type={this.state.passwordShown ?"text":"password"}
                    tabindex="2"
                    name="Password"
                    maxLength="16"
                    value={this.state.Password}
                    onChange={this.onchange.bind(this)}
                    required
                  />
                  <div style={{fontSize:15,marginLeft:2,}}>
                  <input type="checkbox" onChange={this.togglePasswordVisiblity.bind(this)}/>   <b>Show</b> 
                  </div>
                </fieldset>

                <fieldset>
                  <input
                    placeholder="Conform Password"
                    type={this.state.conformpasswordShown ?"text":"password"}
                    tabindex="2"
                    name="ConformPassword"
                    value={this.state.ConformPassword}
                    maxLength="16"
                    onChange={this.onchange.bind(this)}
                    required
                  />
                  <div style={{fontSize:15,marginLeft:2,}}>
                  <input type="checkbox" onChange={this.togglePasswordVisiblity2.bind(this)}/>   <b>Show</b> 
                  </div>
                </fieldset>
              
    
                <fieldset>
                  <button
                    name="submit"
                    type="submit"
                    id={Styles["contact-submit"]}
                    data-submit="...Sending"
                  >
                    Reset Password
                  </button>
                </fieldset>
                <fieldset style={{color:'red',marginLeft:'180px',fontSize:20,fontFamily:'monospace'}}> <Link to="/Login">Goto Login</Link> </fieldset> 
              </form>
    
            </div>
          </div>
          </div>
        )
    }
}

export default ForgetPassword


// const data={Email,Password}
// axios.post("http://127.0.0.1:8000/adminforgetpassword",data)
// .then((response)=>{
//     if(response.data.Check==="True")
//     {

// alert("Password reset login plz")



// this.setState({Email:'',Password:''})
//     }
//     else{
//         alert(response.data.message)
//         this.setState({Email:'',Password:''})
//     }
// })
// .catch((err)=>{
//     console.log(err)
// })

