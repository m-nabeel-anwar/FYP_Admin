import React, { Component } from "react";
import Styles from "./css/overall.module.css";
import axios from 'axios'
import Layout from './Layout'
import Footer from './Footer'
class UpdateDriver extends Component {
constructor(props)
{
  super(props)
  this.state={
    Name: "",
    Email: "",
    Contact: "",
    Cnic: "",
    Address: "",
    error:"",
    message: {},
    driver:[],

  };
}
  componentDidMount()
   {
     axios.get('http://127.0.0.1:8000/getdriver?uid='+this.props.match.params.uid)
     .then(response=>{
       console.log(response)
      this.setState({driver:response.data})
      
      this.setState({Name:this.state.driver.Name})
      this.setState({Email:this.state.driver.Email})
      this.setState({Contact:this.state.driver.Contact})
      this.setState({Cnic:this.state.driver.Cnic})
      this.setState({Address:this.state.driver.Address})

     })
     .catch(err=>{
       console.log(err)
      })
   }

   datachange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }



  drivername(e)
  {
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~0-9]/; //. hata dea hay or space bhi
    // var format= /[a-zA-Z ]/;
  if(format.test(e.target.value))
  {
  
  }
  else
  {
    this.setState({Name:e.target.value})
  }
  }


  driveremail(e)
  {
    var format = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/? ~]/; //@ . hata dea hay or space bhi
    // var format= /[a-zA-Z ]/;
  if(format.test(e.target.value))
  {
  
  }
  else
  {
    this.setState({Email:e.target.value})
  }
  }

  drivercontact(e)
{
  var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~.a-z A_Z]/; //. hata dea hay or space bhi
  // var format= /[a-zA-Z ]/;
if(format.test(e.target.value))
{

}
else
{
  this.setState({Contact:e.target.value})
}
}

driveradress(e)
{
  var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|<>\?~]/; // /,. hata dea hay or space bhi
  // var format= /[a-zA-Z ]/;
if(format.test(e.target.value))
{

}
else
{
  this.setState({Address:e.target.value})
}
}


drivercnic(e)
{
  var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~.a-z A_Z]/;
  // var format= /[a-zA-Z ]/;
if(format.test(e.target.value))
{

}
else
{
  this.setState({Cnic:e.target.value})
}

  
}







  postdata(e) {
    e.preventDefault();
    const Name = this.state.Name;
    const Email = this.state.Email;
    const Contact = this.state.Contact;
    const Cnic = this.state.Cnic;
    const Address = this.state.Address;
    const uid=this.props.match.params.uid;

    //  load kam ni kea let see

    const data = {
      Name,
      Email,
      Contact,
      Cnic,
      Address,
      uid
    };
// console.log(data)

if(Cnic.length===13 && Contact.length===11 && Name.length >=3)
    {

    axios
      .put("http://127.0.0.1:8000/getdriver", data)
      .then((response) => {
        console.log(response);
        this.setState({
          message: response.data,
        });
        alert(this.state.message.message)
        this.setState({Name:"",Email:"",Contact:"",Cnic:"",Address:"",error:""})
      })
      .catch((err) => {
        console.log(err);
        this.setState({message:err})
        alert(this.state.message)
        this.setState({Name:"",Email:"",Contact:"",Cnic:"",Address:"",Password:"",error:""})
      });
  
   
  
  }
  else
  {
    this.setState({error:"Please Enter Right Contact/Cnic Number Or Name"})
  }

  }






  render() {
    return (
      
<div>
  <Layout/>

      <div className={Styles.bodyy}>
        <div className={Styles.container}>
          <form id={Styles.contact} action="" method="post"  onSubmit={this.postdata.bind(this)}>
            <h3>Update Driver</h3>
            <h4></h4>
            <fieldset>
              <input
                placeholder="Driver Name"
                type="text"
                tabindex="1"
                required
                autofocus
                name="Name"
                value={this.state.Name}
                onChange={this.drivername.bind(this)}
                maxLength="30"
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Driver Email"
                type="email"
                tabindex="2"
                required
                name="Email"
                value={this.state.Email}
                onChange={this.driveremail.bind(this)}
                maxLength="25"
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Mobile Number"
                type="tel"
                tabindex="3"
                required
                name="Contact"
                value={this.state.Contact}
                onChange={this.drivercontact.bind(this)}
                maxLength="11"
              />
            </fieldset>
            <fieldset>
              <input placeholder="Address" type="text" tabindex="4" 
              required name="Address"
              value={this.state.Address}
              maxLength="50"
                onChange={this.driveradress.bind(this)} />
            </fieldset>
            <fieldset>
              <input placeholder="CNIC" type="text" tabindex="4" required 
              name="Cnic"
              value={this.state.Cnic}
              onChange={this.drivercnic.bind(this)}
              maxLength="13"
              />
            </fieldset>
            {/* <fieldset>
              <input placeholder="Password" type="text" tabindex="4" required/>
            </fieldset> */}
<fieldset >
  <p style={{color:'red',fontSize:'12px',fontFamily:'monospace'}} >{this.state.error}</p>
</fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id={Styles["contact-submit"]}
                data-submit="...Sending"
              >
                Update
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <Footer/>
</div>
    );
  }
}

export default UpdateDriver;
