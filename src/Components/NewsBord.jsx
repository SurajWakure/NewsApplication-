import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";


const NewsBord = () => {
  const[articles,setArticle]=useState([]);

  useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response => response.json()).then(data=>setArticle(data.articles));


  },[])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBord
