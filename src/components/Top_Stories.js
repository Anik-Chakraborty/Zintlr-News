import React from 'react'
import axios from "axios";
import {useRef , useEffect , useState} from "react"
import "./components_style/Top_Stories.css"

function Top_Stories() {
    const [top_data ,setTopData] = useState([]);
    

    useEffect(()=>{


        axios.get("https://newsapi.org/v2/everything?q=apple&from=2022-11-20&to=2022-11-20&sortBy=popularity&apiKey=273a912f0e8348269a89b492d34b0c01")
        .then((response)=>{
            setTopData(response.data.articles)
        })


    },[])


  return (
    <div className='Top_Stories' >
        
                { 
                top_data.map((valueTop)=>{
                    let headline_text = valueTop.title || '';
                    let headline_des = valueTop.description || '';

                    console.log(headline_text.length);

                    // if(headline_text.length >90 && headline_des.length > 30){
                    //     let new_headline_text = headline_text.substr(0, 30);
                    //     headline_text = new_headline_text.concat("...");
                    //     let new_headline_des = headline_des.substr(0, 30);
                    //     headline_des = new_headline_des.concat("...");
                    // }
                    return(
                        <div className="Top_Stories_Card" key ={valueTop}>
                            <div className='Top_Stories_card_left'>
                                <p className='time'>{valueTop.publishedAt}</p>
                                <p className='title'>{headline_text.substr(0, 40)}</p>
                                <p className='description'>{headline_des.substr(0, 30)}</p>
                                <p className='author'>{valueTop.source.name}</p>
                            </div>
                            <div className='Top_Stories_card_right'>
                                <img src={valueTop.urlToImage} className="img"/>
                            </div>
                        </div>
                    );
                })}
        
    </div>
  )
}

export default Top_Stories