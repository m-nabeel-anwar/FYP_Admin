// import { import } from 'mathjs';
import React, { Component } from "react";
import Styles from "./css/overall.module.css";
import axios from "axios";

import Layout from './Layout'
import Footer from './Footer'

class AddBus extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      NumberPlate: "",
      message: {},
      allert:"",
    };
  }

  datachange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  busname(e)
  {
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~.]/; 
    // var format= /[a-zA-Z ]/;
  if(format.test(e.target.value))
  {
  
  }
  else
  {
    this.setState({Name:e.target.value})
  }

  }



  busnumber(e)
  {
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~.]/; 
    // var format= /[a-zA-Z ]/;
  if(format.test(e.target.value))
  {
  
  }
  else
  {
    this.setState({NumberPlate:e.target.value})
  }

  }





  postdata(e) {
    e.preventDefault();
    const Name = this.state.Name.toUpperCase();
    const NumberPlate = this.state.NumberPlate.toUpperCase();
    //  load kam ni kea let see

    const data = {
      Name,
      NumberPlate,
    };

    if(Name!=='' && NumberPlate!=='' && Name.length >=1 && NumberPlate.length >= 6)
    {
    axios
      .post("http://127.0.0.1:8000/getsubbus", data)
      .then((response) => {
        
        // console.log(response);
        // alert(response.data);
        this.setState({
          message: response.data,
        });
        alert(this.state.message.message)
        this.setState({Name:"",NumberPlate:"",allert:""})
      })
      .catch((err) => {
        console.log(err);
        
      });
    }
    else
    {
      this.setState({allert:"*Invalid Input"})
    }
 
      
    
    // this.setState({Name:"",NumberPlate:""})
    // console.log(this.state.message);
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
            <h3>Add Bus</h3>
            <h4></h4>
            <fieldset>
              <input
                placeholder="Bus Name"
                type="text"
                tabindex="1"
                name="Name"
                value={this.state.Name}
                onChange={this.busname.bind(this)}
                maxLength="20"
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Bus Number"
                type="text"
                tabindex="2"
                name="NumberPlate"
                value={this.state.NumberPlate}
                maxLength="9"
                onChange={this. busnumber.bind(this)}
                required
              />
            </fieldset>
            <fieldset >
  <p style={{color:'red',fontSize:'12px',fontFamily:'monospace'}} >{this.state.allert}</p>
</fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id={Styles["contact-submit"]}
                data-submit="...Sending"
              >
                Register
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

export default AddBus;
