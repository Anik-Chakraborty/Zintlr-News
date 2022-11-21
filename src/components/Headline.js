import React from 'react'
import axios from "axios";
import {motion} from 'framer-motion'
import {useRef , useEffect , useState} from "react"
import "./components_style/Headline_style.css"


function Headline() {

    const [data ,setData] = useState([]);
    

    const[width ,setWidth] = useState(0);
    const carousel = useRef();

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=273a912f0e8348269a89b492d34b0c01")
        .then((response)=>{
            setData(response.data.articles)
        })


    },[])


  return (
    <div className='Headline' >
        <motion.div ref={carousel} className = "carousel" >
            <motion.div drag= "x" dragConstraints = {{right: 0 , left: -(width) }} className = "inner-carousel">
                { 
                
                data.map((value)=>{
                    let headline_text = value.title || '';
                    let headline_des = value.description || '';

                    // if(!headline_text.length !=0 && headline_des.length != 0){
                    //     headline_text = headline_text.substr(0, 90);
                    //     headline_text = headline_text.concat("...");
                    //     headline_des = headline_des.substr(0, 30);
                    //     headline_des = headline_des.concat("...");
                    // }
                    return(
                        <motion.div className="item" key ={value}>
                            <img src={value.urlToImage} className="headline_img"/>
                            
                            <div className='category'>Category</div>
                            <div className='gradient'></div>
                            <div className="details">
                                <p className='headline_time'>{value.publishedAt}</p>
                                <p className='headline_title'>{headline_text.substr(0, 90)}</p>
                                <p className='headline_description'>{headline_des.substr(0, 30)}</p>
                                <p className='headline_source_name'>{value.source.name}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Headline