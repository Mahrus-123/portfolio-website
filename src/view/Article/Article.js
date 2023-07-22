import React from "react";
import pic from "../../Assets/mahrus.jpg"
import "./article.css"
import { useNavigate } from "react-router-dom";
const Article=()=>
{
  const navigate = useNavigate()
  return(
     <>
      <div className="container">
      <img src={pic} onClick={()=>navigate("/home")} className="logoImage"/> 
      <h1 className="userName">Mahrus</h1>
      </div>

      <div className="container2">

      <h1 onClick={()=>navigate("/work")} className="MenuItems">Work</h1>
      <h1 onClick={()=>navigate("/project")} className="MenuItems">Projects</h1>
      <h1 onClick={()=>navigate("/article")} className="MenuItems">Articles</h1>
      <h1 onClick={()=>navigate("/contact")}className="MenuItems">Contact</h1>

      
      </div>
      <h1>Article Page</h1>

    </>
  )
}
export default Article