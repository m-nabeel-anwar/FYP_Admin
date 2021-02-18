import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
import Login from './Login';
// import Layout from './Layout';
// import Footer from './Footer';
import Home from "./Home";
import BusManager from './BusManager';
import DriverManager from './DriverManager';
import RouteManager from './RouteManager';
import SalaryManager from './SalaryManager';
import UserInfo from './UserInfo';
import Feedback from './FeedBack';
import ContactUs from './ContactUs';
import PaymentInfo from './PaymentInfo';




// driver manager area
import AddDriver from './AddDriver';
import DeleteDriver from './DeleteDriver';
import UpdateDriverList from './UpdateDriverList';
import UpdateDriver from './UpdateDriver';
import SHowDriver from './ShowDriver';
import SHowAssignDriver from './ShowAssignDriver';
import ShowUnassignDriver from './ShowUnassignDriver';

// bus manager area
import AddBus from './AddBus';
import DeleteBus from './DeleteBus';
import UpdateBusList from './UpdateBusList';
import UpdateBus from './UpdateBus';
import ShowBus from './ShowBus';
import ShowAssignBus from './ShowAssignBus';
import ShowUnassignBus from './ShowUnassignBus';

import { useHistory } from "react-router-dom";



// asign un assign driver dekhna hoga haamay takay isue na ho yani driver deleete krany ya bus delete krnay pay issue na ho


// route manager
import AddRoute from './AddRoute';
import UpdateRoute from './UpdateRoute';
import DeleteRoute from './DeleteRoute';
import ShowRoute from './ShowRoute';
import Addfare from './Addfare';
import SHowRouteName from './SHowRouteName';

//assign bus manager
import AssignBus from './AssignBus';
import AddAssignBus from './AddAssignBus';
import UpdateAssignBusList from './UpdateAssignBusList';
import UpdateAssignBus from './UpdateAssignBus';
import DeleteAssignBusList from './DeleteAssignBusList';
import ErrorPage from './ErrorPage';


import AddAdmin from './AddAdmin';
import AdminList from './AdminList';
import ForgetPassword from './ForgetPassword';

import Logout from './Logout';

// for protect our route
import Protected from './Protected'


 class React_Routes extends Component {
    render() {
        return (
           
   <Router>
     
  
   
         <Switch>
        
         <Route path="/" exact component={Login}/>
         <Route path="/ForgetPassword" component={ForgetPassword}/>

         {/* <Route path="/Home"  component={Home}/>  */}
         <Protected path="/Home"  component={Home}/> 

         <Route path="/Login"  component={Login}/> 

         <Route path="/Logout"  component={Logout}/> 

         {/* <Route path="/Logout">
             <Logout/>
         </Route> */}
{/*       
      
        
   
       {/* <Route path="/login" component={Login}/> */}
       {/* <Route path="/" exact component={UpdateDriverList}/> */}
   
       <Protected path="/DriverManager" component={DriverManager}/>
   
       <Protected path="/BusManager" component={BusManager}/>
   
       <Protected path="/RouteManager" component={RouteManager}/>
   
       <Protected path="/UserInfo" component={UserInfo}/>
   
       <Protected path="/SalaryManager" component={SalaryManager}/>
   
       <Protected path="/AssignBus"  component={AssignBus}/>
   
       <Protected path="/FeedBack" component={Feedback}/>
   
       <Protected path="/PaymentInfo" component={PaymentInfo}/>
   
       <Protected path="/ContactUs" component={ContactUs}/>
   
   
   
       {/* driver area */}
       <Protected path="/AddDriver"  component={AddDriver}/>
       <Protected path="/DeleteDriver"  component={DeleteDriver}/>
       <Protected path="/UpdateDriverList"  component={UpdateDriverList}/>
       <Protected path="/UpdateDriver/:uid"  component={UpdateDriver}/>
       <Protected path="/ShowDriver"  component={SHowDriver}/>
       <Protected path="/ShowAssignDriver"  component={SHowAssignDriver}/>
       <Protected path="/ShowUnassignDriver"  component={ShowUnassignDriver}/>
   
       {/* Bus area */}
       <Protected path="/AddBus"  component={AddBus}/>
       <Protected path="/DeleteBus"  component={DeleteBus}/>
       <Protected path="/UpdateBusList"  component={UpdateBusList}/> 

       {/* <Route path="/UpdateBus/:id"  component={UpdateBus}/> */}
       <Protected path="/UpdateBus/:id"  component={UpdateBus}/>

       <Protected path="/ShowBus"  component={ShowBus}/>
       <Protected path="/ShowAssignBus" component={ShowAssignBus}/>
       <Protected path="/ShowUnassignBus" component={ShowUnassignBus}/>
   
       {/* route area*/}
       <Protected path="/AddRoute"  component={AddRoute}/>
       <Protected path="/UpateRoute"  component={UpdateRoute}/>
       <Protected path="/DeleteRoute"  component={DeleteRoute}/> {/*think delete route ralhay ya ni*/}
       <Protected path="/ShowRoute"  component={ShowRoute}/>
       <Protected path="/ShowRouteName/:name" component={SHowRouteName}/>
       <Protected path="/AddFare" component={Addfare}/>
   
   
   
       {/*assignbus area*/}
       <Protected path="/AssignBus"  component={AssignBus}/>
       <Protected path="/AddAssignBus"  component={AddAssignBus}/>
       <Protected path="/UpdateAssignBusList"  component={UpdateAssignBusList}/>
       <Protected path="/UpdateAssignBus/:id"  component={UpdateAssignBus}/>
       <Protected path="/DeleteAssignBusList"  component={DeleteAssignBusList}/>
       
       
       <Protected path="/AddAdmin" component={AddAdmin}/>
       <Protected path="/AdminList" component={AdminList}/>
{/*2nd time  */}
       {/* <Route path="/Login" exact component={Login}/>  */}
       
       <Route   component={ErrorPage}/> 
       </Switch>
      
   
          
       
   
    </Router>
        )
    }
}

export default React_Routes
