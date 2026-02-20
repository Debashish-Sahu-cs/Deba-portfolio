import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminGuard({children}) {
    const navigateTo = useNavigate();
    useEffect(() =>{
      if(!sessionStorage.getItem("user_auth_token") || sessionStorage.getItem("user_auth_token") === "undefined" || 
      sessionStorage.getItem("user_auth_token") === null){
        navigateTo("/admin/adminlogin");
      }
    },[]);
  return children ;
}

export default AdminGuard 
