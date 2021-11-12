import React from 'react'
import ArticleCards from './ArticleCards'

const infoCards = [
    { id: '100', title: 'Latest News', text: 'Give me the latest news' },
    { id: '101', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { id: '102', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { id: '103', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];
function ArticlesPage({articles, activeArticle}) {
    if(!articles.length){
        return(
            <div className=" flex flex-col h-screen justify-between items-center p-4 "> 
                    <div className=" relative group ">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "></div>
                    <div className="relative px-8 py-4 rounded-lg shadow-lg leading-none bg-black">
                        <h1 className="text-3xl font-semibold animate-bounce">Alan AI</h1>
                    </div>
                    </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    {infoCards.map((info)=>(
                        
                        <div key={info.id} className="relative group w-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "></div>
                        <div  className=" relative flex flex-col justify-between items-center p-4 text-center w-full h-[50vh] bg-black rounded-lg leading-none">
                            <h1 className="font-semibold text-xl">{info.title}</h1>
                            {info.info ? 
                            <p className="text-base"><strong className="text-lg font-semibold">{info.title.split(' ')[2]}</strong> :  <br />{info.info}</p> : null}
                            <p className="text-base"><strong className="text-lg font-semibold">Try Saying : </strong><br />{info.text}</p>
                        </div> 
                        </div>
                    
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="w-full p-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 ">
            {articles?.map((article,i)=>(
                <div className=" p-2">
                    <ArticleCards article={article} key={i} i={i} activeArticle={activeArticle} />
                </div>
            ))}
        </div>
    )
}

export default ArticlesPage