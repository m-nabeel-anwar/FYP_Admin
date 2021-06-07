import React, { Component } from 'react'
import Styles from './css/overall.module.css';
// auto complete link npm install react-places-autocomplete 
import PlacesAutocomplete ,{geocodeByAddress,getLatLng} from 'react-places-autocomplete';
// import google from 'react-places-autocomplete';
import axios from 'axios'
//import { null } from 'mathjs';

import Layout from './Layout'
import Footer from './Footer'

//npm install haversine for formula
 class AddRoute extends Component {

  constructor(props) {
    super(props);
    this.state = { 
    address: "",
    Lat1:null,
    Lng1:null,

    address2:"",
    Lat2:null,
    Lng2:null,

    distance:null,
    busname:"",
    busdata:[],
    messagge:{},
  
  };
  }
 
  handleChange = address => {
    this.setState({ address:address });
  };
 
  handleSelect = address => {
    this.setState({ address:address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      // .then(({lat,Lng}) => console.log('Success', {lat,Lng}))
      .then(({lat,lng}) => {this.setState({Lat1:lat,Lng1:lng})})     
      .catch(error => {console.error('Error', error)});
      // console.log(this.state.Lat1,this.state.Lng1)
  };


// for 2nd drop down
  handleChange2 = address => {
    this.setState({ address2:address });
  };
 
  handleSelect2 = address => {
    this.setState({ address2:address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      // .then(({lat,Lng}) => console.log('Success', {lat,Lng}))
      .then(({lat,lng}) => {this.setState({Lat2:lat,Lng2:lng})})
      .catch(error => {console.error('Error', error)});
      // console.log(this.state.Lat2,this.state.Lng2)
  };




  componentDidMount()
  {
    axios.get('http://127.0.0.1:8000/distinctunassignbus')
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
// console.log(e.target.value)
};
  
submitdata(e)
{
e.preventDefault()

// havesine
const haversine = require('haversine')

const start = {
  latitude: this.state.Lat1,
  longitude: this.state.Lng1
}

const end = {
  latitude: this.state.Lat2,
  longitude: this.state.Lng2,
}



if(start.latitude!==end.latitude && start.latitude!==null && end.latitude!==null && this.state.busname!=="" )
{


  const To=this.state.address;
  const From=this.state.address2;
  const Lat1=this.state.Lat1;
  const Lng1=this.state.Lng1;
  const Lat2=this.state.Lat2;
  const Lng2=this.state.Lng2
  const Distance=haversine(start, end, {unit: 'km'})+0.5;
  const Name= this.state.busname;

  const data={

    To,
    From,
    Lat1,
    Lng1,
    Lat2,
    Lng2,
    Distance,
    Name,
  }
axios.post('http://127.0.0.1:8000/addroute',data)
.then(response=>{
  // console.log(response.data)
  this.setState({messagge:response.data})
  alert(this.state.messagge.message)
  this.setState({Lat1:null,Lng1:null,Lat2:null,Lng2:null,address:"",address2:"",busname:"",distance:null})
})
.catch(err=>{console.log(err)
})

 
}
else
{
  alert("Invalid or empty selection")
  this.setState({Lat1:null,Lng1:null,Lat2:null,Lng2:null,address:"",address2:"",busname:"",distance:null})
 

}





}



    render() {
      const{busdata}=this.state
      // const searchOptions = {
      //   location: new google.maps.LatLng(24.8607,67.0011),
      //   radius: 2000,
      //   // types: ['address']
      // }
      const searchOptions = {
        componentRestrictions: { country: ['pk'] },
       
        // types: ['city']
      }
      
        return (

          <div>
  <Layout/>

            <div className={Styles.bodyy}>

          
            <div className={Styles.container} >  

            <form id={Styles.contact} action="" method="post" onSubmit={this.submitdata.bind(this)}> 

              <h3>Add Route</h3>
              <h4></h4>
              <fieldset>


                {/* <input placeholder="To" type="text" tabindex="1" required autofocus/> */}
                
                <PlacesAutocomplete
                  value={this.state.address}
                  onChange={this.handleChange}
                  onSelect={this.handleSelect}
                  searchOptions={searchOptions}

                >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Starting BusStop...',
                className:'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div className={Styles['input-suggestion']}
                    {...getSuggestionItemProps(suggestion, {
                      
                      style,
                    })}
                  >
                     <i class="material-icons">location_on</i>
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>








              </fieldset>

{/* 2nd drop down */}
              <fieldset>
                {/* <input placeholder="From" type="email" tabindex="2" required/> */}

                <PlacesAutocomplete
                  value={this.state.address2}
                  onChange={this.handleChange2}
                  onSelect={this.handleSelect2}
                  searchOptions={searchOptions}
                >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Ending BusStop...',
                className:'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div className={Styles['input-suggestion']}
                    {...getSuggestionItemProps(suggestion, {
                      
                      style,
                    })}
                  >
                     <i class="material-icons">location_on</i>
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>





              </fieldset>
              <fieldset>
 
             <select  className={Styles.selectt} placeholder="BusName" onChange={e=>this.setbusname(e)} value={this.state.busname} require>
             <option >Select Bus</option>
             {/* <optgroup label="Select bus"> */}
             {busdata.length ? busdata.map(post=>(
              
                    <option key={post.uid} value={post.Name}>{post.Name}</option>
                        
              )) :null}
              {/* </optgroup> */}
             </select>
             
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

export default AddRoute
