import { useState } from 'react'
import "./adminlogin.css";
import { useNavigate } from 'react-router-dom';
function AdminLogin() {
    const [ adminDetails, setAdminDetails ] = useState({user_name : "", user_password : ""});
    
    const navigateTo = useNavigate();

    const apiLogin = "http://localhost:3434/login";
    const apiRegistration = "http://localhost:3434/register";
    const handleLogin = () =>{
        if(adminDetails.user_name.trim() === "" || adminDetails.user_password.trim() === "") return;

        const fetchUSer = async () =>{
            const response = await fetch( apiLogin , {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    user_name:adminDetails.user_name,
                    user_password:adminDetails.user_password
                })
            });

            const data = await response.json();
            sessionStorage["user_auth_token"] = data.user_auth_token;
            if(data.user_auth_token !== "undefined" || data.user_auth_token !== null){
                navigateTo("/admin/choosecrud");
            }
        }
        fetchUSer();
    }

    const handleRegistration = () =>{
        if(adminDetails.user_name.trim() === "" || adminDetails.user_password.trim() === "") return;

        const fetchUSer = async () =>{
            const response = await fetch( apiRegistration , {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    user_name:adminDetails.user_name,
                    user_password:adminDetails.user_password
                })
            });

            const data = await response.json();
            sessionStorage["user_auth_token"] = data.user_auth_token;
            console.log(data);
        }
        fetchUSer();
    }
  return (
    <main className="admin-login-section">
        <section className="admin-login-inner">
            <div className="form-container">
                <form className="admin-login-form" >
                    <div className="form-inner">
                        <div className="fields">
                            <label htmlFor="admin_username">Username</label>
                            <input type="text" id="username" name="admin_username" aria-label="Admin User Name" placeholder="Admin User Name " 
                            value={adminDetails.user_name || ""}
                            onChange={(event) => setAdminDetails({user_name : event.target.value, user_password : adminDetails.user_password }) } />
                        </div>
                        <div className="fields">
                            <label htmlFor="admin_password">Password</label>
                            <input type="password" id="password" name="admin_password" aria-label="Admin password" placeholder="Admin Password" 
                            value={adminDetails.user_password || ""}
                            onChange={(event) => setAdminDetails({ user_name : adminDetails.user_name , user_password : event.target.value}) } />
                        </div>
                        <div className="login-btn-container">
                            <button type="button" className="login-btn" aria-label="Login" onClick={() => handleLogin()} >Login as admin</button>
                            <button type="button" className="login-btn" aria-label="Registration" onClick={() => handleRegistration()} >Register admin</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </main>
  )
}

export default AdminLogin
