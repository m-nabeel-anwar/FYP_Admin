// import { null } from 'mathjs';
import React, { Component } from 'react'
import Styles from './css/overall.module.css';
import axios from 'axios'
import Layout from './Layout'
import Footer from './Footer'

 class AddAssignBus extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      postdata:[],
      driver:[],
      busnumber:[],
      BusName:"",
      NumberPlate:"",
      uid:"",
      drivername:"",
      message:{},
      allert:""
    }
    
  }

  componentDidMount()
  {
    axios.get('http://127.0.0.1:8000/distinctunassignbus')
    .then(response=>{
      console.log(response)
      this.setState({postdata:response.data})

    })
    .catch(err=>{
      console.log(err)
     })

     axios.get('http://127.0.0.1:8000/getunassigndriver')
     .then(response=>{
       console.log(response)
       this.setState({driver:response.data})
 
     })
     .catch(err=>{
       console.log(err)
      })

    }



    numberplate(e)
    {
      if(e.target.value!=="Number Plate")
      {
        this.setState({NumberPlate:e.target.value})
      }
    }

    drivername(e)
    {
if(e.target.value!=="Driver Name")
{
this.setState({uid:e.target.value})
this.setState({drivername:e.target.value})
// console.log(this.state.uid)
}
    }



    datachange(e)
    {

      if(e.target.value!=="Bus Name")
      {
      this.setState({BusName:e.target.value})
      
      axios
          .get("http://127.0.0.1:8000/getbusnumber?Name="+e.target.value)
          .then((response) => {
            console.log(response);
            this.setState({busnumber:response.data})

          })
          .catch((err) => {
            console.log(err);
          });
        }
    
    }


postdata(e)
{
  e.preventDefault()
  const uid=this.state.uid;
  // console.log(this.state.uid);
  const BusName=this.state.BusName;
  const NumberPlate=this.state.NumberPlate;

  const data={
    uid,
    BusName,
    NumberPlate,
  }
if(uid!==""&& BusName!=="" && NumberPlate!="")
{

axios.post('http://127.0.0.1:8000/assigbus',data)
.then(response=>{
  console.log(response.data)
  this.setState({message:response.data})
  alert(this.state.message.message)
this.setState({uid:"",BusName:"",NumberPlate:"",allert:""})
})
.catch(err=>{console.log(err)
})
// alert("Did"+uid+"Bus"+BusName+"No"+NumberPlate)


}
else{
this.setState({allert:"Some data missing"})
}


}


    render() {
      const {postdata}= this.state
      const{driver}=this.state
      const{busnumber}=this.state
        return (


<div>
  <Layout/>

            <div className={Styles.bodyy}>


            <div className={Styles.container}>  
            <form id={Styles.contact} action="" method="post" onSubmit={this.postdata.bind(this)}>
              <h3>Assign Bus</h3>
              <h4></h4>
           
              
              <fieldset>


              <select className={Styles.selectt} placeholder='BusName' value={this.state.BusName} onChange={e=>this.datachange(e)}>
                <option>Bus Name</option>
              {postdata.length ? postdata.map(post=>(
                    <option key={post.uid} value={post.Name}>{post.Name}</option>
                        
              )) :null}
              </select>

              </fieldset>

              <fieldset>
              <select className={Styles.selectt} placeholder='NumberPlate' value={this.state.NumberPlate} onChange={e=>this.numberplate(e)}>
              <option>Number Plate</option>
              {busnumber.length ? busnumber.map(post=>(
                    <option key={post.uid} value={post.NumberPlate}>{post.NumberPlate}</option>
                        
              )) :null}
              </select>
              </fieldset>


              <fieldset>
              <select className={Styles.selectt} placeholder='Driver Name' value={this.state.drivername}  onChange={e=>this.drivername(e)}>
              <option>Driver Name</option>
              {driver.length ? driver.map(postt=>(
                    <option key={postt.uid} value={postt.uid}>{postt.Name}({postt.Contact})</option>
                        
              )) :null}
              </select>


              </fieldset> 
              <fieldset >
  <p style={{color:'red',fontSize:'12px',fontFamily:'monospace'}} >{this.state.allert}</p>
</fieldset>
                
              <fieldset>
                <button name="submit" type="submit" id={Styles['contact-submit']} data-submit="...Sending">Assign</button>
              </fieldset>
              
            </form>
          </div>
     
    </div>

    <Footer/>
</div>

        )
    }
}

export default AddAssignBus
