
import React from 'react'
import {Redirect} from  'react-router-dom'

const AdminListoth=()=>{

    const Type=localStorage.getItem('Type')
    if(Type=="Main")
    {
        return <Redirect to='/AdminList'/>
    }
    else
    {
        alert("Permission Denied")
        return <Redirect to='/Home'/>
    }
    
}
export default AdminListoth;