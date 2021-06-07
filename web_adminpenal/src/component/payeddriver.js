import React, { Component } from 'react'
import Layout from './Layout'
import Footer from './Footer'
import axios from 'axios'
import Styles from './css/overall.module.css'
import table from './css/table.module.css'
export class payeddriver extends Component {

    constructor(props)
    {
        super(props)
        this.state=
        {
            busdata:[],
            drivername:[],
            salarydetail:[],
            message:{},
            allert:"",
            busname:"",
            driverid:"",
      

            startdate:"",
            enddate:""
        }
    }

    componentDidMount()
    {
      
      axios.get('http://127.0.0.1:8000/showbusnamelist')
      .then(response=>{

        this.setState({busdata:response.data})
    
      })
      .catch(err=>{
        console.log(err)
       })

    }


    getalldriverofbus

    setbusname(e)
    {
    if(e.target.value!=="Select Bus")
    {
    this.setState({busname:e.target.value})

    axios.get('http://127.0.0.1:8000/getalldriverofbus?BusName='+e.target.value)
    .then(response=>{

      this.setState({drivername:response.data})
  
    })
    .catch(err=>{
      console.log(err)
     })
    
    }
    }







    

setstartdate(e)
{
    this.setState({startdate:e.target.value})


}

setenddate(e)
{
    this.setState({enddate:e.target.value})
 

}
setdriverid(e)
{
  if(e.target.value!=="Select Driver")
  {
  this.setState({driverid:e.target.value})

  }
}

sentdata(e)
{
  
  e.preventDefault()
  const Driverid=this.state.driverid;
  const StartDate=this.state.startdate;
  const EndDate=this.state.enddate;
  console.log(StartDate+" "+Driverid+" "+EndDate)

  if( Driverid!==" " && StartDate!==" " && EndDate!==" ")
  {
const data={
  Driverid,
  StartDate,
  EndDate
}

axios.post('http://127.0.0.1:8000/getpaybetweendate',data)
.then((res)=>{
  this.setState({salarydetail:res.data})
  this.setState({startdate:'',enddate:''})

})
.catch((err)=>{
  console.log(err)
})


  }
  else{
    alert("Some data missing")
  }

    

}


    render() {
       
        const {busdata}=this.state
        const {drivername}=this.state
        const {salarydetail}=this.state
        return (
            <div>
                <Layout/>
                <div className={Styles.bodyy}>
          
<div className={Styles.container} style={{marginTop:'-80px'}}>  
<form id={Styles.contact} action="" method="post" onSubmit={this.sentdata.bind(this)}>
  <h3>Payment Selection</h3>
  <h4></h4>
 



                    <fieldset>
                    
                    <select  className={Styles.selectt} placeholder="BusName" onChange={e=>this.setbusname(e)} value={this.state.busname} >
                   <option >Select Bus</option>         
                   {busdata.length ? busdata.map(post=>(
                    
                          <option key={post.uid} value={post.Name}>{post.Name}</option>
                              
                    )) :null}
                 
                   </select>
                    </fieldset>


                    <fieldset>
                    
                    <select  className={Styles.selectt} placeholder="Driver Name" onChange={e=>{this.setdriverid(e)}}  >
                   <option >Select Driver</option>         
                   {drivername.length ? drivername.map(post=>(
                    
                          <option key={post.uid} value={post.uid}>{post.Name}({post.Contact})</option>
                              
                    )) :null}
                 
                   </select>
                    </fieldset>



                

                    <fieldset>
                    <input type="date"  name="startdate" className={Styles.selectt} value={this.state.startdate} onChange={e=>this.setstartdate(e)}/>

                    </fieldset>


                    <fieldset>
                    <input type="date"  name="enddate" className={Styles.selectt} value={this.state.enddate} onChange={e=>this.setenddate(e)}/>

                    </fieldset>



 

    
  <fieldset>
    <button name="submit" type="submit" id={Styles['contact-submit']} data-submit="...Sending">Find</button>
  </fieldset>
  
</form>
</div>

</div> 


{/* table */}


<table id={table.customers}>
  <tr>
   
    
    <th>Date</th>
    <th>Rate(Rs.)</th>
    <th>Travel Time(Hr)</th>
    <th>Salary(Rs.)</th>
    <th>Assignby</th>
    <th>Paydate</th>
  </tr>
  {salarydetail.length ? salarydetail.map(post=> 
  <tr key={post.Driverid}>
    <td>{post.Date}</td>
    <td>{post.Rate}</td>
    <td>{post.Traveltime}</td>
    <td>{post.Salary}</td>
    <td>{post.Assignby}</td>
    <td>{post.Paydate}</td>
  </tr>

): null}
  
  
</table>



                <Footer/>
                
            </div>
        )
    }
}

export default payeddriver
