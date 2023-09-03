import React from "react";
import pic from "../../Assets/mahrus.jpg"
import { useNavigate } from "react-router-dom";
import "./projects.css"
const Projects=()=>
{
    const navigate = useNavigate()
  return(
     <>
      <div className="container">
      <img src={pic} onClick={()=>navigate("/home")} className="logoImage"/> 
      <h1 className="userName">Mahrus Iyoha</h1>
      </div>

      <div className="container2">

      <h1  onClick={()=>navigate("/work")}className="MenuItems">Work</h1>
      <h1 onClick={()=>navigate("/project")} className="MenuItems">Projects</h1>
      <h1 onClick={()=>navigate("/article")}className="MenuItems">Articles</h1>
      <h1 onClick={()=>navigate("/contact")}className="MenuItems">Contact</h1>
      </div><div>
      <h1> Project  Page
      </h1> </div>  
      <div>
        <p> Some of my spare time tinkering.</p>
      </div>
      <div></div>
    
    </>
  )
}
export default Projects