import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import Styles from "./css/List.module.css";
import "./css/script2";
import { Link } from "react-router-dom";
import styl  from './css/Searchbox.module.css';
import loader from './css/loader.module.css';
import axios from "axios";
import Layout from './Layout'
import Footer from './Footer'
class UpdateDriverList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postdata: [],
      searcherrormessage:"",
      search: "",
      isloading:false,
    };
  }




  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/getalldriver")
      .then((response) => {
        console.log(response);
        this.setState({ isloading:true,postdata: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
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





        {postdata.length
          ? postdata.map((post) => (
              <div className={Styles["user-profile"]} key={post.uid} style={{marginBottom:'65px'}}>
                <img
                  className={Styles.avatar}
                  src="./assets/img/download (2).png"
                  alt="Ash"
                />
                <div className={Styles.username}>{post.Name}</div>
                <div className={Styles.bio}>
                  Email:{post.Email}
                  <br />
                  CNIC:{post.Cnic}
                  <br />
                  Contact:{post.Contact}
                  <br />
                  Status: {post.Status}
                </div>

                <div className={Styles.description}>Addres:{post.Address}</div>
                <ul className={Styles.data}>
                  <li>
                    <span>-</span>
                  </li>
                  <li>
                    <span>-</span>
                  </li>
                  <li>
                    <Link to={"/UpdateDriver/"+post.uid}>
                      <div style={{ marginLeft: "200px" }}>
                        <span style={{ color: "black" }}>Update</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            ))
          : <h1 style={{marginBottom:'80px'}}>No Match Found!</h1>}
      </div>
      <Footer/>
</div>
    );
          }
  }
}

export default UpdateDriverList;
