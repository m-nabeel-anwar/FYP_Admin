import React, { Component } from 'react'
import Styles from './css/overall.module.css'
import axios from 'axios'
import Layout from './Layout'
import Footer from './Footer'
 class UpdateRoute extends Component {

constructor(props)
{
  super(props)
  {
    this.state={
      busdata:[],
      routedata:[],
      newroutee:[],
      busname:"",
routename:"",
newroute:"",
message:{}

    }
  }
}

  componentDidMount()
  { 
    axios.get('http://127.0.0.1:8000/showbusnamelist')
    .then(response=>{
      console.log(response)
      this.setState({busdata:response.data})
  
    })
    .catch(err=>{
      console.log(err)
     })
  

     axios.get('http://127.0.0.1:8000/showroutelist')
     .then(response=>{
       console.log(response)
       this.setState({newroutee:response.data})
   
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

settnewroute(e)
{
  if(e.target.value!=="New Route")
  {this.setState({newroute:e.target.value})

  }
}

sentdata(e)
{
  e.preventDefault()
  if(this.state.busname!=="" && this.state.routename!==""  && this.state.newroute!=="")
  {
const Route=this.state.routename;
const NewRoute=this.state.newroute
const Name=this.state.busname
const data=
{
  Route,NewRoute,Name
}
axios.put('http://127.0.0.1:8000/updateroute',data)
.then(response=>{
  this.setState({message:response.data})
  alert(this.state.message.message)
})
.catch(err=>{console.log(err)})


    this.setState({busname:"",routename:"",newroute:""})
  }
  else
  {
    alert("Select all options")
    this.setState({busname:"",routename:"",newroute:""})
  }

}



    render() {
      const {busdata}=this.state
const{routedata}=this.state
const{newroutee}=this.state
        return (
          <div>
  <Layout/>

            <div className={Styles.bodyy}>

          
            <div className={Styles.container}>  
            <form id={Styles.contact} action="" method="post" onSubmit={this.sentdata.bind(this)}>
              <h3>Update Route</h3>
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
              <select  className={Styles.selectt} placeholder="Route" onChange={e=>this.settroute(e)} value={this.state.routename} >
             <option >Select Route</option>
            
             {routedata.length ? routedata.map(post=>(
              
                    <option key={post.uid} value={post.Name}>{post.Name}</option>
                        
              )) :null}
              </select>
              </fieldset>
              <fieldset>
                <select  className={Styles.selectt} placeholder="New Route" onChange={e=>this.settnewroute(e)} value={this.state.newroute}>
                  <option>New Route</option>
                  {newroutee.length ? newroutee.map(post=>(
              
              <option key={post.id} value={post.Name}>{post.Name}</option>
                  
        )) :null}
                </select>
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

export default UpdateRoute
