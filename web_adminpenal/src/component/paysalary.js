import React, { Component } from 'react'
import Layout from './Layout'
import Footer from './Footer'
import axios from 'axios'
import Styles from './css/overall.module.css'
import table from './css/table.module.css'
import { Link } from 'react-router-dom'
// import { null } from 'mathjs'
export class paysalary extends Component {

    constructor(props)
    {
        super(props)
        this.state=
        {
            busdata:[],
            salaryinfo:[],
            message:{},
            allert:'',
            busname:'',
            date:''
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
    
    }
    }

setdate(e)
{
    this.setState({date:e.target.value})
    // alert(this.state.date)

}

sentdata(e)
{
  
  e.preventDefault()
  const Date= this.state.date;
  const BusName=this.state.busname;

  const data={
    Date,
    BusName

  }
  // alert(data.Date+" "+data.BusName)
  axios.post('http://127.0.0.1:8000/getdriversalary',data)
  .then((res)=>{
    
    this.setState({salaryinfo:res.data})
    this.setState({busname:'',date:''})
  
  })
    
  
  .catch((err)=>{console.log(err)})    

}





setsalary(Did,PayRate,PaySalary)
{
  const Driverid=Did;
const Rate=PayRate;
const Salary=PaySalary;

  const aid =localStorage.getItem('Login')
  if (aid!=='' && aid!==' ')
  {

    const Assignby=aid
  const data={
    Driverid,Rate,Salary,Assignby
  }

  // console.log(data)
axios.post('http://127.0.0.1:8000/setpayment',data)
.then((res)=>{ 

  // console.log(res.data)
  alert(res.data.message)

// change it
  const newvalue = this.state.salaryinfo.filter(item => item.Driverid !== Driverid);
  this.setState({ salaryinfo:newvalue });


})
.catch((err)=>{console.log(err)})


// check it
// const salaryinfo = this.state.salaryinfo.filter(item => item.uid !== Did );
// this.setState({ salaryinfo:salaryinfo });
  }

  else{

    window.location.reload(false)
  }
}


    render() {
       
        const {busdata}=this.state
        const {salaryinfo}=this.state
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
                    {/* </optgroup> */}
                   </select>
                    </fieldset>

                    <fieldset>
<input type="date"  name="date" className={Styles.selectt} value={this.state.date} onChange={e=>this.setdate(e)}/>

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
    <th>Driver Name</th>   
    <th>Date</th>
    <th>Rate(Rs.)</th>
    <th>Travel Time</th>
    <th>Salary(Rs.)</th>
    <th></th>
  </tr>
  {salaryinfo.length ? salaryinfo.map(post=> 
  <tr key={post.uid}>
    <td>{post.Name} ({post.Contact})</td>
    <td>{post.Date}</td>
    <td>{post.Rate}</td>
    <td>{post.Traveltime}</td>
    <td>{post.Salary}</td>
    <td><input type="button" name="Pay" value="Pay" id={table.tablebutton} onClick={e=>{this.setsalary(post.Driverid,post.Rate,post.Salary)}}/></td>
  </tr>

): null}
  
  
</table>



                <Footer/>
                
            </div>
        )
    }
}

export default paysalary
