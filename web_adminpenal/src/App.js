//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
// import Login from './component/Login';
// import Layout from './component/Layout';
// import Footer from './component/Footer';
// import Home from "./component/Home";
// import BusManager from './component/BusManager';
// import DriverManager from './component/DriverManager';
// import RouteManager from './component/RouteManager';
// import SalaryManager from './component/SalaryManager';
// import UserInfo from './component/UserInfo';
// import Feedback from './component/FeedBack';
// import ContactUs from './component/ContactUs';
// import PaymentInfo from './component/PaymentInfo';




// ////driver manager area
// import AddDriver from './component/AddDriver';
// import DeleteDriver from './component/DeleteDriver';
// import UpdateDriverList from './component/UpdateDriverList';
// import UpdateDriver from './component/UpdateDriver';
// import SHowDriver from './component/ShowDriver';
// import SHowAssignDriver from './component/ShowAssignDriver';
// import ShowUnassignDriver from './component/ShowUnassignDriver';

// //bus manager area
// import AddBus from './component/AddBus';
// import DeleteBus from './component/DeleteBus';
// import UpdateBusList from './component/UpdateBusList';
// import UpdateBus from './component/UpdateBus';
// import ShowBus from './component/ShowBus';
// import ShowAssignBus from './component/ShowAssignBus';
// import ShowUnassignBus from './component/ShowUnassignBus';
// import ForgetPassword from './component/ForgetPassword';

// import { useHistory } from "react-router-dom";



// //asign un assign driver dekhna hoga haamay takay isue na ho yani driver deleete krany ya bus delete krnay pay issue na ho


// //route manager
// import AddRoute from './component/AddRoute';
// import UpdateRoute from './component/UpdateRoute';
// import DeleteRoute from './component/DeleteRoute';
// import ShowRoute from './component/ShowRoute';
// import Addfare from './component/Addfare';
// import SHowRouteName from './component/SHowRouteName';

// //assign bus manager
// import AssignBus from './component/AssignBus';
// import AddAssignBus from './component/AddAssignBus';
// import UpdateAssignBusList from './component/UpdateAssignBusList';
// import UpdateAssignBus from './component/UpdateAssignBus';
// import DeleteAssignBusList from './component/DeleteAssignBusList';
// import ErrorPage from './component/ErrorPage';


// import AddAdmin from './component/AddAdmin';
// import AdminList from './component/AdminList';

import React from 'react';
import React_Routes from './component/React_Routes';







// function App() {

  class App extends React.Component {
    constructor(props) {
      super(props);
    }
render(){
  // if(localStorage.getItem("appid")===0||localStorage.getItem("appid")===null){
  //    return <Login/>
 // }

  return (

//     <Router>
  
//     {/* <Route path="/" exact component={Home}/>
//     <Route path="/DriverManager" component={DriverManager}/> */}


//     </Router>

  
  
   
//    <Router>
     


//       <Switch>
   
    

//     <Route path="/" component={Login}/>
//     <Route path="/ForgetPassword" component={ForgetPassword}/>
// <Route path="/Home"  component={Home}/>

//     <Route path="/DriverManager" component={DriverManager}/>

//     <Route path="/BusManager" component={BusManager}/>

//     <Route path="/RouteManager" component={RouteManager}/>

//     <Route path="/UserInfo" component={UserInfo}/>

//     <Route path="/SalaryManager" component={SalaryManager}/>

//     <Route path="/AssignBus"  component={AssignBus}/>

//     <Route path="/FeedBack" component={Feedback}/>

//     <Route path="/PaymentInfo" component={PaymentInfo}/>

//     <Route path="/ContactUs" component={ContactUs}/>



//     {/* driver area */}
//     <Route path="/AddDriver"  component={AddDriver}/>
//     <Route path="/DeleteDriver"  component={DeleteDriver}/>
//     <Route path="/UpdateDriverList"  component={UpdateDriverList}/>
//     <Route path="/UpdateDriver/:uid"  component={UpdateDriver}/>
//     <Route path="/ShowDriver"  component={SHowDriver}/>
//     <Route path="/ShowAssignDriver"  component={SHowAssignDriver}/>
//     <Route path="/ShowUnassignDriver"  component={ShowUnassignDriver}/>

//     {/* Bus area */}
//     <Route path="/AddBus"  component={AddBus}/>
//     <Route path="/DeleteBus"  component={DeleteBus}/>
//     <Route path="/UpdateBusList"  component={UpdateBusList}/> 
//     <Route path="/UpdateBus/:id"  component={UpdateBus}/>
//     <Route path="/ShowBus"  component={ShowBus}/>
//     <Route path="/ShowAssignBus" component={ShowAssignBus}/>
//     <Route path="/ShowUnassignBus" component={ShowUnassignBus}/>

//     {/* route area*/}
//     <Route path="/AddRoute"  component={AddRoute}/>
//     <Route path="/UpateRoute"  component={UpdateRoute}/>
//     <Route path="/DeleteRoute"  component={DeleteRoute}/> {/*think delete route ralhay ya ni*/}
//     <Route path="/ShowRoute"  component={ShowRoute}/>
//     <Route path="/ShowRouteName/:name" component={SHowRouteName}/>
//     <Route path="/AddFare" component={Addfare}/>



//     {/*assignbus area*/}
//     <Route path="/AssignBus"  component={AssignBus}/>
//     <Route path="/AddAssignBus"  component={AddAssignBus}/>
//     <Route path="/UpdateAssignBusList"  component={UpdateAssignBusList}/>
//     <Route path="/UpdateAssignBus/:id"  component={UpdateAssignBus}/>
//     <Route path="/DeleteAssignBusList"  component={DeleteAssignBusList}/>

    
    
//     <Route path="/AddAdmin" component={AddAdmin}/>
//     <Route path="/AdminList" component={AdminList}/>
    
   
//     </Switch>


//        {/* <Route   component={ErrorPage}/>  */}
    

//  </Router>
  <React_Routes/>
    
  );
}
}

export default App;
