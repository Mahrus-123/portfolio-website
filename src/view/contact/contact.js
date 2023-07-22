import React from "react";
import pic from "../../Assets/mahrus.jpg"
import "./contact.css"
import { useNavigate } from "react-router-dom";
const Contact=()=>
{
  const navigate = useNavigate()
  return(
     <>
      <div className="container">
      <img src={pic} onClick={()=>navigate("/home")} className="logoImage"/> 
      <h1 className="userName">Mahrus</h1>
      </div>

      <div className="container2">

      <h1 onClick={()=>navigate("/work")}className="MenuItems">Work</h1>
      <h1 onClick={()=>navigate("/Project")}className="MenuItems">Projects</h1>
      <h1 onClick={()=>navigate("/article")}className="MenuItems">Articles</h1>
      <h1 onClick={()=>navigate("/Contact")} className="MenuItems">Contact</h1>

      
      </div>
      <h1>Contact Page</h1>

    </>
  )
}
export default Contact