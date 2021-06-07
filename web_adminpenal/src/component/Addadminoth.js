import React from 'react'
import {Redirect} from  'react-router-dom'

const Addadminoth=()=>{

    const Type=localStorage.getItem('Type')
    if(Type=="Main")
    {
        return <Redirect to='/AddAdmin'/>
    }
    else
    {
        alert("Permission Denied")
        return <Redirect to='/Home'/>
    }
    
}
export default Addadminoth;