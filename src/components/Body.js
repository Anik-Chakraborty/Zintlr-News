import React from 'react'
import Headline from './Headline'
import axios from "axios";
import {motion} from 'framer-motion'
import {useRef , useEffect , useState} from "react"
import "./components_style/Body.css"
import Top_Stories from './Top_Stories';
function Body() {
  const [data ,setData] = useState([]);

  useEffect(()=>{

      axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=273a912f0e8348269a89b492d34b0c01")
      .then((response)=>{
          setData(response.data.articles)
      })


  },[])
  return (
    <div className="body_div">
        <Headline/>
        <h2 className='Top_stories'>Top Stories for you</h2>        
        <Top_Stories/>
        <div className='Explore_button'>
          <img src="./icons/Explore.png" draggable="false"/>
          <p className='Explore_text'>Explore</p>
        </div>
    </div>
  )
}

export default Body