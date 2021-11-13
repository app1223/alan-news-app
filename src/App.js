import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import './App.css';
import ArticlesPage from "./components/ArticlesPage";
import wordsToNumbers from "words-to-numbers";

function App() {
  const [newsArticle, setNewsArticle] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const apiKey = `${process.env.REACT_APP_API}`
  useEffect(() => {
    alanBtn({
      key:apiKey,
      onCommand:({command , articles,number})=>{
        if(command === 'newHeadlines'){
            setNewsArticle(articles)
            setActiveArticle(-1)
        }
        else if(command==='highlight'){
            setActiveArticle(prevArticle=> prevArticle+1)
        }
        else if(command==='open'){ 
          const parsedNumber = number.length > 2 ? wordsToNumbers(number) : number
          const article = articles[parsedNumber -1]
              if (parsedNumber > articles.length) {
                alanBtn().playText('Please try that again...');
              } else if (article) {
                window.open(article.url, '_blank');
                alanBtn().playText('Opening...');
              } else {
                alanBtn().playText('Please try that again...');
              }

      }
    }
  })}, [])
  return (
    <div className=" h-full w-full bg-black text-white">
      {newsArticle.length ?
      <div className=" flex gap-6 p-6 items-center justify-center">
              <div className=" relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "></div>
              <div className="relative px-8 py-4 rounded-lg shadow-lg leading-none bg-black text-center cursor-pointer ">
                      <h2 className="text-lg font-semibold animate-pulse" >Try saying : </h2>
                      <p className="text-base mt-4 animate-pulse">Go Back</p>
                  </div>
              </div>
               <div className=" relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "></div>
               <div className="relative px-8 py-4 rounded-lg shadow-lg leading-none bg-black text-center cursor-pointer">
                       <h2 className="text-lg font-semibold animate-pulse">Try saying : </h2>
                       <p className="text-base mt-4 animate-pulse">Open Article Number [1]</p>
                   </div>
               </div>
               </div>:null
      }
            <ArticlesPage articles={newsArticle} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
