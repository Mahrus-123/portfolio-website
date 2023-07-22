import React from "react";
import pic from "../../Assets/mahrus.jpg"
import { useNavigate } from "react-router-dom";
import "./home.css"
const Home=()=>
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
      <h1 onClick={()=>navigate("/project")} className="MenuItems">Projects</h1>
      <h1 onClick={()=>navigate("/article")} className="MenuItems">article</h1>
      <h1 onClick={()=>navigate("/contact")} className="MenuItems">contact</h1>
      </div>
      <div className="container3">
        <h1>Hi, I'm Mahrus.</h1>
        <p> I'm a web developer from Warri,
          Delta State. currently lead developer
          at a local agency. In my spare time I enjoy DIY, gaming and
          building my own projects.My preferred tools are PHP, Reacts
          and Vue.js.
          I am on GitHub, Threads and Instagram.
        </p>
        <h1 className="OneWord">Recent Articles</h1>
      </div>
      <div className="container4"></div>
      <div>
        <h1>Converting a React Inertia App from Mix to Vite</h1>
      </div>
      <div  onClick={()=>alert("Hello world")}  className="container5">
            <p className="btnText">React</p>
      </div>
      <div>
        <p className="DatenTime">02 september 2022 / 4 minute read</p>
        <p>
          I recently converted my inertia app from Larvarel Mix
          to using Vite. In this post I'll talk about how it went, as well
          as some of the gotchas.
        </p>
        <div onClick={()=>alert("Ok")}>
          <p className="Article"> Read Article</p>
        </div>
        <div className="line"></div>
        <div>
          <h1>Using Ziggy with React,Inertia(Vue) and Vite</h1>
        </div>
        <div  onClick={()=>alert("Hello world")}  className="larvarelbutton">
            <p className="btnText">React</p>
      </div>
      <div>
      <p className="DatenTime2">02 July 2022 / 2 minute read</p>
      <p>
        I recently converted one of my apps from React Mix (Webpack)
        to Vite.Unfortunately there was a big stumbling block when it 
        came to getting Ziggy working. In this post I will discuss how I found a solution.
      </p>
       <div onClick={()=>alert("Ok")}>
          <p className="Article2"> Read Article</p>
        </div>
        <div className="line2"></div>
        
        
      </div>
      <div>
        <h1>
          Multi-Image Uploader with React, JavaScript & Tailwind.
        </h1>
      </div>
      <div  onClick={()=>alert("Hello world")}  className="larvarelbutton2">
            <p className="btnText2">React</p>
      </div>
      <div>
      <p className="DatenTime3">02 May 2022 / 7 minute read</p>
      <p>A step-by-step guide on creating a multi-image Uploader
        using Laravel, JavaScript & Tailwind.
      </p>
      </div>
      <div onClick={()=>alert("Ok")}>
          <p className="Article3"> Read Article</p>
        </div>
        <div className="line3"></div>
        <div>
          <h5 className="year">2023 Mahrus </h5>
          <h5 className="year"> Built with React</h5>
        </div>

      </div>
    </>
  )
}
export default Home 