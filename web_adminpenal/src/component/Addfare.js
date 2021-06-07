// import { import } from 'mathjs'
import React, { Component } from 'react'
import axios from 'axios'
import Styles from './css/overall.module.css'
//import axios from 'axios'
// import { null } from 'mathjs'

import Layout from './Layout'
import Footer from './Footer'

class Addfare extends Component {
    constructor(props)
    {
        super(props)
        this.state=
        {
            busdata:[],
            fare:null,
            message:{},
            allert:"",
            busname:""
        }
    }

    componentDidMount()
    {
      
      axios.get('http://127.0.0.1:8000/showbusnamelist')
      .then(response=>{
        // console.log(response)
        this.setState({busdata:response.data})
    
      })
      .catch(err=>{
        console.log(err)
       })

    }


setfare(e)
{
  const re = /^[0-9\b]+$/;
  // if value is not blank, then test the regex
  if (e.target.value === '' || re.test(e.target.value)) 
  {
     this.setState({fare: e.target.value})
  }

}

setbusname(e)
{
if(e.target.value!=="Select Bus")
{
this.setState({busname:e.target.value})

}
}

sentdata(e)
  {

e.preventDefault()
 const Name=this.state.busname;
 const Fare=this.state.fare;

 const data=
 {
   Name,Fare
 }


 if(Fare!=="" && Name!=="")
 {
axios.post('http://127.0.0.1:8000/addfare',data)
.then(req=>{
  this.setState({message:req.data})
  alert(this.state.message.message)
  this.setState({busname:"",fare:"",allert:""})
})
.catch(err=>{console.log(err)})
 }
 else
 {
   this.setState({allert:"Some thing is missing"})
 }





    }

    render() {
              const {busdata}=this.state
        return (

          <div>
  <Layout/>

            <div className={Styles.bodyy}>

          
            <div className={Styles.container}>  
            <form id={Styles.contact} action="" method="post" onSubmit={this.sentdata.bind(this)}>
              <h3>Add Fare</h3>
              <h4></h4>
              <fieldset>
                    
              <select  className={Styles.selectt} placeholder="BusName" onChange={e=>this.setbusname(e)} value={this.state.busname} >
             <option >Select Bus</option>         
             {busdata.length ? busdata.map(post=>(
              
                    <option key={post.uid} value={post.Name}>{post.Name}</option>
                        
              )) :null}
              {/* </optgroup> */}
             </select>
              </fieldset>
             
             
              <fieldset>
                <input placeholder="Add Fare" type="text" tabindex="2" required name="fare" onChange={e=>this.setfare(e)} value={this.state.fare}/>
              </fieldset>
              <fieldset >
  <p style={{color:'red',fontSize:'12px',fontFamily:'monospace'}} >{this.state.allert}</p>
</fieldset>
                
              <fieldset>
                <button name="submit" type="submit" id={Styles['contact-submit']} data-submit="...Sending">Add/Update</button>
              </fieldset>
              
            </form>
          </div>
     
    </div> 
    <Footer/>
</div>
        )
    }
}

export default Addfare
