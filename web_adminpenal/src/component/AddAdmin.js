// import { import } from 'mathjs';
import React, { Component } from "react";
import Styles from "./css/overall.module.css";
import axios from "axios";
import md5 from 'md5';
import Layout from './Layout'
import Footer from './Footer'

class AddAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Contact: "",
      Cnic: "",
      Address: "",
      Password: "",
      message:{},
      error:"",
    };
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
    const Password = md5(this.state.Password);

    //  load kam ni kea let see

    const data = {
      Name,
      Email,
      Contact,
      Cnic,
      Address,
      Password,
    };

    if(Cnic.length===13 && Contact.length===11 && Name.length >=3)
    {
      if(this.state.Password.length===16)
      {
          axios.post("http://127.0.0.1:8000/registeradmin", data)
            .then((response) => {   
              if(response)
              {
                console.log(response);
                this.setState({
                  message: response.data,
                });
              }
              alert(response.data.message)
              this.setState({Name:"",Email:"",Contact:"",Cnic:"",Address:"",Password:"",error:""})

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
      this.setState({error:"Enter 16 digite password"})
    }


    }
    else{
      this.setState({error:"Enter Right Contact/Cnic number  or name"})
    }

  }

  render() {
    return (

<div>
  <Layout/>
 
      <div className={Styles.bodyy}>
        <div className={Styles.container}>
          <form
            id={Styles.contact}
            action=""
            method="post"
            onSubmit={this.postdata.bind(this)}
          >
            <h3>Add Admin</h3>
            <h4></h4>
            <fieldset>
              <input
                placeholder="Admin Name"
                type="text"
                tabindex="1"
                required
                autofocus
                value={this.state.Name}
                name="Name"
                onChange={this.drivername.bind(this)}
                maxLength="30"
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Admin Email"
                type="email"
                tabindex="2"
                required
                value={this.state.Email}
                name="Email"
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
                value={this.state.Contact}
                name="Contact"
                onChange={this.drivercontact.bind(this)}
                maxLength="11"
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Address"
                type="text"
                tabindex="4"
                required
                value={this.state.Address}
                name="Address"
                onChange={this.driveradress.bind(this)}
                maxLength="50"
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="CNIC"
                type="text"
                tabindex="4"
                required
                value={this.state.Cnic}
                name="Cnic"
                onChange={this.drivercnic.bind(this)}
                maxLength="13"
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Password"
                type="password"
                tabindex="4"
                required
                value={this.state.Password}
                name="Password"
                onChange={this.datachange.bind(this)}
                maxLength="16"
              />
            </fieldset>
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
                Add
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
// import { import } from "mathjs";

export default AddAdmin;
