import Axios from 'axios';
import React, { Component } from 'react'
import Styles from './css/overall.module.css';
import axios from 'axios'
import Layout from './Layout'
import Footer from './Footer'
 class DeleteRoute extends Component {
   constructor(props)
   {
     super(props)
     this.state={
      routedata:[],
      busdata:[],
      busname:"",
      routename:"",
      messagee:{},
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



   setbusname(e)
   {
if(e.target.value!=="Select Bus")
{
this.setState({busname:e.target.value})

axios.get('http://127.0.0.1:8000/showbusroute?Name='+e.target.value)
.then(req=>{
  this.setState({routedata:req.data})
})
.catch(err=>{console.log(err)})
  
}
   }


settroute(e)
{
  if(e.target.value!=="Select Route")
  {
this.setState({routename:e.target.value})
  }
};


onpostdata(e)
{

  e.preventDefault()
  if(this.state.busname!=="" && this.state.routename!=="")
  {
const Name=this.state.busname;
const Route=this.state.routename

const data={
  Route,Name
}

axios.delete('http://127.0.0.1:8000/deleteroute',{data})
      .then(respone=>{
      this.setState({messagee:respone.data})
      alert(this.state.messagee.message)
      })
      .catch(err=>{
        console.log(err)
      })

     
      this.setState({busname:"",routename:""})
  }
  else{
        alert("Please select both options")
        this.setState({busname:"",routename:""})
  }


}


    render() {
      const{busdata}=this.state
      const {routedata}=this.state
        return (

          <div>
  <Layout/>

            <div className={Styles.bodyy}>

          
            <div className={Styles.container}>  
            <form id={Styles.contact} action="" method="post" onSubmit={this.onpostdata.bind(this)}>
              <h3>Delete Route</h3>
              <h4></h4>
              <fieldset>
               
             <select  className={Styles.selectt} placeholder="BusName" onChange={e=>this.setbusname(e)} value={this.state.busname} >
             <option >Select Bus</option>
             {/* <optgroup label="Select bus"> */}
             {busdata.length ? busdata.map(post=>(
              
                    <option key={post.uid} value={post.Name}>{post.Name}</option>
                        
              )) :null}
              {/* </optgroup> */}
             </select>

              </fieldset>
             
              <fieldset>
              <select  className={Styles.selectt} placeholder="Route" onChange={e=>this.settroute(e)} value={this.state.routename} >
             <option >Select Route</option>
             {/* <optgroup label="Select bus"> */}
             {routedata.length ? routedata.map(post=>(
              
                    <option key={post.uid} value={post.Name}>{post.Name}</option>
                        
              )) :null}
              </select>
              </fieldset>
             
                
              <fieldset>
                <button name="submit" type="submit" id={Styles['contact-submit']} data-submit="...Sending">Delete</button>
              </fieldset>
              
            </form>
          </div>
     
    </div> 
    <Footer/>
</div>
        )
    }
}

export default DeleteRoute
