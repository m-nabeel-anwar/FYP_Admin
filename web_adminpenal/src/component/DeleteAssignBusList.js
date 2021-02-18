import React, { Component } from 'react'
import  Styles from'./css/List.module.css'
import './css/script2';
import axios from 'axios'
import styl  from './css/Searchbox.module.css';
import loader from './css/loader.module.css';
import Layout from './Layout'
import Footer from './Footer'
// import { null } from 'mathjs';
 class DeleteAssignBusList extends Component {
   constructor()
   {
     super()
     this.state={
       postdata:[],
       uid:"",
       BusName:"",
       NumberPlate:"",
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
     var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/;
     // console.log(format.test(e.target.value))
     if(format.test(e.target.value))
     {
   this.setState({searcherrormessage:"*Invalid Character Enterd"})
     }
     else
     {
       this.setState({
         search: e.target.value,searcherrormessage:" "
       });
       // console.log(this.state.search)
     }
     
       // alert(this.state.search)
   }








   deletedriver(id,busname,numberplate,e)
   {
     // e.preventDefault();
   
      const uid=id;
      const BusName=busname;
      const NumberPlate=numberplate;
   
     const data={
       uid,
       BusName,
       NumberPlate 
     };
     
     axios
         .delete("http://127.0.0.1:8000/deleteassignbus", {data})
         .then((response) => {
           console.log(response);
          this.setState({message:response.data})
          alert(this.state.message.message)
         })
         .catch((err) => {
           console.log(err);
         });
   // alert(this.state.message.message)
     //  alert(this.state.message)
       const postsdata = this.state.postdata.filter(item => item.Driverid !== id);
       this.setState({ postdata:postsdata });
   
   }
   




    render() {
      const {isloading,search}=this.state;
      const  postdata  = this.state.postdata.filter(item =>{return item.DriverName.toLowerCase().indexOf(search.toLowerCase()) !== -1} )
  
  
  
  if(!isloading)
  {
    return (
      <div>
  <Layout/>

    <div className={loader.loader} style={{marginLeft:'700px',marginBottom:'200px',marginTop:'50px'}}>
     
    </div>
    <Footer/>
</div>
    
    )
  }
  else{
  
  
        return (

          <div>
  <Layout/>

            <div className={Styles.booddy}>


{/* search bar */}
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
            <div className={Styles['user-profile']} style={{marginBottom:'35px'}} key={post.uid}>
<img className={Styles.avatar} src="./assets/img/download (2).png" alt="Ash" />
                <div className={Styles.username}>{post.DriverName}</div>
<div className={Styles.bio}>
 Email:{post.Email}
  {/* <br/>
CNIC:{post.Cnic} */}
<br/>
 Contact: {post.DriverContact}
<br/>
Status:  {post.DriverStatus}
</div>



<div className={Styles.description}>
  Addres:{post.Address}
</div>
<ul className={Styles.data}>
<li>
                <span >{post.BusName}</span>
</li>
<li>
                <span >{post.NumberPlate}</span>
</li>
<li>
    <div style={{marginLeft:'200px'}}><span  style={{color:'black'}}><a  onClick={(e)=>this.deletedriver(post.Driverid,post.BusName,post.NumberPlate,e)}>Delete</a></span></div>
</li>
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

export default DeleteAssignBusList
