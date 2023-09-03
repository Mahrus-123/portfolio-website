import React from "react";
import pic from "../../Assets/mahrus.jpg"
import "./work.css"
import { useNavigate } from "react-router-dom";
const Work=()=>
{
  const navigate = useNavigate()
  return(
     <>
      <div className="container">
      <img src={pic} onClick={()=>navigate("/home")} className="logoImage"/> 
      <h1 className="userName">Mahrus Iyoha</h1>
      </div>

      <div className="container2">

      <h1 onClick={()=>navigate("/work")} className="MenuItems">Work</h1>
      <h1 onClick={()=>navigate("/project")}className="MenuItems">Projects</h1>
      <h1 onClick={()=>navigate("/article")}className="MenuItems">Articles</h1>
      <h1 onClick={()=>navigate("/contact")}className="MenuItems">Contact</h1>
      </div>
      <div>
      <p> <h1 className="work" >Work Page</h1>
      </p><div>
      <p className="write-up">
        This is basicaly what I do as regards my programming.
        I build business websites, mobile as well as web apps and I also
        build broadcast channels and portfolio sites for new businesses.
      </p></div>
      <div>
        <h1>
          Start-Up's
        </h1>
        <p className="write-up2">
          This are the projects I have been working on and I have made a 
          significant amount of progress.
          I have alot of excellent reviews to back up my good work.  

        </p>
        <h1> Business websites</h1>
        <p className="write-up3">I have built alot of websites for 
        business owners which have significantly boosted their profits and 
        greatly increased their audience.</p>
        <h1>Blogs</h1>
        <p className="write-up4"> I have also made blogs which are 
        spaces where individuals share news and helpful insights on happenings.</p>
        <h1></h1>
      </div>
      <div>
        
      </div>
      </div>

    </>
  )
}
export default Work