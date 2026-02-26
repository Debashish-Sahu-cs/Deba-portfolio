import React,{ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminGuard = React.memo(({children}) =>{
    const navigateTo = useNavigate();
    useEffect(() =>{
      if(!sessionStorage.getItem("user_auth_token") || sessionStorage.getItem("user_auth_token") === "undefined" || 
      sessionStorage.getItem("user_auth_token") === null){
        navigateTo("/admin/adminlogin");
      }
    },[]);
  return children ;
});

export default AdminGuard 
