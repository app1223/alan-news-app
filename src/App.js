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
    <div className="bg-black text-white">
      <div>
            <ArticlesPage articles={newsArticle} activeArticle={activeArticle} />
      </div>
    </div>
  );
}

export default App;
