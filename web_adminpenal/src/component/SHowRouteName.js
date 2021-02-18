import React, { Component } from 'react'
import  Styles from'./css/List.module.css'
import './css/script2';
import axios from 'axios'
import styl  from './css/Searchbox.module.css';
import loader from './css/loader.module.css';
import { Link } from 'react-router-dom';
import pic from  './img/pointer.jpg'
import Layout from './Layout'
import Footer from './Footer'
class SHowRouteName extends Component {
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
      axios.get('http://127.0.0.1:8000/showbusroute?Name='+ atob(this.props.match.params.name))
      .then(response=>{
        console.log(response)
        this.setState({ isloading:true,postdata: response.data });
 
      })
      .catch(err=>{
        console.log(err)
       })
    }

    render() {


        const {isloading,search}=this.state;
        // const  postdata  = this.state.postdata.filter(item =>{return item.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1} )
        const {postdata}=this.state
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

              {postdata.length ? postdata.map(post=>

            <div className={Styles['user-profile']} style={{backgroundColor:'#2C3E50',width:'520px',height:'100px', marginBottom:'15px'}} key={post.uid}>
<img className={Styles.avatar} src={pic} alt="Ash" />
              <div className={Styles.username} style={{color:"#fff",marginLeft:'100px'}}>Route<p style={{fontSize:'12px'}}>{post.Name}</p></div> 




              


 {/* <div className={Styles.bio}>
Bus No:{post.NumberPlate}
<br/>
Status:{post.Status}

 

</div> */}

{/* <button style={{marginLeft:'360px',marginTop:'-5px',height:'43px',width:'150px'}}>Show Route</button> */}


</div>
):<h1 style={{marginBottom:'80px'}}>No Match Found!</h1>}
            
        </div>
        <Footer/>
</div>
        )
    }
}
}

export default SHowRouteName
