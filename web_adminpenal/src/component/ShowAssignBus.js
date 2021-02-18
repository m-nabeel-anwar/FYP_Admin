import React, { Component } from 'react'
import  Styles from'./css/List.module.css'
import './css/script2';
import styl  from './css/Searchbox.module.css';
import loader from './css/loader.module.css';
import axios from 'axios'
import Layout from './Layout'
import Footer from './Footer'
class ShowAssignBus extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      postdata:[],
      message:{},
      searcherrormessage:"",
      search: "",
      isloading:false,
    }
    
  }

  componentDidMount()
  {
    axios.get('http://127.0.0.1:8000/getassignbus')
    .then(response=>{
      console.log(response)
      this.setState({ isloading:true,postdata: response.data });

    })
    .catch(err=>{
      console.log(err)
     })
  }



  searchchange(e)
  {
    var format = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
   
    if(format.test(e.target.value))
    {
  this.setState({searcherrormessage:"*Invalid Character Enterd"})
    }
    else
    {
      this.setState({
        search: e.target.value,searcherrormessage:""
      });
  
    }
    
     
  }








    render() {

      const {isloading,search}=this.state;
      const  postdata  = this.state.postdata.filter(item =>{return item.BusName.toLowerCase().indexOf(search.toLowerCase()) !== -1} )
      if(!isloading)
      {
       
       return (
        <div>
        <Layout/>
        
       <div className={loader.loader} style={{marginLeft:'700px',marginBottom:'200px',marginTop:'50px'}}>
         
       </div>
       <Footer/>
      </div>
       );
      }
      else
      {




        return (
          <div>
  <Layout/>

            <div className={Styles.booddy}>

{/* Search box */}
<div style={{marginBottom:'25px'}}>

<div className={styl.search} >
   <input type="text" placeholder="Type Here..."  name="search" value={this.state.search} onChange={this.searchchange.bind(this)} maxLength="20"/>
   <div className={styl['button-src']}>
       <button>   
       <i class="fa fa-search"></i>
</button>

   </div>
</div>
<h3 style={{color:'red',marginLeft:'400px',marginTop:'5px'}}>{this.state.searcherrormessage}</h3>
</div>



{postdata.length ? postdata.map(post=>
            <div className={Styles['user-profile']} style={{backgroundColor:'#97BC62FF',width:'550px',marginBottom:'35px'}} key={post.Driverid}>
<img className={Styles.avatar} src="./assets/img/bus.jpg" alt="Ash" />
  <div className={Styles.username} style={{color:"#fff"}}>{post.BusName} </div> 
{/*<div className={Styles.username}>No:klj2041</div>
<div className={Styles.username}>Status:Assign</div>  */}
 <div className={Styles.bio}>
Bus No:{post.NumberPlate}
<br/>
Status:{post.BusStatus}
  {/* <br/>
CNIC:
<br/>
 Contact: 
<br/>
Status: Assign/Unassign */}
</div>




<ul className={Styles.data} style={{marginTop:'35px' ,backgroundColor:'#2C5F2D'}}>
<li>
<span >{post.DriverName}</span>
</li>
<li>
<span >{post.DriverContact}</span>
</li>
{/* <li>
    <div style={{marginLeft:'200px'}}><span  style={{color:'#fff'}}>Delete</span></div>
</li> */}
</ul>
</div>
  ):<h1 style={{marginBottom:'80px'}}>No Match Found!</h1>}
            
        </div>
        <Footer/>
</div>
        )
}
    }
}

export default ShowAssignBus