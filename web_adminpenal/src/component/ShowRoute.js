import React, { Component } from 'react'
import  Styles from'./css/List.module.css'
import './css/script2';
import axios from 'axios'
import styl  from './css/Searchbox.module.css';
import loader from './css/loader.module.css';
import { Link } from 'react-router-dom';
import Layout from './Layout'
import Footer from './Footer'
 class ShowRoute extends Component {
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
      axios.get('http://127.0.0.1:8000/showbusnamelist')
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
      var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
     
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
      const  postdata  = this.state.postdata.filter(item =>{return item.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1} )
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
   <input type="text" placeholder="Type Here..."  name="search" value={this.state.search} onChange={this.searchchange.bind(this)} maxLength="20" />
   <div className={styl['button-src']}>
       <button>   
       <i class="fa fa-search"></i>
</button>

   </div>
</div>
<h5 style={{color:'red',marginLeft:'400px',marginTop:'5px'}}>{this.state.searcherrormessage}</h5>
</div>





              {postdata.length ? postdata.map(post=>

            <div className={Styles['user-profile']} style={{backgroundColor:'#2C3E50',width:'520px',height:'100px', marginBottom:'15px'}} key={post.uid}>
<img className={Styles.avatar} src="./assets/img/1.jpg" alt="Ash" />
  <div className={Styles.username} style={{color:"#fff",marginLeft:'100px'}}>Name:{post.Name}<p style={{fontSize:'12px'}}>Click on show route and see the route of this bus</p></div> 

 {/* <div className={Styles.bio}>
Bus No:{post.NumberPlate}
<br/>
Status:{post.Status}

 

</div> */}
<Link to={"/ShowRouteName/"+ btoa(post.Name)}>
<button style={{marginLeft:'360px',marginTop:'-20px',height:'40px',width:'150px'}}>Show Route</button>
</Link>

</div>
):<h1 style={{marginBottom:'80px'}}>No Match Found!</h1>}
            
        </div>

        <Footer/>
</div>
        )
}
    }
}

export default ShowRoute
