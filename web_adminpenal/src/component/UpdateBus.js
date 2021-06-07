import React, { Component } from 'react';
import Styles from './css/overall.module.css';
import axios from 'axios'
import Layout from './Layout'
import Footer from './Footer'
 class UpdateBus extends Component {
   constructor(props)
 {
   super(props)
   this.state=
   {
     Name:"",
     NumberPlate:"",
     Bus:[],
     message: {},
      allert:"",
   };

 }

 componentDidMount()
 {
   axios.get('http://127.0.0.1:8000/getsubbus?uid='+this.props.match.params.id)
   .then(response=>{
    //  console.log(response)
    this.setState({Bus:response.data})
    
    this.setState({Name:this.state.Bus.Name})
    this.setState({NumberPlate:this.state.Bus.NumberPlate})
  

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
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~. ]/; 
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
  e.preventDefault()
  const Name = this.state.Name.toLocaleUpperCase();
const NumberPlate=this.state.NumberPlate.toUpperCase();
  const uid=this.props.match.params.id;

  //  load kam ni kea let see

  const data = {
    Name,
   NumberPlate,
    uid
  };
// console.log(data)
if(Name!==""&& NumberPlate!=="" && Name.length >=1 && NumberPlate.length >= 6)
    {
  axios
    .put("http://127.0.0.1:8000/getsubbus", data)
    .then((response) => {
      // console.log(response);
      this.setState({
        message: response.data,
      });
      alert(this.state.message.message)
      this.setState({Name:"",NumberPlate:"",allert:""})
    })
    .catch((err) => {
      console.log(err);
    });
  // alert(this.state.message.message);
 
}
else
{
  this.setState({allert:"*Invalid Input"})
}

}



    render() {
        return (
          

<div>
  <Layout/>

          <div className={Styles.bodyy}>

          
          <div className={Styles.container}>  
          <form id={Styles.contact} action="" method="post" onSubmit={this.postdata.bind(this)}>
            <h3>Update Bus</h3>
            <h4></h4>
            <fieldset>
              <input placeholder="Bus Name" type="text" tabindex="1" required autofocus  name="Name"
                value={this.state.Name}
                maxLength="20"
                onChange={this.datachange.bind(this)}/>
            </fieldset>
            <fieldset>
              <input placeholder="Palet Number" type="text" tabindex="2" required  name="NumberPlate"
                value={this.state.NumberPlate}
                maxLength="9"
                onChange={this.busnumber.bind(this)}/>
            </fieldset>
           
            <fieldset >
  <p style={{color:'red',fontSize:'12px',fontFamily:'monospace'}} >{this.state.allert}</p>
</fieldset>
            <fieldset>
              <button name="submit" type="submit" id={Styles['contact-submit']} data-submit="...Sending">Update</button>
            </fieldset>
            
          </form>
        </div>
   
  </div> 

  <Footer/>
</div>
        )
    }
}

export default UpdateBus
