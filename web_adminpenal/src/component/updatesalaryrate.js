// import { import } from 'mathjs'
import React, { Component } from 'react'
import axios from 'axios'
import Styles from './css/overall.module.css'
//import axios from 'axios'
// import { null } from 'mathjs'

import Layout from './Layout'
import Footer from './Footer'

class updatesalaryrate extends Component {
    constructor(props)
    {
        super(props)
        this.state=
        {
           
            rate:null,
            message:{},
            allert:""
           
        }
    }

   


setfare(e)
{
  const re = /^[0-9\b]+$/;
  // if value is not blank, then test the regex
  if (e.target.value === '' || re.test(e.target.value)) 
  {
     this.setState({rate: e.target.value})
  }

}


sentdata(e)
  {

e.preventDefault()

 const Rate=this.state.Rate;

 const data=
 {
   Rate
 }


 if(Rate!=="")
 {
axios.post('http://127.0.0.1:8000/setrate',data)
.then(req=>{
  this.setState({message:req.data})
  alert(this.state.message.message)
  this.setState({rate:""})
  this.setState({allert:""})
})
.catch(err=>{console.log(err)})
 }
 else
 {
   this.setState({allert:"Enter new Rate"})
 }





    }

    render() {
              
        return (

          <div>
  <Layout/>

            <div className={Styles.bodyy}>

          
            <div className={Styles.container}>  
            <form id={Styles.contact} action="" method="post" onSubmit={this.sentdata.bind(this)}>
              <h3>UPDATE RATE</h3>
              <h4></h4>
             
             
             
              <fieldset>
                <input placeholder="Update rate" maxLength={4} type="text" tabindex="2" required name="rate" onChange={e=>this.setfare(e)} value={this.state.rate}/>
              </fieldset>
              <fieldset >
  <p style={{color:'red',fontSize:'12px',fontFamily:'monospace'}} >{this.state.allert}</p>
</fieldset>
                
              <fieldset>
                <button name="submit" type="submit" id={Styles['contact-submit']} data-submit="...Sending">UPDATE RATE</button>
              </fieldset>
              
            </form>
          </div>
     
    </div> 
    <Footer/>
</div>
        )
    }
}

export default updatesalaryrate
