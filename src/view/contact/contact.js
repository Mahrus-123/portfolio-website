import React,{useRef} from "react";
import pic from "../../Assets/mahrus.jpg"
import "./contact.css"
import { useNavigate } from "react-router-dom";
const Contact=()=>
{
  const navigate = useNavigate()
   const emailRef = useRef("")

   const sendData = async ()=>{

      const requestOption={
          method: 'POST',
          Accept:'application/json',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({"email":`${emailRef.current.value}`})
      }

      try{
        const response = await fetch("http://localhost:4000/email",requestOption)

      }catch(error){
        console.error(error)
      }
      
   }
  
  return(
     <>
      <div className="container">
      <img src={pic} onClick={()=>navigate("/home")} className="logoImage"/> 
      <h1 className="userName">Mahrus Iyoha</h1>
      </div>

      <div className="container2">

      <h1 onClick={()=>navigate("/work")}className="MenuItems">Work</h1>
      <h1 onClick={()=>navigate("/Project")}className="MenuItems">Projects</h1>
      <h1 onClick={()=>navigate("/article")}className="MenuItems">Articles</h1>
      <h1 onClick={()=>navigate("/Contact")} className="MenuItems">Contact</h1>

      
      </div>
      <h1>Contact Page</h1>
      <div className="new-container">
        <h3 >E-mail Address:</h3>
        <input  className="input" ref={emailRef}  />
       <input type="submit"  onClick={()=>sendData()} />

      
      </div>
      <div className="new-container2">
        <h3 >Phone Number:</h3>
        <input  className="input" ref={emailRef}  />
       <input type="submit"  onClick={()=>sendData()} />

      
      </div>
      

    </>
  )
}
export default Contact