import React from "react";
import Home from "./view/home/home";
import Work from "./view/work/work";
import Projects from "./view/Projects/projects";
import Article from "./view/Article/Article";
import Contact from "./view/contact/contact";
import {Routes,Route} from "react-router-dom"
const App=()=>{
  return(
    <Routes>
      <Route index path="*" element={<Home/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/project" element={<Projects/>}/>
      <Route path="/article" element={<Article/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}
export default App